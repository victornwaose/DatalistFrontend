import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import './App.css';
import Pagination from './components/Pagination';

import Detail from './components/Detail';

const url = 'https://api.enye.tech/v1/challenge/records';

function App() {
	const [data, setData] = useState([]);
	const [q, setQ] = useState('');
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [dataPerPage, seDataPerPage] = useState(20);

	const getData = async () => {
		const response = await fetch(url);
		const {
			records: { profiles },
		} = await response.json();

		setData(profiles);
		setLoading(loading);
	};

	useEffect(() => {
		getData();
	}, []);

	const search = e => {
		setQ(e.target.value);
		const filteredData = data.filter(
			profile =>
				profile.FirstName.toLowerCase().indexOf(q) > -1 ||
				profile.LastName.toLowerCase().indexOf(q) > -1
		);
		setData(filteredData);
	};
	const filterFunc = (filterBy, e) => {
		console.log(e.target.value);
		const filteredData = data.filter(
			profile => profile[filterBy].toLowerCase() === e.target.value.toLowerCase()
		);
		setData(filteredData);
	};

	const indexOfLastData = currentPage * dataPerPage;
	const indexOfFirstData = indexOfLastData - dataPerPage;
	const currentData = data.slice(indexOfFirstData, indexOfLastData);
	console.log(data);
	const paginate = pageNumber => setCurrentPage(pageNumber);

	return (
		<>
			<Container fluid>
				<div>
					<input text="search details" value={q} onChange={e => search(e)} />
					<div className="input">
						<select onChange={e => filterFunc('Gender', e)}>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
							<option value="Prefer to skip">Prefer to skip</option>
						</select>
					</div>
					<select onChange={e => filterFunc('PaymentMethod', e)}>
						<option value="check">check</option>
						<option value="cc">Money</option>
						<option value="paypal">pay pal</option>
					</select>
				</div>

				<div>
					<Detail data={currentData} />
					<Pagination
						paginate={paginate}
						dataPerPage={dataPerPage}
						totalData={data.length}
					/>
				</div>
			</Container>
		</>
	);
}

export default App;
