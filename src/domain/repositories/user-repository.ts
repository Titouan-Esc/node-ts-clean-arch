import {User} from "../entities/user";
import {IUserDataSource} from "../../data/interfaces/data-sources/user-data-source";
import {IUserRepository} from "../interfaces/repositories/user-repository";

export class UserRepository implements IUserRepository {
    userDataSource: IUserDataSource
    constructor(userDataSource: IUserDataSource) {
        this.userDataSource = userDataSource
    }

    async CreateUser(user: User): Promise<boolean> {
        const result = await this.userDataSource.insert(user)
        return result
    }

    async ForEach(): Promise<User[]> {
        const result = await this.userDataSource.selectAll()
        return result
    }

    async Delete(uid: string): Promise<boolean> {
        const result = await this.userDataSource.delete(uid)
        return result
    }

}