import mongoose from "mongoose"

const recipeSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        area: {
            type: String,
            required: true,
        },
        thumbnail: {
            type: String,
            default: ''
        },
        sourceImage: String,

        tags: {
            type: [String],
            default: []
        },
        youtube: {
            type: String,
            default: ''
        },
        ingredients: [
            new mongoose.Schema({
                name: {
                    type: String,
                    required: true,

                },
                measure: {
                    type: String,
                    required: true,
                }
            }, { _id: false }
            )
        ],
        instructions: {
            type: String,
        }
    },
    {
        versionKey: false,
        timestamps: true,
    })

const modelRecipe = mongoose.model('recipes', recipeSchema)

export default modelRecipe