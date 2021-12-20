import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Pagination from './Pagination';

const Wrapper = styled.div`
	padding: 0.5rem;
  .content, .th {
    min-width: 3rem;
    width: max-content;
    padding: 0.3rem;
  }
	.table {
		width: 100%;
		margin-top: 1rem;
	}
	.thead {
		text-align: left;
		min-width: 20rem;
		background: ${props => props.theme.color.grey};
	}
	tr:nth-child(even) {
		background: ${props => props.theme.color.grey};
	}
`;

const Table = ({headers, data}) => {
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
      <Pagination />
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
};

export default Table;
