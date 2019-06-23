import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SERVICE_SERVER, WEBSOCKET_SERVICE_SERVER } from '../config';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageMapper } from '../_models/message';
import * as Stomp from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { AuthService } from './auth.service';


const KEY = '%KEY%'

const MESSAGE_API_URL = SERVICE_SERVER + `/chats/${KEY}/lines`
const GET_CHATS_API_URL = SERVICE_SERVER + '/users/me/chats'
const FIND_OR_CREATE_CHAT = SERVICE_SERVER + `/chats`


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  key: string
  socket: SockJS
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ){}

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


  sendMessage(msg : string) {
    if(this.key == null) throw new Error('key must not be null!');
    this.stompClient.send(
      '/app/' + this.key,
      {},
      JSON.stringify({ 'content' : msg  })
    );
  }


  findOrCreate(keys: string[]) {
    return this.http.post( FIND_OR_CREATE_CHAT, {
      userIds: keys
    })
  }
  
  getMessages() {
    if(this.key == null) throw new Error('key must not be null!');
    const _this = this;

    let observable = new Observable(observer => {
      this.http.get(MESSAGE_API_URL.replace(KEY, this.key)).subscribe(response=> {
        MessageMapper.fromJsonArray(response['chatLines']).forEach(message => {
          observer.next(message);       
        });
        _this.stompClient.subscribe( '/user/chat/' + this.key, function (data) {
          if(data['body']) observer.next(MessageMapper.fromJson(JSON.parse(data['body'])));
        });
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
