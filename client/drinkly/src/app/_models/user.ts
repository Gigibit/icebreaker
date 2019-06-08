export interface User{
    name: string
    age?: number
    id?: string
    email: string
    password?: string
    profileImg: string
    description?: string
    imgs? : string[]
    props? : string[]
    iLike?:  boolean
    loginType?: LoginType
    token? : string
    address?: string

}
export enum LoginType{
    NATIVE,
    FACEBOOK
}
export class UserMapper{
    static fromJson(data:any): User{
        return data ? {
            name: data['name'],
            age: data['age'],
            id: data['id'],
            profileImg: data['profile_img']+'?'+new Date().getTime(),
            description: data['description'],
            iLike: data['has_propsed'],
            imgs: data['imgs'],
            props: data['props'],
            email: data['email'],
            address: data['address'],
            token: data['token']
        } : null
    }
    static  fromJsonArray(data:any[]): User[]{
        return data ?  data.map(user => UserMapper.fromJson(user)) : []
    }
}
