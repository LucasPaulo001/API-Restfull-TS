import {model, Schema } from "mongoose";

const MovieSchema = new Schema({
    title: { type: String },
    rating: { type: Number },
    description: { type: String },
    director: { type: String },
    stars: { type: Array },
    poster: { type: String }
}, { timestamps: true })

export const MovieModel = model("Movie", MovieSchema)
