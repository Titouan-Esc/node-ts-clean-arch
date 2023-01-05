"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
class UserRepository {
    userDataSource;
    constructor(userDataSource) {
        this.userDataSource = userDataSource;
    }
    async CreateUser(user) {
        const result = await this.userDataSource.insert(user);
        return result;
    }
    async ForEach() {
        const result = await this.userDataSource.selectAll();
        return result;
    }
    async Delete(uid) {
        const result = await this.userDataSource.delete(uid);
        return result;
    }
}
exports.UserRepository = UserRepository;
