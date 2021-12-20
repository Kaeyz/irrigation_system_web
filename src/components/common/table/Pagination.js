import React from 'react';
import Pagination from '@mui/material/Pagination';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`

`;

const TablePagination = ({ page, count, limit, onLimitChange, onNextPageClick }) => {

  const handleChangePage = (event, newPage) => {
    event.preventDefault();
    onNextPageClick && onNextPageClick(newPage + 1);
  };

  const handleChangeRowsPerPage = (event) => {
    event.preventDefault();
    onLimitChange && onLimitChange(event.target.value);
  };

  return (
    <Wrapper>
      <Pagination
        component="div"
        page={Number(page) - 1}
        count={Number(count)}
        onChangePage={handleChangePage}
        rowsPerPage={Number(limit)}
        rowsPerPageOptions={[2, 5, 10, 20, 50, 100, 200]}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Wrapper>
  );
};

TablePagination.propTypes = {
	page: PropTypes.number.isRequired,
	count: PropTypes.number.isRequired,
	limit: PropTypes.number.isRequired,
	onLimitChange: PropTypes.func.isRequired,
	onNextPageClick: PropTypes.func.isRequired,
};

export default TablePagination;
