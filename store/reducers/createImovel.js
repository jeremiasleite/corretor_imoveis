const INITIAL_STATE = {
    titulo: 'Imovel em vila rica',
    tipo: 1,
    condicaoImovel: 1,//transação
    valor: '30000',
    descricao: 'bela casa na vila rica',
    end_bairro: 'vila rica',
    end_rua: 'rua iara',
    end_numero: '240',
    end_cidade: 'jaboatão',
    end_estado: 'PE',
    end_cep: '54100660',
    end_complemento: 'proximo ao todo dia',
    numGaragem: 1,
    numQuarto: 3,
    numBanheiro: 2,
    numSuites: 1,
    area: 300,
    areaTotal: 350,
    condominio: '100',
    iptu: '400'
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CREATE_IMOVEL_TITULO':
            return {
                ...state,
                titulo: action.payload,
            }
        case 'CREATE_IMOVEL_TIPO':
            return {
                ...state,
                tipo: action.payload,
            }
        case 'CREATE_IMOVEL_CONDICAO':
            return {
                ...state,
                condicaoImovel: action.payload,
            }
        case 'CREATE_IMOVEL_VALOR':
            return {
                ...state,
                valor: action.payload,
            }
        case 'CREATE_IMOVEL_DESCRICAO':
            return {
                ...state,
                descricao: action.payload
            }
        case 'CREATE_IMOVEL_AREA':
            return {
                ...state,
                area: action.payload
            }
        case 'CREATE_IMOVEL_AREA_TOTAL':
            return {
                ...state,
                areaTotal: action.payload
            }

        case 'CREATE_IMOVEL_BANHEIRO':
            return {
                ...state,
                numBanheiro: action.payload
            }
        case 'CREATE_IMOVEL_GARAGEM':
            return {
                ...state,
                numGaragem: action.payload
            }
        case 'CREATE_IMOVEL_QUARTOS':
            return {
                ...state,
                numQuarto: action.payload
            }
        case 'CREATE_IMOVEL_SUITES':
            return {
                ...state,
                numSuites: action.payload
            }
        case 'CREATE_IMOVEL_IPTU':
            return {
                ...state,
                iptu: action.payload
            }
        case 'CREATE_IMOVEL_CONDOMINIO':
            return {
                ...state,
                condominio: action.payload
            }
        case 'CREATE_IMOVEL_END_RUA':
            return {
                ...state,
                end_rua: action.payload
            }
        case 'CREATE_IMOVEL_END_NUMERO':
            return {
                ...state,
                end_numero: action.payload
            }
        case 'CREATE_IMOVEL_END_BAIRRO':
            return {
                ...state,
                end_bairro: action.payload
            }
        case 'CREATE_IMOVEL_END_CIDADE':
            return {
                ...state,
                end_cidade: action.payload
            }
        case 'CREATE_IMOVEL_END_ESTADO':
            return {
                ...state,
                end_estado: action.payload
            }
        case 'CREATE_IMOVEL_END_CEP':
            return {
                ...state,
                end_cep: action.payload
            }
        case 'CREATE_IMOVEL_END_COMPLEMENTO':
            return {
                ...state,
                end_complemento: action.payload
            }        
        case 'CREATE_IMOVEL_RESET':
            return {
                state : INITIAL_STATE    
            }

        default:
            return state
    }

}

export default reducer;