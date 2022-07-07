"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    Type: {
        type: Number,
    },
    Name: {
        type: String,
    },
    BrandId: {
        type: String,
    },
    Image: { type: String },
    CategoryId: {
        type: String,
    },
    Description: {
        type: String,
    },
    TrongLuongBao: { type: String },
    NoiSanXuat: { type: String },
    KichThuocHat: { type: String },
    SoLuong: { type: String },
    GiaTien: { type: String },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Product", productSchema);
