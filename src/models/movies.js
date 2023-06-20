import mongoose from "mongoose"

const movieSchema = new mongoose.Schema(
    {

        adult: Boolean,
        backdrop_path: String,
        genre_ids:[Number],

        id: {
            type: Number,
            required: true,
            unique: true,
        },
        original_language : String,

        original_title: {
            type: String,
            required: true,
        },
        overview: {
            type: String,
            required: true,
        },
        popularity:Number,
        poster_path: String,
        release_date:{
            type:String,
            required:true,
        },
        title: {
            type: String,
            required: true,
        },
        video:Boolean,
        vote_average:Number,
        vote_count:Number,


    },
    {
        versionKey: false,
        timestamps: true,
    })

const modelMovie = mongoose.model('movies', movieSchema)

export default modelMovie