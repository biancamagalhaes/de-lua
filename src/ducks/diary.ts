import { hen, Hen } from "../config/cerateReducer";
import { createSelector } from "reselect";
import { RootState } from "./state";
import { ThunkAction } from "redux-thunk";
import axios from "axios";
import {actualDateFormated} from "../config/formatDate";

export type diary = {
  id?: number;
  text: string;
  feeling: string;
  userID: number;
  agreement: boolean;
  comments?: Array<comment>;
  createdOn?: string;
};

export type comment = {
  id?: number;
  text: string;
  type: 'ask' | 'comment';
  createdOn?: string;
  diaryID?: number;
};



export interface diaryState {
  diary: diary;
  diaries: Array<diary>;
  comments: Array<comment>;
  loading: boolean;
}

export type InitialState = diaryState;

const initialState: InitialState = {
  loading: false,
  diary: {} as diary,
  diaries: [],
  comments: [],
};

// Selectors
const mainSelector = (state: RootState) => state.diary;

export const getLoading = createSelector(mainSelector, (state) => {
  state.loading;
});

export const getDiary = createSelector(mainSelector, (state) => {
  return {
    diary: state.diary,
  };
});

export const getDiariesByUser = createSelector(mainSelector, (state) => {
  return {
    diaries: state.diaries,
  };
});

export const getDiariesByPsichologist = createSelector(mainSelector, (state) => {
  return {
    diaries: state.diaries,
  };
});

export const getCommentsByDiary = createSelector(mainSelector, (state) => {
  return {
    comments: state.comments,
  };
});


//Actions
class EditorReactions extends Hen<InitialState> {
  setLoading(a: boolean) {
    this.state.loading = a;
  }

  setDiaries(d: Array<diary>) {
    this.state.diaries = d;
  }

  setDiary(d: diary) {
    console.log('--> ', d);
    this.state.diary = d;
  }

  setComments(c: Array<comment>) {
    this.state.comments = c;
  }
}

//Reducers

export const [menuReducer, actions] = hen(new EditorReactions(initialState));
export default menuReducer;

export function createDiary(data: diary): ThunkAction<
  Promise<void>,
  RootState,
  any,
  any
> {
  return async (dispatch: any) => {
    console.log(data);
    dispatch(actions.setLoading(true));
    return axios
      .post(`http://localhost:5001/diary/`, {...data, createdOn: actualDateFormated() })
      .then((r) => {
        dispatch(actions.setLoading(false));
        dispatch(actions.setDiary(r.data));
      })
      .catch((error) => {
        dispatch(actions.setLoading(false));
        throw Error(error.response.data.error);
      });
  };
}

export function loadDiariesByUser(id: string): ThunkAction<
  Promise<void>,
  RootState,
  any,
  any
> {
  return async (dispatch: any) => {
    dispatch(actions.setLoading(true));
    return axios
      .get(`http://localhost:5001/diary/diaries/${id}`)
      .then((r) => {
        dispatch(actions.setLoading(false));
        dispatch(actions.setDiaries(r.data));
      })
      .catch((e) => {
        console.log(e);
        dispatch(actions.setLoading(false));
        return e;
      });
  };
}

export function loadDiariesByPsychologist(id: string): ThunkAction<
  Promise<void>,
  RootState,
  any,
  any
> {
  return async (dispatch: any) => {
    dispatch(actions.setLoading(true));
    return axios
      .get(`http://localhost:5001/diary/diaries/psychologist/${id}`)
      .then((r) => {
        dispatch(actions.setLoading(false));
        dispatch(actions.setDiaries(r.data));
      })
      .catch((e) => {
        console.log(e);
        dispatch(actions.setLoading(false));
        return e;
      });
  };
}

export function loadDiary(id: string): ThunkAction<
  Promise<void>,
  RootState,
  any,
  any
> {
  return async (dispatch: any) => {
    dispatch(actions.setLoading(true));
    return axios
      .get(`http://localhost:5001/diary/${id}`)
      .then((r) => {
        dispatch(actions.setLoading(false));
        dispatch(actions.setDiary(r.data));
        return r.data;
      })
      .catch((e) => {
        console.log(e);
        dispatch(actions.setLoading(false));
        return e;
      });
  };
}

export function createComment(data: comment): ThunkAction<
  Promise<void>,
  RootState,
  any,
  any
> {
  return async (dispatch: any) => {
    console.log(data);
    dispatch(actions.setLoading(true));
    return axios
      .post(`http://localhost:5001/diary/comment`, {...data, createdOn: actualDateFormated()  })
      .then((r) => {
        dispatch(actions.setLoading(false));
        data.diaryID && dispatch(loadDiary(data.diaryID.toString()));
      })
      .catch((error) => {
        dispatch(actions.setLoading(false));
        throw Error(error.response.data.error);
      });
  };
}

export function setPsychologist(diaryID: string, psychologistID: string): ThunkAction<
  Promise<void>,
  RootState,
  any,
  any
> {
  return async (dispatch: any) => {
    console.log('popopopoop', diaryID, psychologistID)
    dispatch(actions.setLoading(true));
    return axios
      .put(`http://localhost:5001/diary/${diaryID}`, {psychologistID})
      .then((r) => {
        dispatch(actions.setLoading(false));
        dispatch(actions.setDiary(r.data));
        return r.data;
      })
      .catch((e) => {
        console.log(e);
        dispatch(actions.setLoading(false));
        return e;
      });
  };
}
