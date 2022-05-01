import * as Immutable from 'seamless-immutable';
import { Types } from './actions';
import { createReducer } from 'reduxsauce';

interface Moment {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface AppReducerMomentState {
  allMoment?: null | Array<Moment>;
  loading?: boolean;
}

type ImmutableAppReducerState = Immutable.Immutable<AppReducerMomentState>;

export const INITIAL_STATE: ImmutableAppReducerState = Immutable.from({
  allMoment: null,
  loading: false,
});

export default createReducer(INITIAL_STATE, {
  [Types.REQUEST_MOMENT]: (state) => state.set('loading', true),
  [Types.SUCESS_MOMENT]: (state, { allMoment }) =>
    state.merge({ loading: false, allMoment: allMoment }),
});
