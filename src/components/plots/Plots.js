import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../common/Button';
import AddIcon from '@mui/icons-material/Add';
import AddPlotForm from './AddPlotForm ';
import { getPlots, onPlotPageChange } from 'store/actions/plotActions';
import PlotsTable from './PlotsTable';

const Wrapper = styled.div`
	.plots_header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 1rem;
	}
`;

const Plots = () => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.USER.user);
	const plots = useSelector(state => state.PLOTS.plots);
	const [isOpen, setIsOpen] = useState(false);
	const toggleForm = () => setIsOpen(!isOpen);

	const onPageChange = (newPage) => {
		dispatch(onPlotPageChange(newPage));
		dispatch(getPlots());
	};

	useEffect(() => {
		dispatch(getPlots());
	}, []);

	return (
		<Wrapper>
			<div className="plots_header">
				<h1>Plots</h1>
				{user.userType === 'user' && <Button text="Add Plot" startIcon={<AddIcon />} onClick={toggleForm} />}
				{user.userType === 'user' && <AddPlotForm isOpen={isOpen} handleClose={toggleForm} />}
			</div>
			<PlotsTable
				tableData={plots.data}
				page={plots.page}
				count={plots.count}
				limit={plots.limit}
				onPageChange={onPageChange}
			/>

		</Wrapper>
	);
};

export default Plots;
