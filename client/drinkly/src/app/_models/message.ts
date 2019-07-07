import { User } from './user';

export interface Message{
    id: number,
    user: User,
    content: string,
    type: Type,
    createdAt: string,
    readBy: string[]
}
export enum Type{
    INVITATION, DEFAULT
}


export class MessageMapper{
    public static fromJson(data: any): Message{
        
        return {
            id: data['id'],
            user: {
                id : data['user'] && data['user']['id'],
                name : data['user'] && ( data['user']['firstName'] + ' ' + data['user']['lastName'] ),
                profileImg: data['user'] && 
                            data['user']['imageUrl'] && 
                            data['user']['imageUrl']  
            },
            type: data['type'],
            content: data['content'],
            createdAt: data['createdAt'],
            readBy : data['readBy']
        }
    } 

    public static fromJsonArray(data: any): Message[]{
        return data &&
        data.map( message => this.fromJson(message))
    }
}