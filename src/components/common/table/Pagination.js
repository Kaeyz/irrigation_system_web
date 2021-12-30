import React from 'react';
import Pagination from '@mui/material/Pagination';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`

`;

const TablePagination = ({ page, count, onPageChange }) => {

  const handleChangePage = (event, newPage) => {
    event.preventDefault();
    onPageChange && onPageChange(newPage);
  };

  return (
    <Wrapper>
      <Pagination
        shape="circular"
        component="div"
        page={Number(page)}
        count={Number(count)}
        onChange={handleChangePage}
      />
    </Wrapper>
  );
};

TablePagination.propTypes = {
	page: PropTypes.number.isRequired,
	count: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default TablePagination;
