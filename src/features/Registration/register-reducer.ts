
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

// export const registerTC = (data: LoginParamsType) =>(dispatch: Dispatch<ActionsType>) =>{
//     dispatch(setAppStatusAC("loading"))
//     authAPI.login(data)
//         .then((res) => {
//             if (res.data.resultCode === 0) {
//                 dispatch(setIsLoggedInAC(true))
//                 dispatch(setAppStatusAC('succeeded'))
//             } else {
//                 handleServerAppError(res.data, dispatch);
//             }
//         })
//         .catch((error) => {
//             handleServerNetworkError(error, dispatch)
//         })
// }

type ActionsType = ReturnType<typeof setIsRegisterInAC>
