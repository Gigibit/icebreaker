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
    DEFAULT, INVITATION
}


export class MessageMapper{
    public static fromJson(data: any): Message{
        
        return {
            id: data['id'],
            user: {
                id : data['user'] && data['user']['id'],
                firstName: data['user'] && data['user']['firstName'],
                lastName: data['user'] && data['user']['lastName'],
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