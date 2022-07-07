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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.addProduct = exports.getProductById = exports.getProducts = void 0;
const product_1 = __importDefault(require("../../models/product"));
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_1.default.find();
        res.status(200).json(products);
    }
    catch (error) {
        throw error;
    }
});
exports.getProducts = getProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productFind = yield product_1.default.findById(req.params.id);
        res.status(200).json(productFind);
    }
    catch (error) {
        throw error;
    }
});
exports.getProductById = getProductById;
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const product = new product_1.default({
            Name: body.Name,
            BrandId: body.BrandId,
            CategoryId: body.CategoryId,
            Image: "https://honghafeed.com.vn/Uploads/images/Sanpham/T%C4%82CN%20Mi%E1%BB%81n%20B%E1%BA%AFc/Heo/1110P%205kg.png",
            GiaTien: body.GiaTien,
            KichThuocHat: body.KichThuocHat,
            NoiSanXuat: body.NoiSanXuat,
            SoLuong: body.SoLuong,
            TrongLuongBao: body.TrongLuongBao,
        });
        const newProduct = yield product.save();
        res.status(201).json({ message: "Product added" });
    }
    catch (error) {
        throw error;
    }
});
exports.addProduct = addProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updateTodo = yield product_1.default.findByIdAndUpdate({ _id: id }, body);
        res.status(200).json({
            message: "Todo updated",
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateProduct = updateProduct;
