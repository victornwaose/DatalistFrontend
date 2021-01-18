import React from 'react';
import { Table } from 'react-bootstrap';

const Detail = ({ data }) => {
	return (
		<Table striped>
			<thead>
				<tr>
					<th>FIRST NAME</th>
					<th>SECOND NAME</th>
					<th>GENDER</th>
					<th>EMAIL</th>

					<th>CREDIT CARD NUMBER</th>
					<th>CREDIT CARD TYPE</th>
					<th>PHONE NUMBER</th>
					<th>USERNAME</th>
					<th>PaymentMethod</th>
				</tr>
			</thead>
			<tbody>
				{data &&
					data.map(profile => (
						<tr>
							<td>{profile.FirstName}</td>
							<td>{profile.LastName}</td>
							<td>{profile.Gender}</td>
							<td>{profile.Email}</td>
							<td>{profile.CreditCardNumber}</td>
							<td>{profile.CreditCardType}</td>
							<td>{profile.PhoneNumber}</td>
							<td>{profile.UserName}</td>
							<td>{profile.PaymentMethod}</td>
						</tr>
					))}
			</tbody>
		</Table>
	);
};

export default Detail;
