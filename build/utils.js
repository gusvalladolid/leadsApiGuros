"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./services/enums");
const parsePhoneNumber = (phoneNumberFromRequest) => {
    if (!isNumber(phoneNumberFromRequest)) {
        throw new Error('Invalid phone number format');
    }
    return phoneNumberFromRequest;
};
// Missing Regex for email validation
const parseEmail = (emailFromRequest) => {
    if (!isString(emailFromRequest)) {
        throw new Error('Invalid email format');
    }
    return emailFromRequest;
};
const parseName = (nameFromRequest) => {
    if (!isString(nameFromRequest)) {
        throw new Error('Invalid name format');
    }
    return nameFromRequest;
};
const parseStatus = (statusFromRequest) => {
    if (!isString(statusFromRequest) || !isStatus(statusFromRequest)) {
        throw new Error('Invalid status format');
    }
    return statusFromRequest;
};
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Invalid date format');
    }
    return dateFromRequest;
};
const parsePostalCode = (postalCodeFromRequest) => {
    if (!isNumber(postalCodeFromRequest)) {
        throw new Error('Invalid postal code format');
    }
    return postalCodeFromRequest;
};
const parseGender = (genderFromRequest) => {
    if (!isString(genderFromRequest) || !isGender(genderFromRequest)) {
        throw new Error('Invalid gender format');
    }
    return genderFromRequest;
};
const parseVehicleData = (vehicleDataFromRequest) => {
    if (!isVehicleData(vehicleDataFromRequest) || !isString(vehicleDataFromRequest.brand) || !isString(vehicleDataFromRequest.model) || !isNumber(vehicleDataFromRequest.year)) {
        throw new Error('Invalid vehicle data format');
    }
    return vehicleDataFromRequest;
};
const isString = (string) => {
    return typeof string === 'string';
};
const isNumber = (number) => {
    return typeof number === 'number';
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const isStatus = (param) => {
    return Object.values(enums_1.Status).includes(param);
};
const isGender = (param) => {
    return Object.values(enums_1.Gender).includes(param);
};
const isVehicleData = (params) => {
    return Object.keys(params).includes('brand') && Object.keys(params).includes('model') && Object.keys(params).includes('year');
};
const toNewLeadEntry = (object) => {
    const newEntry = {
        phoneNumber: parsePhoneNumber(object.phoneNumber),
        email: parseEmail(object.email),
        name: parseName(object.name),
        status: parseStatus(object.status),
        postalCode: parsePostalCode(object.postalCode),
        dateOfBirth: parseDate(object.dateOfBirth),
        gender: parseGender(object.gender),
        vehicleData: parseVehicleData(object.vehicleData) != null ? object.vehicleData : {}
    };
    return newEntry;
};
exports.default = toNewLeadEntry;
