import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Pagination from './Pagination';

const Wrapper = styled.div`  
  overflow-x: scroll;
  .content, .th {
    min-width: 3rem;
    width: max-content;
    padding: 0.3rem;
  }
	.table {
		width: 100%;
	}
	.thead {
		text-align: left;
		min-width: 10rem;
		background: ${props => props.theme.color.light};
	}
	tr:nth-child(odd) {
		background: ${props => props.theme.color.grey};
	}
  .footer {
    display: grid; 
    justify-content: center;
  }
`;

const Table = ({ headers, data, page, count, limit, onPageChange }) => {
  const totalPages = Math.floor(count / limit) + (count % limit > 0 ? 1 : 0);
  return (
    <Wrapper>
      <table className="table" >
        <thead className="thead">
          <tr>
            {headers.map((headerItem, index) => (
              <th nowrap="true" className="th" key={index}>
                {headerItem.title(index)}</th>
            ))}
          </tr>
        </thead>
        <tbody>{
          data.map((item, index) => (
            <tr key={index} >
              {headers.map((col, key) => (
                <td nowrap="true" className='content' key={key}>{col.render(item, index)}</td>
              ))}
            </tr>
          ))
        }
        </tbody>
      </table>
      <div className="footer">
        <Pagination
          page={page}
          count={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </Wrapper>
  );
};

Table.defaultProps = {
	headers: [],
	data: [],
	showNav: false,
	topNavOptions: [],
	topNavIsActive: '',
};

Table.propTypes = {
  headers: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Table;
