import { LocalizedUser, LocalizedUserMapper } from './user';
import { Message, MessageMapper } from './message';

export interface Chat{
    id: number,
    lastMessage: Message,
    img: string,
    name: string,
    users: LocalizedUser[]
}

export class ChatMapper{
    static fromJson(data: any): Chat{
        const users = LocalizedUserMapper.fromJsonArray(data['users'])

        return {
            id: data['id'],
            lastMessage: MessageMapper.fromJson(data['lastMessage']),
            users: users,
            img : users[0].user.profileImg,
            name : users[0].user.name
        }
    }
    static fromJsonArray(data: any): Chat[]{
        return data &&
               data.map(chat=> ChatMapper.fromJson(chat))
    }
}
