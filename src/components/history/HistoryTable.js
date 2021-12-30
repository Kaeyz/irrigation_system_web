import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/common/Card';
import Table from '../common/table/Table';
import { historyTableHeader } from './historyTableHeader';


const HistoryTable = ({ tableData, page, count, limit, onPageChange }) => {
  return (
    <Card>
      <Table
        headers={historyTableHeader}
        data={tableData}
        page={page}
        count={count}
        limit={limit}
        onPageChange={onPageChange}
      />
    </Card>
  );
};

HistoryTable.defaultProps = {
  tableData: [],
  page: 1,
  count: 0,
  limit: 10,
};

HistoryTable.propTypes = {
  tableData: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default HistoryTable;

