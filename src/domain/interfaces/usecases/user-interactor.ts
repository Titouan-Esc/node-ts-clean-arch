import {User} from "../../entities/user";

export interface IUserInteractor {
    forEach(): Promise<User[]>
    create(user:User): Promise<boolean>
}