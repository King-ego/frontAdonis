import * as Immutable from 'seamless-immutable';
import { Types } from './actions';
import { createReducer } from 'reduxsauce';

export interface AppReducerInfoState {
  activeTab?: string | undefined;
  loading?: boolean;
}

type ImmutableAppReducerState = Immutable.Immutable<AppReducerInfoState>;

export const INITIAL_STATE: ImmutableAppReducerState = Immutable.from({
  activeTab: undefined,
  loading: false,
});

export default createReducer(INITIAL_STATE, {
  [Types.REQUEST_ACTION_TAB]: (state) => state.set('loading', true),
  [Types.SUCESS_ACTION_TAB]: (state, { activeTab }) =>
    state.merge({ loading: false, activeTab: activeTab }),
});
