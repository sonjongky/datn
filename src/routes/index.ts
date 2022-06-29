import { Router } from "express";
import {login} from "../controllers/user"

const router: Router = Router();

// router.get("/todos", getTodos)
// router.get("/get-todo/:id", getTodo)

// router.post("/add-todo", addTodo)

// router.put("/edit-todo/:id", updateTodo)

// router.delete("/delete-todo/:id", deleteTodo)

router.post("/login/:username/:password", login);

export default router;
