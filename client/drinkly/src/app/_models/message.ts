import { DEFAULT_USER_IMG, User } from './user';

export interface Message{
    id: number,
    user: User,
    content: string,
    createdAt: string
}

export class MessageMapper{
    public static fromJson(data: any): Message{
        return {
            id: data['id'],
            user: {
                id : data['user'] && data['user']['id'],
                name : data['user'] && ( data['user']['firstName'] + ' ' + data['user']['lastName'] ),
                profileImg: ( data['user'] && 
                            ( data['user']['imageUrl'] && 
                            ( data['imageUrl']+'?'+new Date().getTime() ) )  ) 
                            || DEFAULT_USER_IMG
            },
            content: data['content'],
            createdAt: data['createdAt']
        }
    } 

    public static fromJsonArray(data: any): Message[]{
        return data &&
        data.map( message => this.fromJson(message))
    }
}