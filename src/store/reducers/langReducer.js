import * as actionTypes from '../actions/actionTypes'

import langPl from '../../langPl.json'
import langEn from '../../langEn.json';

const initialState = {
    lang: 'Pl',
    text: langPl
}
const reducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case actionTypes.CHANGE_LANGUAGE: return { lang: action.lang, 
                                                    text: action.lang === 'Pl' ?  langPl : langEn }
        default: return state
    }
}
export default reducer