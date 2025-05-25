
import mongoose from "mongoose";
const uri = "mongodb+srv://rafazanezi:senha@cluster0.n9ry8on.mongodb.net/alura_node";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    await mongoose.connect(uri, clientOptions);
    console.log("Conectado ao MongoDB com sucesso!");
  } catch (error) {
    console.log.bind(error, "Ocorreu um erro ao conectar ao MongoDB:");
  }
}

export default run;
