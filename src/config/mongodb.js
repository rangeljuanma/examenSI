import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const MONGODB_URI = process.env.DB_URLMONGO || 'mongodb://127.0.0.1:27017/test'

// Exportamos la función de conexión
const dbConnect = async () => {
    console.log('Connecting to MongoDB... a través de la URL: ', MONGODB_URI)
    await mongoose.connect(MONGODB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
}

export { dbConnect }

