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
const Lead_1 = require("../models/Lead");
const leadRepository_1 = require("../repository/leadRepository");
class LeadController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newLead = new Lead_1.Lead();
                newLead.phoneNumber = req.body.phoneNumber;
                newLead.email = req.body.email;
                newLead.name = req.body.name;
                newLead.status = req.body.status;
                newLead.postalCode = req.body.postalCode;
                newLead.dateOfBirth = req.body.dateOfBirth;
                newLead.gender = req.body.gender;
                newLead.vehicleData = req.body.vehicleData;
                console.log('Line 17', newLead);
                yield new leadRepository_1.LeadRepository().save(newLead);
                res.status(201).json({
                    message: 'Lead created successfully',
                    status: 'Created!'
                });
            }
            catch (error) {
                res.status(500).json({
                    message: 'Internal Server Error',
                    status: 'Internal Server Error'
                });
                console.log('Line 23', req.body);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { phoneNumber, status } = req.body;
                yield new leadRepository_1.LeadRepository().updateStatus(+phoneNumber, status);
                res.status(200).json({
                    message: 'Lead status updated successfully',
                    status: 'Updated!'
                });
            }
            catch (error) {
                res.status(500).json({
                    message: 'Internal Server Error',
                    status: 'Internal Server Error'
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { phoneNumber } = req.body;
                yield new leadRepository_1.LeadRepository().delete(+phoneNumber);
                res.status(200).json({
                    message: 'Lead deleted successfully',
                    status: 'Deleted!'
                });
            }
            catch (error) {
                res.status(500).json({
                    message: 'Internal Server Error',
                    status: 'Internal Server Error'
                });
            }
        });
    }
    getLeads(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { phoneNumber } = req.body;
                if (typeof phoneNumber === 'number') {
                    const lead = yield new leadRepository_1.LeadRepository().findByPhoneNumber(+req.body.phoneNumber);
                    res.status(200).json({
                        message: 'Successfully retrieved lead',
                        status: 'Ok!',
                        data: lead
                    });
                }
                else {
                    const leads = yield new leadRepository_1.LeadRepository().getAll();
                    res.status(200).json({
                        message: 'Successfully retrieved all leads',
                        status: 'Ok!',
                        data: leads
                    });
                }
            }
            catch (error) {
                res.status(500).json({
                    message: 'Internal Server Error',
                    status: 'Internal Server Error'
                });
            }
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { phoneNumber } = req.body;
                const lead = yield new leadRepository_1.LeadRepository().findByPhoneNumber(+phoneNumber);
                res.status(200).json({
                    message: 'Successfully retrieved lead',
                    status: 'Ok!',
                    data: lead
                });
            }
            catch (error) {
                res.status(500).json({
                    message: 'Internal Server Error',
                    status: 'Internal Server Error'
                });
            }
        });
    }
}
exports.default = new LeadController();
