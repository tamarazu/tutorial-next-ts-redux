import { FormData } from "../reducers/counter";

export enum ActionType {
  SET_NUMBER = 'SET_NUMBER',
  ADD_NUMBER = 'ADD_NUMBER',
  SET_FORM = 'SET_FORM'
}

interface setNumber {
  type: ActionType.SET_NUMBER,
  payload: number
}

interface addNumber {
  type: ActionType.ADD_NUMBER,
  payload: number
}

interface setForm {
  type: ActionType.SET_FORM,
  payload: FormData
}

export type Action = setNumber | addNumber | setForm
