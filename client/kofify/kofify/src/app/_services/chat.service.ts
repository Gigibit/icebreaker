import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SERVICE_SERVER, WEBSOCKET_SERVICE_SERVER } from '../config';
import { MessageMapper, Message, Type } from '../_models/message';
import * as Stomp from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { AuthService } from './auth.service';
import { Chat, ChatMapper } from '../_models/chat';
import { concat, concatMap, map } from 'rxjs/operators';


const KEY = '%KEY%'

const MESSAGE_API_URL = SERVICE_SERVER + `/chats/${KEY}/lines`
const GET_CHATS_API_URL = SERVICE_SERVER + '/users/me/chats'
const FIND_OR_CREATE_CHAT = SERVICE_SERVER + `/chats`
const UNLOCK_CHAT = SERVICE_SERVER + `/chats/${KEY}`
const PING_MESSAGE_READ = SERVICE_SERVER + `/lines` 
const NOTIFICATION_COUNT      = SERVICE_SERVER + '/users/me/chats/unread/count'

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  activeChat : Chat
  key: string
  socket: SockJS
  userId: string
  updateChatSubject: BehaviorSubject<Boolean>;
  notificationCount: BehaviorSubject<number> = new BehaviorSubject(0);

  public chats: Observable<Chat[]>;
  


  constructor(
    private http: HttpClient,
    private authService: AuthService
    ){
      this.updateChatSubject = new BehaviorSubject<Boolean>(false)
      this.getUserId()
    }
    
    async getUserId(){
      this.authService.currentUser.subscribe(user=>{
        if(user)
          this.userId = user.id
      })
    }

    connect(key: string, onConnected : ()=> void){
      this.key = key
      this.socket = new SockJS(WEBSOCKET_SERVICE_SERVER + `?access_token=${this.authService.authToken}`)
      this.stompClient = Stomp.Stomp.over(this.socket)
      
      const _this = this;
      this.stompClient.connect({ }, function (frame) {
        _this.setConnected(true);
        onConnected()
        console.log('Connected: ' + frame);
      });
    }
    
    setActiveChat(chat: Chat){
      this.activeChat = chat
    }

    getNotificationCount(){
      this.http.get(NOTIFICATION_COUNT).subscribe((response)=>this.notificationCount.next(response['count']))
    }

    unlock(chat:Chat): Observable<Chat>{
      return this.http.post(UNLOCK_CHAT.replace(KEY, chat.id), {}).pipe(map( response=>{
        this.authService.refreshCredit(response['credit'])
        return ChatMapper.fromJson(response['chat'])
      }))
    }

    getActiveChat(){
      return this.activeChat;
    }
    
    sendMessage(msg : string) {
      if(this.key == null) throw new Error('key must not be null!');
      this.stompClient.send(
        '/app/' + this.key,
        {},
        JSON.stringify({ 
          'type' : Type.DEFAULT,
          'content' : msg
          })
        );
      }
      sendInvitation(content : string = '') {
        if(this.key == null) throw new Error('key must not be null!');
        this.stompClient.send(
          '/app/' + this.key,
          {},
          JSON.stringify({
            'type' : Type.INVITATION,
            'content' : content
            })
        );
      }
        
      pingMessageRead(ids : number[]){
        this.http.post(PING_MESSAGE_READ, {
          lineIds: ids
        }).subscribe()
      }
      
      
      
      findOrCreate(keys: string[]) {
        return this.http.post( FIND_OR_CREATE_CHAT, {
          userIds: keys
        })
      }
      
      
      getMessages(key: string): Observable<Message[]>{
        const _this = this;
        return this.http.get(MESSAGE_API_URL.replace(KEY, key))
        .pipe(concatMap(response=>{
          let messages = MessageMapper.fromJsonArray(response['chatLines'])
          setTimeout(()=> {
            let ids = messages
            .filter(message=> message.readBy.indexOf(this.userId) == -1)
            .map(message=> message.id)
            if(ids.length > 0){
              _this.pingMessageRead(ids);
            }
          });
          return of(messages)
        }));
      }
      
      bindToMessages() {
        if(this.key == null) throw new Error('key must not be null!');
        const _this = this;
        let observable = new Observable(observer => {  
          _this.stompClient.subscribe( '/user/chat/' + this.key, function (data) {
            if(data['body']){
              let message = MessageMapper.fromJson(JSON.parse(data['body']))
              observer.next(message);
              setTimeout(()=> {
                _this.pingMessageRead([message.id])
              })
            }
          });
        });
        return observable;
      }
      
      getChats(){
        return this.http.get(GET_CHATS_API_URL)
      }
      
      
      disabled = true;
      name: string;
      private stompClient = null;
      
      
      setConnected(connected: boolean) {
        this.disabled = !connected;
      }
      
      
      
      disconnect() {
        if (this.stompClient != null) {
          this.stompClient.disconnect();
        }
        
        this.setConnected(false);
        console.log('Disconnected!');
      }
      
      
    }
