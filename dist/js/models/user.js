"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    Username: {
        type: String,
        required: true,
    },
    Fullname: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
    Email: { type: String, required: true },
    Role: {
        type: String,
        required: true,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("User", userSchema);
