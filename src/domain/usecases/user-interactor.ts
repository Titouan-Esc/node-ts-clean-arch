import {User} from "../entities/user";
import {IUserInteractor} from "../interfaces/usecases/user-interactor";
import {IUserRepository} from "../interfaces/repositories/user-repository";

export class UserInteractor implements IUserInteractor {
    userRepository: IUserRepository
    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository
    }

    async forEach(): Promise<User[]> {
        const result = await this.userRepository.ForEach()
        return result
    }

    async create(user: User): Promise<boolean> {
        const result = await this.userRepository.CreateUser(user)
        return result
    }
}