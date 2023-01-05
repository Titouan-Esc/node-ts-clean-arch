"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongodbUserDataSource = void 0;
class MongodbUserDataSource {
    database;
    constructor(database) {
        this.database = database;
    }
    async insert(user) {
        const result = await this.database.insertOne(user);
        return result !== null;
    }
    async selectAll() {
        const result = await this.database.find({});
        return result.map(item => ({
            id: item._id.toString(),
            name: item.name,
            email: item.email,
            password: item.password
        }));
    }
    async delete(uid) {
        const result = await this.database.deleteOne({ id: uid });
        return result !== null;
    }
}
exports.MongodbUserDataSource = MongodbUserDataSource;
