"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadRepository = void 0;
const Lead_1 = require("../models/Lead");
class LeadRepository {
    save(lead) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Lead_1.Lead.create({
                    phoneNumber: lead.phoneNumber,
                    email: lead.email,
                    name: lead.name,
                    status: lead.status,
                    postalCode: lead.postalCode,
                    dateOfBirth: lead.dateOfBirth,
                    gender: lead.gender,
                    vehicleData: lead.vehicleData
                });
            }
            catch (error) {
                throw new Error('Failed to save lead');
            }
        });
    }
    updateStatus(phoneNumber, newStatus) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const leadToUpdate = yield Lead_1.Lead.findByPk(phoneNumber);
                if (leadToUpdate == null) {
                    throw new Error('Lead not found');
                }
                leadToUpdate.status = newStatus;
                yield leadToUpdate.save();
            }
            catch (error) {
                throw new Error('Failed to update lead status');
            }
        });
    }
    delete(phoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const leadToDelete = yield Lead_1.Lead.findByPk(phoneNumber);
                if (leadToDelete == null) {
                    throw new Error('Lead not found');
                }
                yield Lead_1.Lead.destroy({ where: { phoneNumber } });
            }
            catch (error) {
                throw new Error('Failed to delete lead');
            }
        });
    }
    findByPhoneNumber(phoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const lead = yield Lead_1.Lead.findByPk(phoneNumber);
                if (lead == null) {
                    throw new Error('Lead not found');
                }
                return lead;
            }
            catch (error) {
                throw new Error('Failed to find lead by phoneNumber');
            }
        });
    }
    findyByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const lead = yield Lead_1.Lead.findOne({ where: { email } });
                if (lead == null) {
                    throw new Error('Lead not found');
                }
                return lead;
            }
            catch (error) {
                throw new Error('Failed to find lead by phoneNumber');
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Lead_1.Lead.findAll();
            }
            catch (error) {
                throw new Error('Failed to get all leads');
            }
        });
    }
}
exports.LeadRepository = LeadRepository;
