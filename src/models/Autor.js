import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    nome: {
        type: String,
        required: true,
    },
    nacionalidade: {
        type: String,
    },
}, {
    versionKey: false, // Desativa o campo __v
});

const autores = mongoose.model("autores", autorSchema);

export default autores;