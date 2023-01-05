import server from "./server"
import {MongoClient} from "mongodb"
import {IDatabaseWrapper} from "./data/interfaces/data-sources/database-wrapper";
import {MongodbUserDataSource} from "./data/data-sources/mongodb/mongodb-user-data-source";
import UsersRouter from "./router/user-router";
import {UserInteractor} from "./domain/usecases/user-interactor";
import {UserRepository} from "./domain/repositories/user-repository";

async function getMongoDS() {
    const client: MongoClient = new MongoClient("mongodb://localhost:27017/EscBook")
    await client.connect()

    const db = client.db("EscBook")

    const userDatabase: IDatabaseWrapper = {
        find: (query) => db.collection("user").find(query).toArray(),
        insertOne: (doc) => db.collection("user").insertOne(doc),
        deleteOne: (query) => db.collection("user").deleteOne(query)
    }

    return new MongodbUserDataSource(userDatabase)
}

(async () => {
    const dataSource = await getMongoDS()

    const userMiddleware = UsersRouter(
        new UserInteractor(new UserRepository(dataSource))
    )

    server.use("/user", userMiddleware)
    server.listen(4500, () => console.log("Running on http://localhost:4500"))
})()