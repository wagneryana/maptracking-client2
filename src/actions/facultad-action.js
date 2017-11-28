//import axios from "axios";

import client from './'

const url = '/api-maptracking/facultades/'

export const FACULTAD_LIST_REQUEST = "FACULTAD_LIST_REQUEST"
export const FACULTAD_LIST_SUCCESS = 'FACULTAD_LIST_SUCCESS'
export const FACULTAD_LIST_FAILURE = 'FACULTAD_LIST_FAILURE'

export const facultadList = () => ({
    type: FACULTAD_LIST_REQUEST,
})

export const facultadListSuccess = (list) => ({
    type: FACULTAD_LIST_SUCCESS,
    list
})

export const facultadListFailure = error => ({
    type: FACULTAD_LIST_FAILURE,
    error
})

export const FACULTAD_ADD = "FACULTAD_ADD"
export const FACULTAD_FETCH = "FACULTAD_FETCH"
export const FACULTAD_UPDATE = "FACULTAD_UPDATE"
export const FACULTAD_DELETE = "FACULTAD_DELETE"

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(facultadListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(facultadListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(facultadListFailure(JSON.stringify('Error '+error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(facultadListFailure('Error '+error.message))
            }
            //console.log(error.config);
        })
    }
}

export function save(data, history) {
    console.log('save data:' + JSON.stringify(data))
    return (dispatch) => {
        return client.post(url, data)
            .then((r) => {
                dispatch({
                    "type": FACULTAD_ADD,
                    "data": r.data //no usado
                })
                history.push('/maptracking/facultades/list')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}

export function getById(id) {
    return dispatch => {
        return client.get(`${url}${id}`)
            .then((r) => {
                /*
                dispatch({
                    "type": FACULTAD_FETCH,
                    "data": r.data 
                })
                */
                return r.data
            })
            .catch((error) => {
                console.log(error)
                //throw (error)
            })
    }
}

export function update(data, history) {
    return (dispatch) => {
        return client.put(`${url}${data.id}/`, data)
            .then((r) => {
                dispatch({
                    "type": FACULTAD_UPDATE,
                    "data": r.data //no usado
                })
                history.push('/maptracking/facultades/list')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}

export function del(_id, history) {
    return dispatch => {
        return client.delete(`${url}${_id}`)
            .then((r) => {
                //console.log('deletex r:' + JSON.stringify(r))
                dispatch({
                    "type": FACULTAD_DELETE,
                    "data": _id
                })
                //history.push('/maptracking/facultades')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}