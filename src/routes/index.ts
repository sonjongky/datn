import { Router } from 'express'
import { getTodos, getTodo, addTodo, updateTodo, deleteTodo } from '../controllers/todos'
 
const router: Router = Router()

router.get("/todos", getTodos)
router.get("/get-todo/:id", getTodo)


router.post("/add-todo", addTodo)

router.put("/edit-todo/:id", updateTodo)

router.delete("/delete-todo/:id", deleteTodo)


export default router
