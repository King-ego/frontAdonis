import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  requestMoment: [],
  sucessMoment: ['allMoment'],
});

export default Creators;
