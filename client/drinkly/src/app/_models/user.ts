const DEFAULT_USER_IMG = '../../assets/imgs/user.svg'

export interface User{
    name: string
    age?: number
    id?: string
    profileImg: string
    description?: string
    imgs? : string[]
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
            user     : UserMapper.fromJson(data['user'])
        }
    }
    static fromJsonArray(data:any[]): LocalizedUser[]{
        return data ?  data.map(user => LocalizedUserMapper.fromJson(user)) : []
    }
}


export class UserMapper{
    static fromJson(data:any): User{
        return data ? {
            name: data['firstName'] + ' ' + data['lastName'],
            age: data['age'],
            id: data['id'],
            profileImg: data['profileImg'] && data['profileImg'] !== 'null' ? (data['profileImg']+'?'+new Date().getTime() ) : DEFAULT_USER_IMG,
            description: data['description'],
            iLike: data['has_propsed'],
            imgs: data['imgs'],
            props: data['props'],
            address: data['address'],
            token: data['token']
        } : null
    }
    static  fromJsonArray(data:any[]): User[]{
        return data ?  data.map(user => UserMapper.fromJson(user)) : []
    }
}
