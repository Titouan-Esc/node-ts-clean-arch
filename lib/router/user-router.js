"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
function UsersRouter(userInteractor) {
    const router = express_1.default.Router();
    router.get('/forEach', async (_req, res) => {
        try {
            const users = await userInteractor.forEach();
            res.send(users);
        }
        catch (err) {
            res.status(500).send({ message: "Error fetching data" });
        }
    });
    router.post('/create', async (req, res) => {
        try {
            await userInteractor.create(req.body);
            res.statusCode = 201;
            res.json({ message: "User Created" });
        }
        catch (err) {
            res.status(500).send({ message: "Error creating user" });
        }
    });
    router.delete('/remove', async (req, res) => {
        try {
            await userInteractor.delete(req.body);
            res.statusCode = 200;
            res.json({ message: 'User Deleted' });
        }
        catch (err) {
            res.status(500).send({ message: 'Error deleting user' });
        }
    });
    return router;
}
exports.default = UsersRouter;
