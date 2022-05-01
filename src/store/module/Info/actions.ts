import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  requestActionTab: [],
  sucessActionTab: ['activeTab'],
});

export default Creators;
