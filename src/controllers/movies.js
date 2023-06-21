import { movieModel } from '../models/index.js'

/**
 * Método para obtener todos los items
 */
const getItems = async (req, res) => {
    // const data = ['track1', 'track2']
    // res.send({ data })
    const listaPeliculas = await movieModel.find({})
    console.log('recetas obtenidas: ' + listaPeliculas.length)
    res.send({
        data: listaPeliculas
    })
}

/**
 * Método para obtener un item por id
 */
const getItemById = async (req, res) => {
    console.log(`getItemByID: param ${req.params.id}`)
    // res.send({ data })
    const data = await movieModel.find({ id: req.params.id })
    res.send({ data })
}

/**
 * Método para obtener items a través de una búsqueda
 */
const getItemBySearch = async (req, res) => {

    var { query, languaje, include_adult } = req.query

    var qmongo = {}
    if (query) {
        qmongo = { "title": { $regex: query } }
    }

    if (languaje) {
        qmongo = { ...qmongo, "original_language": { $regex: languaje } }
    }

    if (include_adult) {
        qmongo = { ...qmongo, "adult": { $eq: include_adult } }
    }

    console.log(`getItemBySearch: query on Mongo:${qmongo}`)
    console.log(qmongo)

    const data = await movieModel.find(qmongo)
    res.send({ movie: data })
}

/**
 * Método para crear un item
 */
const createItem = async (req, res) => {
    const body = req.body
    // console.log(`recipe body: ${body}`)
    console.log(JSON.stringify(body, null, 2))

    const data = await movieModel.create(body)

    // console.log(body)
    res.send({ data })
}


export { getItems, createItem, getItemById, getItemBySearch }