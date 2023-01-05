import express from "express"
import { Response, Request} from "express"
import {IUserInteractor} from "../domain/interfaces/usecases/user-interactor"

export default function UsersRouter(
    userInteractor: IUserInteractor
) {
    const router = express.Router()

    router.get('/forEach', async (_req:Request, res: Response) => {
        try {
            const users = await userInteractor.forEach()
            res.send(users)
        } catch (err: any) {
            res.status(500).send({message: "Error fetching data"})
        }
    })

    router.post('/create', async (req: Request, res: Response) => {
        try {
            await userInteractor.create(req.body)
            res.statusCode = 201
            res.json({message: "User Created"})
        } catch (err: any) {
            res.status(500).send({message: "Error creating user"})
        }
    })

    router.delete('/remove', async (req: Request, res: Response) => {
        try {
            await userInteractor.delete(req.body)
            res.statusCode = 200
            res.json({message: 'User Deleted'})
        } catch (err: any) {
            res.status(500).send({message: 'Error deleting user'})
        }
    })

    return router
}