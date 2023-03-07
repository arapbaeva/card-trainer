import {RegisterParamsType, registerUserAPI} from "../../api/register-user-api";
import {Dispatch} from "redux";
import {setAppStatusAC, SetAppStatusActionType} from "../../app/app-reducer";


export const SET_IS_REGISTER_IN = 'SET-IS-REGISTER-IN';
const initialState = {
    isRegisterIn: false,
}
type InitialStateType = typeof initialState

export const registerReducer = (state:InitialStateType = initialState, action:ActionsType): InitialStateType=>{
    switch(action.type){
        case  SET_IS_REGISTER_IN:
            return {
                ...state, isRegisterIn: action.userData
            }
        default:
            return state
    }
}


export const setIsRegisterInAC = (userData: boolean) =>({
    type: SET_IS_REGISTER_IN,
    userData
})


export const registerTC = (data: RegisterParamsType) =>  (dispatch: Dispatch<ActionsType>) =>{
        dispatch(setAppStatusAC("loading"))
        registerUserAPI.register(data)
            .then((res)=>{
        dispatch(setIsRegisterInAC(true))
        dispatch(setAppStatusAC('succeeded'))
    })
    .catch((error) =>{
        console.log(error)
    })
}


//
// export const registerTC = (data: RegisterParamsType) => async  (dispatch: Dispatch<ActionsType>) =>{
//    try {
//        dispatch(setAppStatusAC("loading"))
//        await  registerUserAPI.register(data)
//        dispatch(setIsRegisterInAC(true))
//        dispatch(setAppStatusAC('succeeded'))
//    } catch(error) {
//        console.log(error)
//         }
// }

type ActionsType = ReturnType<typeof setIsRegisterInAC> | SetAppStatusActionType
