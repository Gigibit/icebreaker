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

<<<<<<< Updated upstream
const MESSAGE_API_URL = SERVICE_SERVER + '/api/messages/'
=======


const KEY = '%KEY%'

const MESSAGE_API_URL = SERVICE_SERVER + `/chats/${KEY}/lines`
>>>>>>> Stashed changes
const GET_CHATS_API_URL = SERVICE_SERVER + '/users/me/chats'


const RECEIVE_ENDPOINT = SERVICE_SERVER + `/chat/${KEY}/receive`
const SEND_ENDPOINT = SERVICE_SERVER + `/chat/${KEY}/send`

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  key: string
  constructor(
    private socket: Socket,
    private http: HttpClient
  ){}

<<<<<<< Updated upstream
  connect(proposal: Proposal){
    this.socket.connect();
    this.socket.emit('join', {'sender': 'me', 'proposal': proposal.id });
    console.log({'sender': 'me', 'proposal': proposal.id })
=======
  connect(key: string){
    if(key){
      this.key = key
      this.socket.connect();
    }
>>>>>>> Stashed changes
  }


  sendMessage(msg : string) {
    this.socket.emit(SEND_ENDPOINT.replace(KEY, this.key), msg);
  }

  disconnect(){
    this.socket.disconnect();
  }
  
  getMessages() {
    let observable = new Observable(observer => {
<<<<<<< Updated upstream
      this.http.get(MESSAGE_API_URL + forKey).subscribe(response=> {
=======
      this.http.get(MESSAGE_API_URL.replace(KEY, this.key)).subscribe(response=> {
>>>>>>> Stashed changes
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

function keyNotVoid(){
  return function(target){
    
  }
}
