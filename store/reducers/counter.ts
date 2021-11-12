import { Action, ActionType } from "../actionTypes";

export interface FormData {
  name: string;
  age: number;
}

export interface State {
  number: number;
  formData: FormData
}


const initialState = {
  number: 0,
  formData: {
    name: '',
    age: 0
  }
}

export const counterReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_NUMBER:
      return {
        ...state,
        number: action.payload
      };

    case ActionType.SET_FORM:
      return {
        ...state,
        formData: action.payload
      }
    
      default:
        return state;
  }
}