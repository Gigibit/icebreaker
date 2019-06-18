import { LocalizedUser, LocalizedUserMapper } from './user';

export interface Message{
    id: number,
    user: LocalizedUser,
    content: string,
    createdAt: string
}

export class MessageMapper{
    public static fromJson(data: any): Message{
        return {
            id: data['id'],
            user: LocalizedUserMapper.fromJson(data['user']),
            content: data['content'],
            createdAt: data['createdAt']
        }
    } 

    public static fromJsonArray(data: any): Message[]{
        return data &&
        data.map( message => this.fromJson(message))
    }
}