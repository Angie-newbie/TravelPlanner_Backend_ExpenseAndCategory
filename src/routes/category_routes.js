import { Router } from 'express' 
import Category from '../model/category.js'

const router = Router()

//get all category
router.get('/categories', async(req, res)=> {
    res.send(await Category.find());
})

export default router