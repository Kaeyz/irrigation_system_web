import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMoistureHistory, onMoistureHistoryPageChange } from 'store/actions/moistureHistory';
import HistoryTable from './HistoryTable';

const Wrapper = styled.div`
	.history_header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 1rem;
	}
`;

const History = () => {
	const dispatch = useDispatch();
  const history = useSelector(state => state.MOISTURE_HISTORY.moistureHistory);
  const {plotId} = useParams();

	const onPageChange = (newPage) => {
		dispatch(onMoistureHistoryPageChange(newPage));
		dispatch(getMoistureHistory(plotId));
	};

	useEffect(() => {
		dispatch(getMoistureHistory(plotId));
	}, []);

	return (
		<Wrapper>
			<div className="history_header">
				<h1>Moisture History</h1>
			</div>
			<HistoryTable
				tableData={history.data}
				page={history.page}
				count={history.count}
				limit={history.limit}
				onPageChange={onPageChange}
			/>

		</Wrapper>
	);
};

export default History;
