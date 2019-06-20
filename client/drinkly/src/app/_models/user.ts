export const DEFAULT_USER_IMG = '../../assets/imgs/user.svg'

export interface User{
    name: string
    age?: number
    id?: string
    profileImg: string
    description?: string
    images? : string[]
    props? : string[]
    iLike?:  boolean
    loginType?: LoginType
    token? : string
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
        return {
            address  : data['address'],
            distance : data['distance'],
            user     : {
                name: data['firstName'] + ' ' + data['lastName'],
                profileImg: data['imageUrl'] ? ( data['imageUrl']+'?'+new Date().getTime() ) : DEFAULT_USER_IMG,
            }}
    }
    static fromJsonArray(data:any): LocalizedUser[]{
        return data ?  data.map(user => LocalizedUserMapper.fromJson(user)) : []
    }
}


export class UserMapper{
    static fromJson(data:any): User{
        console.log(data['user']['id'])
        return data ? {
            name: data['user']['firstName'] + ' ' + data['user']['lastName'],
            age: data['age'],
            id: data['user']['id'],
            profileImg: data['user'] && data['user']['imageUrl'] ? ( data['user']['imageUrl']+'?'+new Date().getTime() ) : DEFAULT_USER_IMG,
            description: data['description'],
            iLike: data['has_propsed'],
            images: data['images'],
            props: data['props'],
            address: data['address'],
            token: data['token']
        } : null
    }
    static  fromJsonArray(data:any[]): User[]{
        return data ?  data.map(user => UserMapper.fromJson(user)) : []
    }
}
