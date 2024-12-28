"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLead = exports.findLeadById = exports.getLeads = void 0;
const leads_json_1 = __importDefault(require("./leads.json"));
const leads = leads_json_1.default;
const getLeads = () => leads;
exports.getLeads = getLeads;
const findLeadById = (id) => {
    return leads.find(lead => lead.phoneNumber === id);
};
exports.findLeadById = findLeadById;
const addLead = (newDiaryEntry) => {
    const newLead = Object.assign({}, newDiaryEntry);
    leads.push(newLead);
    return newLead;
};
exports.addLead = addLead;
