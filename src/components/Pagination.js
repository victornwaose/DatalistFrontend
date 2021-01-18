import React from 'react';

const Pagination = ({ dataPerPage, totalData, paginate }) => {
	const pageNumber = [];
	for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
		pageNumber.push(i);
	}
	return (
		<div>
			<nav>
				<ul className="pagination">
					{pageNumber.map(number => (
						<li className="page-items" key={number}>
							<a onClick={() => paginate(number)} href="!#" className="page-link">
								{number}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Pagination;
