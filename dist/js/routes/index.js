"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const products_1 = require("../controllers/products");
const router = (0, express_1.Router)();
// router.get("/todos", getTodos)
// router.get("/get-todo/:id", getTodo)
// router.post("/add-todo", addTodo)
// router.put("/edit-todo/:id", updateTodo)
// router.delete("/delete-todo/:id", deleteTodo)
router.get("/login/:username/:password", user_1.login);
router.get("/products", products_1.getProducts);
router.get("/getProduct/:id", products_1.getProductById);
exports.default = router;
