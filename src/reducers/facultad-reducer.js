import { FACULTAD_LIST_REQUEST, FACULTAD_LIST_SUCCESS, FACULTAD_LIST_FAILURE } from '../actions/facultad-action'
import { FACULTAD_ADD, FACULTAD_FETCH, FACULTAD_UPDATE, FACULTAD_DELETE } from '../actions/facultad-action'

const initialState = {
    list: [],
    data: {}
}

const facultadReducer = (state = initialState, action) => {
    switch (action.type) {

        case FACULTAD_LIST_REQUEST: return {
            ...state,
            list: [],
            error: null
        }
        case FACULTAD_LIST_SUCCESS: return {
            ...state,
            list: action.list,
            error: null
        }
        case FACULTAD_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }


        case FACULTAD_ADD: return {
            ...state,
            //data: {} // no usado aun
        }
        case FACULTAD_UPDATE: return {
            ...state,
            //data: {} // no usado aun
        }
        case FACULTAD_FETCH: {
            //console.log('facultadReducer data:' + JSON.stringify(action.data))
            return {
                ...state,
                data: action.data
            }
        }
        case FACULTAD_DELETE: {
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        }

        default: return state
    }





}

export default facultadReducer
