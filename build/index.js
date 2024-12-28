"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./configs/database"));
const leadRouter_1 = __importDefault(require("./routes/leadRouter"));
// import leadsRouter from './routes/lead'
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.syncDatabase();
        this.routes();
        this.plugins();
    }
    plugins() {
        this.app.use(express_1.default.json());
    }
    syncDatabase() {
        var _a;
        const db = new database_1.default();
        (_a = db.sequelize) === null || _a === void 0 ? void 0 : _a.sync().then(() => {
            console.log('Database synchronized successfully.');
        }).catch((err) => {
            console.error('Error synchronizing the database:', err);
        });
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send('Hello World!');
        });
        this.app.use('/api/v1/leads', leadRouter_1.default);
    }
}
const PORT = 3000;
const app = new App().app;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
