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
        const users: LocalizedUser[] = data['users'].map( user => { return {
            user: {
                id: user['id'],
                name: user['firstName'] + ' ' + user['lastName'],
                profileImg : user['imageUrl']
            }
        }
    })

        return {
            id: data['id'],
            lastMessage: data['lastMessage'] ? MessageMapper.fromJson(data['lastMessage']) : null,
            users: users,
            img : users[0].user.profileImg,
            name : data['title'] || users[0].user.name
        }
    }
    static fromJsonArray(data: any): Chat[]{
        return data &&
               data.map(chat=> ChatMapper.fromJson(chat))
    }
}
