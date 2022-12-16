"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const mongodb_1 = require("mongodb");
const mongodb_user_data_source_1 = require("./data/data-sources/mongodb/mongodb-user-data-source");
const user_router_1 = __importDefault(require("./router/user-router"));
const user_interactor_1 = require("./domain/usecases/user-interactor");
const user_repository_1 = require("./domain/repositories/user-repository");
async function getMongoDS() {
    const client = new mongodb_1.MongoClient("mongodb://localhost:27017/EscBook");
    await client.connect();
    const db = client.db("EscBook");
    const userDatabase = {
        find: (query) => db.collection("user").find(query).toArray(),
        insertOne: (doc) => db.collection("user").insertOne(doc)
    };
    return new mongodb_user_data_source_1.MongodbUserDataSource(userDatabase);
}
(async () => {
    const dataSource = await getMongoDS();
    const userMiddleware = (0, user_router_1.default)(new user_interactor_1.UserInteractor(new user_repository_1.UserRepository(dataSource)));
    server_1.default.use("/user", userMiddleware);
    server_1.default.listen(4500, () => console.log("Running on http://localhost:4500"));
})();
