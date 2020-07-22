const INITIAL_STATE = {
    titulo: '',
    tipo: '',
    condicaoImovel: 0,//transação
    valor: '',
    descricao: '',
    endBairro: '',
    endRua: '',
    endNumero: '',
    endCidade: '',
    endEstado: '',
    endCep: '',
    endComplemento: '',
    numGaragem: 0,
    numQuarto: 0,
    numBanheiro: 0,
    numSuites: 0,
    area: 0,
    areaTotal: 0,
    condominio: '',
    iptu: ''
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ATUALIZAR_IMOVEL_TITULO':
            return {
                ...state,
                titulo: action.payload,
            }
        case 'ATUALIZAR_IMOVEL_TIPO':
            return {
                ...state,
                tipo: action.payload,
            }
        case 'ATUALIZAR_IMOVEL_CONDICAO':
            return {
                ...state,
                condicaoImovel: parseInt(action.payload),
            }
        case 'ATUALIZAR_IMOVEL_VALOR':
            return {
                ...state,
                valor: action.payload
            }
        case 'ATUALIZAR_IMOVEL_DESCRICAO':
            return {
                ...state,
                descricao: action.payload
            }
        case 'ATUALIZAR_IMOVEL_AREA':
            return {
                ...state,
                area: parseFloat(action.payload)
            }
        case 'ATUALIZAR_IMOVEL_AREA_TOTAL':
            return {
                ...state,
                areaTotal: parseFloat(action.payload)
            }

        case 'ATUALIZAR_IMOVEL_BANHEIRO':
            return {
                ...state,
                numBanheiro: parseInt(action.payload)
            }
        case 'ATUALIZAR_IMOVEL_GARAGEM':
            return {
                ...state,
                numGaragem: parseInt(action.payload)
            }
        case 'ATUALIZAR_IMOVEL_QUARTOS':
            return {
                ...state,
                numQuarto: parseInt(action.payload)
            }
        case 'ATUALIZAR_IMOVEL_SUITES':
            return {
                ...state,
                numSuites: parseInt(action.payload)
            }
        case 'ATUALIZAR_IMOVEL_IPTU':
            return {
                ...state,
                iptu: String(action.payload)
            }
        case 'ATUALIZAR_IMOVEL_CONDOMINIO':
            return {
                ...state,
                condominio: action.payload
            }
        case 'ATUALIZAR_IMOVEL_END_RUA':
            return {
                ...state,
                endRua: action.payload
            }
        case 'ATUALIZAR_IMOVEL_END_NUMERO':
            return {
                ...state,
                endNumero: action.payload
            }
        case 'ATUALIZAR_IMOVEL_END_BAIRRO':
            return {
                ...state,
                endBairro: action.payload
            }
        case 'ATUALIZAR_IMOVEL_END_CIDADE':
            return {
                ...state,
                endCidade: action.payload
            }
        case 'ATUALIZAR_IMOVEL_END_ESTADO':
            return {
                ...state,
                endEstado: action.payload
            }
        case 'ATUALIZAR_IMOVEL_END_CEP':
            return {
                ...state,
                endCep: action.payload
            }
        case 'ATUALIZAR_IMOVEL_END_COMPLEMENTO':
            return {
                ...state,
                endComplemento: action.payload
            }        
        case 'ATUALIZAR_IMOVEL_RESET':
            return {
                state : INITIAL_STATE    
            }

        default:
            return state
    }

}

export default reducer;