"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
    Gender["Other"] = "other";
})(Gender || (exports.Gender = Gender = {}));
var Status;
(function (Status) {
    Status["Registered"] = "registered";
    Status["QuotationUnfinished"] = "quotation_unfinished";
    Status["EmissionUnfinished"] = "emission_unfinished";
    Status["EmissionSucceeded"] = "emission_succeeded";
    Status["RecoveryLead"] = "recovery_lead";
})(Status || (exports.Status = Status = {}));
