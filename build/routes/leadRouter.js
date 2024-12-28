"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseRouter_1 = __importDefault(require("./base/baseRouter"));
const LeadController_1 = __importDefault(require("../controllers/LeadController"));
class LeadRouter extends baseRouter_1.default {
    routes() {
        this.router.post('/', LeadController_1.default.create);
        this.router.patch('/', LeadController_1.default.update);
        this.router.delete('/', LeadController_1.default.delete);
        this.router.get('/', LeadController_1.default.getLeads);
    }
}
exports.default = new LeadRouter().router;
