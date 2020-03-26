const mongoose = require("mongoose");

const ImovelSchema = new mongoose.Schema({
    titulo: {
        type: String,
    },
    descricao: {
        type: String,
    },
    tipo: {//1 = Casa, 2 = apartamento, 3 = imovelcomecial, 4 = terreno
        type: Number,
    },
    condicaoImovel: Number, // 1=comprar, 2=alugar 3 =  imóveis novos , pode der renomeado para transação
    valor: {
        type: String
    },
    end_bairro: String,
    end_rua: String,
    end_numero: String,
    end_cidade: String,
    end_estado: String,
    end_cep: String,
    end_complemento: String,
    //endereco: {numero: String, apartamento: String, rua: String, bairro: String, cidade: String, estado: String, cep: String, obs: String},
    situacao: {type: Number, default: 0},//0-disponivel, 1-vendido, 2-alugado
    numGaragem: Number,
    numQuarto: Number,
    numBanheiro: Number,
    numSuites: Number,
    urlImagens: [{id: Number, url: String, rotulo: String}],
    area: Number,
    areaTotal: Number,
    itens: [String], //Churrasqueira,Espaço gourmet, Jardim, Piscina, Salão de festas, Salão de jogos, Lavanderia, Estacionamento, 
    destaque: {
        type: Boolean,
        default: false
    },    
    condominio: String,
    iptu: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.models.Imovel || mongoose.model("Imovel", ImovelSchema);
