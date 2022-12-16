import {IUserDataSource} from "../../interfaces/data-sources/user-data-source";
import {IDatabaseWrapper} from "../../interfaces/data-sources/database-wrapper";
import {User} from "./models/user";

export class MongodbUserDataSource implements IUserDataSource {
    private database: IDatabaseWrapper
    constructor(database: IDatabaseWrapper) {
        this.database = database
    }

    async insert(user: User): Promise<boolean> {
        const result = await this.database.insertOne(user)
        return result !== null
    }

    async selectAll(): Promise<User[]> {
        const result = await this.database.find({})
        return result.map(item => ({
            id: item._id.toString(),
            name: item.name,
            email: item.email,
            password: item.password
        }))
    }
}