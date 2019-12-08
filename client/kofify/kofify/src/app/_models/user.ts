import { age } from '../_utils/functions';

export interface User{
    firstName : string
    lastName : string
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
    credits?: string
    rewardAvailable?: boolean
}
export interface LocalizedUser{
    address?: string
    distance?: number
    user: User
}

export interface UpdatableUserInfo{
    bio? : string
    gender? : string
    imagesSorting : number[]
}

export enum LoginType{
    NATIVE,
    FACEBOOK
}

export class LocalizedUserMapper{
    static fromJson(data: any): LocalizedUser{
        return {
            address  : data['address'],
            distance : data['distance'],
            user     : {
                id : data['user']['id'],
                firstName :  data['user']['firstName'],
                lastName:  data['user']['lastName'],
                name: data['user']['firstName'] ,
                profileImg: data['user']['imageUrl'],
                age: age(data['user']['birthday']),
                lastSeen : data['user']['lastSeen']
            }}
    }
    static fromJsonArray(data:any): LocalizedUser[]{
        return data ?  data.map(user => LocalizedUserMapper.fromJson(user)) : []
    }
}


export class UserMapper{
    static fromJson(data:any): User{

        let admobCredit = data['user']['credit'] && data['user']['credit']['admobCredits']
        let admobRewardAvailable = admobCredit && admobCredit['count'] < admobCredit['countMax'];
         
        return data ? {
            firstName : data['user']['firstName'],
            lastName: data['user']['lastName'],
            name: data['user']['firstName'],
            age: age(data['user']['birthday']),
            id: data['user']['id'],
            credits: data['user']['credit'] && data['user']['credit']['credits'],
            rewardAvailable: admobRewardAvailable,
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