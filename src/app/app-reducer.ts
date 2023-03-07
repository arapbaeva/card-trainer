export const SET_STATUS = 'SET_STATUS'
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type InitialStateType = {
    // происходит ли сейчас взаимодействие с сервером
    status: RequestStatusType
    // если ошибка какая-то глобальная произойдёт - мы запишем текст ошибки сюда
}

const initialState: InitialStateType = {
    status: 'idle',
}



export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return {...state}
    }
}
export const setAppStatusAC = (status: RequestStatusType) => ({type: SET_STATUS, status} as const)
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
type ActionsType = SetAppStatusActionType

