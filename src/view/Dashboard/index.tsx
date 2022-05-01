import React, { useEffect } from 'react';
import Container from '../../components/Container';
import { useSelector, useDispatch } from 'react-redux';
import { Creators as MomentCreators } from '../../store/module/Moments/actions';

import { AppReducerMomentState } from '../../store/module/Moments/reduce';

interface PropsRedux {
  moment: AppReducerMomentState;
}

const Dashboard: React.FC = () => {
  const {
    moment: { allMoment },
  } = useSelector((status: PropsRedux) => status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(MomentCreators.requestMoment());
  }, [dispatch]);

  return (
    <>
      <Container>Dashboard</Container>
      {allMoment?.map((moment) => (
        <div key={moment.id}>
          <p>{moment.title}</p>
          <p>{moment.description}</p>
          <p>{moment.image}</p>
        </div>
      ))}
    </>
  );
};

export default Dashboard;
