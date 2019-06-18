import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket } from 'ng-socket-io';
import { Proposal } from '../_models/proposal';
import { HttpClient } from '@angular/common/http';
import { SERVICE_SERVER } from '../config';
import { keyframes } from '@angular/animations';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageMapper } from '../_models/message';
import { Chat, ChatMapper } from '../_models/chat';
import { format } from '../_utils/functions';

const MESSAGE_API_URL = SERVICE_SERVER + '/chats/%KEY%/lines'
const GET_CHATS_API_URL = SERVICE_SERVER + '/users/me/chats'


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private socket: Socket,
    private http: HttpClient
  ){}

  connect(key: string){
    this.socket.connect();
    this.socket.emit('join', {'sender': 'me', 'key': key });
    console.log({'sender': 'me', 'key': key })
  }


  sendMessage(msg : string, key : string) {
    return this.http.post(MESSAGE_API_URL + key, { 
      text: msg 
    });
  }

  disconnect(){
    this.socket.disconnect();
  }
  
  getMessages(forKey : string) {
    let observable = new Observable(observer => {
      this.http.get(MESSAGE_API_URL.replace('%KEY%', forKey)).subscribe(response=> {
        MessageMapper.fromJsonArray(response['chatLines']).forEach(message => {
          observer.next(message);       
        });
        this.socket.on('message', (data) => {
          observer.next(data);
        });
      });
    });
    return observable;
  }

  getUsers() {
    let observable = new Observable(observer => {
      this.socket.on('users-changed', (data) => {
        observer.next(data);
      });
    });
    return observable;
  }
  getChats(){
    return this.http.get(GET_CHATS_API_URL)
  }

}