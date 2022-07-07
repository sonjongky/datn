import { Router } from "express";
import { login } from "../controllers/user";
import { getProducts, getProductById } from "../controllers/products";

const router: Router = Router();

// router.get("/todos", getTodos)
// router.get("/get-todo/:id", getTodo)

// router.post("/add-todo", addTodo)

// router.put("/edit-todo/:id", updateTodo)

// router.delete("/delete-todo/:id", deleteTodo)

router.get("/login/:username/:password", login);

router.get("/products", getProducts);
router.get("/getProduct/:id", getProductById);

export default router;
