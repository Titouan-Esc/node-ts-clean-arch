import {User} from "../../entities/user";

export interface IUserRepository {
    CreateUser(user: User): Promise<boolean>
    ForEach(): Promise<User[]>
    Delete(uid: string): Promise<boolean>
}