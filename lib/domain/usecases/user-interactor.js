"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInteractor = void 0;
class UserInteractor {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async forEach() {
        const result = await this.userRepository.ForEach();
        return result;
    }
    async create(user) {
        const result = await this.userRepository.CreateUser(user);
        return result;
    }
    async delete(uid) {
        const result = await this.userRepository.Delete(uid);
        return result;
    }
}
exports.UserInteractor = UserInteractor;
