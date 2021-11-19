import { InitialState as userInitial } from "./user";
import { InitialState as diaryInitial } from "./diary";

export interface RootState {
  user: userInitial;
  diary: diaryInitial;
}

export declare namespace RootState {}