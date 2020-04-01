const INITIAL_STATE = {
    titulo: '',
    tipo: '',
    condicaoImovel: '',//transação
    valor: '',
    descricao: '',
    end_bairro: '',
    end_rua: '',
    end_numero: '',
    end_cidade: '',
    end_estado: '',
    end_cep: '',
    end_complemento: '',
    numGaragem: '',
    numQuarto: '',
    numBanheiro: '',
    numSuites: '',
    area: '',
    areaTotal: '',
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
                condicaoImovel: action.payload,
            }
        case 'ATUALIZAR_IMOVEL_VALOR':
            return {
                ...state,
                valor: action.payload,
            }
        case 'ATUALIZAR_IMOVEL_DESCRICAO':
            return {
                ...state,
                descricao: action.payload
            }
        case 'ATUALIZAR_IMOVEL_AREA':
            return {
                ...state,
                area: action.payload
            }
        case 'ATUALIZAR_IMOVEL_AREA_TOTAL':
            return {
                ...state,
                areaTotal: action.payload
            }

        case 'ATUALIZAR_IMOVEL_BANHEIRO':
            return {
                ...state,
                numBanheiro: action.payload
            }
        case 'ATUALIZAR_IMOVEL_GARAGEM':
            return {
                ...state,
                numGaragem: action.payload
            }
        case 'ATUALIZAR_IMOVEL_QUARTOS':
            return {
                ...state,
                numQuarto: action.payload
            }
        case 'ATUALIZAR_IMOVEL_SUITES':
            return {
                ...state,
                numSuites: action.payload
            }
        case 'ATUALIZAR_IMOVEL_IPTU':
            return {
                ...state,
                iptu: action.payload
            }
        case 'ATUALIZAR_IMOVEL_CONDOMINIO':
            return {
                ...state,
                condominio: action.payload
            }
        case 'ATUALIZAR_IMOVEL_END_RUA':
            return {
                ...state,
                end_rua: action.payload
            }
        case 'ATUALIZAR_IMOVEL_END_NUMERO':
            return {
                ...state,
                end_numero: action.payload
            }
        case 'ATUALIZAR_IMOVEL_END_BAIRRO':
            return {
                ...state,
                end_bairro: action.payload
            }
        case 'ATUALIZAR_IMOVEL_END_CIDADE':
            return {
                ...state,
                end_cidade: action.payload
            }
        case 'ATUALIZAR_IMOVEL_END_ESTADO':
            return {
                ...state,
                end_estado: action.payload
            }
        case 'ATUALIZAR_IMOVEL_END_CEP':
            return {
                ...state,
                end_cep: action.payload
            }
        case 'ATUALIZAR_IMOVEL_END_COMPLEMENTO':
            return {
                ...state,
                end_complemento: action.payload
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