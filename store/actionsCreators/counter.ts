import { Dispatch } from "react"
import { ActionType, Action } from "../actionTypes"

export const setNumber = (value: any) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.SET_NUMBER,
    payload: value
  })
}

export const addNumber = (value:any) => (dispatch: Dispatch<Action>) => {
  dispatch(setNumber(value + 1))
}

export const setFormData = (value: any) => (dispatch:Dispatch<Action>) => {
  dispatch({
    type: ActionType.SET_FORM,
    payload: value
  })
}

export const postFormData = (value: any) => async (dispatch:Dispatch<Action>) => {
  try {
    // const { data } = 
    console.log('sukese post data', value)
    dispatch(setFormData(value))
  } catch (error) {
    console.log(error);
  }
}