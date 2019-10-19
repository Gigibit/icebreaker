import { LocalizedUser, LocalizedUserMapper } from './user';
import { Message, MessageMapper } from './message';
export interface Chat{
    id: string,
    lastMessage: Message,
    img: string,
    name: string,
    enabled?: boolean,
    users: LocalizedUser[]
}

export class ChatMapper{
    static fromJson(data: any): Chat{
        const users: LocalizedUser[] = data['users'] && data['users'].map( user => { return {
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
            enabled: data['enabled'],
            img : data['imageUrl'],
            name : data['title'] || (users && users[0].user.name)
        }
    }
    static fromJsonArray(data: any): Chat[]{
        return data &&
               data.map(chat=> ChatMapper.fromJson(chat))
    }
}
