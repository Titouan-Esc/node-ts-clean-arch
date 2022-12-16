import {User} from "../../../domain/entities/user";

export interface IUserDataSource {
    insert(user:User): Promise<boolean>
    selectAll(): Promise<User[]>
}