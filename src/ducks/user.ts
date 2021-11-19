import { hen, Hen } from "../config/cerateReducer";
import { createSelector } from "reselect";
import { RootState } from ".";
import { ThunkAction } from "redux-thunk";
import axios from "axios";
import {actualDateFormated} from "../config/formatDate";
import {loadDiariesByPsychologist} from "./diary";
export type psychologist = {
  id?: number;
  name: string;
  password: string;
  email: string;
  crp: string;
  state: string;
};

export type patient = {
  id?: number;
  name: string;
  password?: string;
  email: string;
  age: number;
  cpf?: string;
  psychologist?: psychologist;
};


export interface userState {
  patient: patient;
  psychologist: psychologist;
  loading: boolean;
}

export type InitialState = userState;

const initialState: InitialState = {
  loading: false,
  patient: {} as patient,
  psychologist: {} as psychologist
};

// Selectors
const mainSelector = (state: RootState) => state.user;

export const getLoading = createSelector(mainSelector, (state) => {
  state.loading;
});

export const getPatient = createSelector(mainSelector, (state) => {
  return {
    patient: state.patient,
  };
});

export const getPsychologist = createSelector(mainSelector, (state) => {
  return {
    psychologist: state.psychologist,
  };
});


//Actions
class EditorReactions extends Hen<InitialState> {
  setLoading(a: boolean) {
    this.state.loading = a;
  }

  patient(p: patient) {
    console.log('receive data', p);
    this.state.patient = p;
  }

  psychologist(p: psychologist) {
    this.state.psychologist = p;
  }
}

//Reducers

export const [menuReducer, actions] = hen(new EditorReactions(initialState));
export default menuReducer;

export function loginPatient(data: {email: string, password: string}): ThunkAction<
  Promise<void>,
  RootState,
  any,
  any
> {
  return async (dispatch: any) => {
    dispatch(actions.setLoading(true));
    return axios
      .post(`http://localhost:5001/user/login`, data)
      .then((r) => {
        dispatch(actions.setLoading(false));
        dispatch(actions.patient(r.data.user));
      })
      .catch((error) => {
        dispatch(actions.setLoading(false));
        throw Error(error.response.data.error);
      });
  };
}

export function loginPsychologist(data: {email: string, password: string}): ThunkAction<
  Promise<void>,
  RootState,
  any,
  any
> {
  return async (dispatch: any) => {
    dispatch(actions.setLoading(true));
    return axios
      .post(`http://localhost:5001/psychologist/login`, data)
      .then((r) => {
        dispatch(actions.setLoading(false));
        dispatch(actions.psychologist(r.data.psychologist));
        dispatch(loadDiariesByPsychologist(r.data.psychologist.id));
      })
      .catch((error) => {
        dispatch(actions.setLoading(false));
        throw Error(error.response.data.error);
      });
  };
}

export function fetchPatient(id: string): ThunkAction<
  Promise<void>,
  RootState,
  any,
  any
> {
  return async (dispatch: any) => {
    dispatch(actions.setLoading(true));
    return axios
      .get(`http://localhost:5001/user/${id}`)
      .then((r) => {
        dispatch(actions.setLoading(false));
        console.log('entrei', r.data);
        dispatch(actions.patient(r.data));
        return r.data
      })
      .catch((error) => {
        dispatch(actions.setLoading(false));
        throw Error(error.response.data.error);
      });
  };
}

export function fetchPsychologist(id: string): ThunkAction<
  Promise<void>,
  RootState,
  any,
  any
> {
  return async (dispatch: any) => {
    dispatch(actions.setLoading(true));
    return axios
      .get(`http://localhost:5001/psychologist/${id}`)
      .then((r) => {
        dispatch(actions.setLoading(false));
        dispatch(actions.psychologist(r.data.data));
      })
     .catch((error) => {
        dispatch(actions.setLoading(false));
        throw Error(error.response.data.error);
      });
  };
}

export function createPsychologist(data: psychologist): ThunkAction<
  Promise<void>,
  RootState,
  any,
  any
> {
  return async (dispatch: any) => {
    dispatch(actions.setLoading(true));
    return axios
      .post(`http://localhost:5001/psychologist/`, 
        {
          ...data,
          createdAt: actualDateFormated()
        })
      .then((r) => {
        dispatch(actions.setLoading(false));
        dispatch(actions.psychologist(r.data));
        console.log(r.data);
        dispatch(loadDiariesByPsychologist(r.data.id));
      })
      .catch((error) => {
        dispatch(actions.setLoading(false));
        throw Error(error.response.data.error);
      });
  };
}

export function createPatient(data: patient): ThunkAction<
  Promise<void>,
  RootState,
  any,
  any
> {
  return async (dispatch: any) => {
    dispatch(actions.setLoading(true));
    return axios
      .post(`http://localhost:5001/user/`, 
        {
          ...data,
          createdAt: actualDateFormated()
        })
      .then((r) => {
        dispatch(actions.setLoading(false));
        dispatch(actions.patient(r.data));
      })
      .catch((error) => {
        dispatch(actions.setLoading(false));
        throw Error(error.response.data.error);
      });
  };
}