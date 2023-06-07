import express from 'express'
import { getItems, createItem, getItemById, getItemBySearch } from '../controllers/recipes.js'

const router = express.Router() // Manejador de la rutas

// declarar ruta de canciones
router.get('/recipes', getItems)
router.get('/recipes/search', getItemBySearch)
router.get('/recipes/:id', getItemById)

router.post('/recipes', createItem)


export default router