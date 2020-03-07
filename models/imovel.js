const mongoose = require("mongoose");

const ImovelSchema = new mongoose.Schema({
    titulo: {
        type: String,
    },
    descricao: {
        type: String,
    },
    tipo: {//1 = Casa, 2 = apartamento, 3 = imovelcomecial, 4 = terreno
        type: String,
    },
    condicaoImovel: String, // 1=comprar, 2=alugar 3 =  imóvel novo
    valor: {
        type: Number
    },
    bairro: String,
    endereco: {numero: String, apartamento: String, rua: String, bairro: String, cidade: String, estado: String, cep: String, obs: String},
    estado: Number, //0-disponivel, 1-vendido, 2-alugado
    numGarage: Number,
    numQuarto: Number,
    numBanheiro: Number,
    urlImagens: [{id: Number, url: String, rotulo: String}],//mudar para [{id: Number, url: String, rotulo: String}]
    area: Number,
    destaque: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.models.Imovel || mongoose.model("Imovel", ImovelSchema);
