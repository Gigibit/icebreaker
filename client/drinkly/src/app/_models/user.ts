import { age } from '../_utils/functions';

// export const DEFAULT_USER_IMG = '../../assets/imgs/user.svg'

export interface User{
    name: string
    age?: string
    id?: string
    profileImg: string
    description?: string
    images? : string[]
    bio? : string
    props? : string[]
    iLike?:  boolean
    loginType?: LoginType
    token? : string
    lastSeen? : string
    createdAt? : string
    address?: string
}
export interface LocalizedUser{
    address?: string
    distance?: number
    user: User
}


export enum LoginType{
    NATIVE,
    FACEBOOK
}

export class LocalizedUserMapper{
    static fromJson(data: any): LocalizedUser{
        console.log('mapping user',data)
        return {
            address  : data['address'],
            distance : data['distance'],
            user     : {
                id : data['user']['id'],
                name: data['user']['firstName'] + ' ' + data['user']['lastName'],
                profileImg: data['user']['imageUrl']
            }}
    }
    static fromJsonArray(data:any): LocalizedUser[]{
        return data ?  data.map(user => LocalizedUserMapper.fromJson(user)) : []
    }
}


export class UserMapper{
    static fromJson(data:any): User{
        window['user'] = data
        window['ageFn'] = age
        return data ? {
            name: data['user']['firstName'] + ' ' + data['user']['lastName'],
            age: age(data['user']['birthday']),
            id: data['user']['id'],
            bio: data['user']['bio'],
            profileImg: data['user']['imageUrl'],
            description: data['description'],
            iLike: data['has_propsed'],
            images: data['images'],
            props: data['props'],
            lastSeen: data['lastSeen'],
            createdAt: data['createdAt'],
            address: data['address'],
            token: data['token']
        } : null
    }
    static  fromJsonArray(data:any[]): User[]{
        return data ?  data.map(user => UserMapper.fromJson(user)) : []
    }
}
