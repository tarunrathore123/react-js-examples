import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChartsContainer from "../../components/ChartsContainer";
import Loading from "../../components/Loading";
import StatsContainer from "../../components/StatsContainer";
import { showStats } from "../../redux/actions/actions";

function Stats() {
  const { isLoading, monthlyApplications, token } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  useEffect(() => {
    showStats(dispatch, token);
    // eslint-disable-next-line
  }, []);
  if (isLoading) {
    return <Loading center />;
  }
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
}

export default Stats;
