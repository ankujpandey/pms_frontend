import axios from "axios";
import React, { useEffect, useState } from "react";
import { icons } from "../icons/Icons";

function ClientList(props) {
	const [clientList, setClientList] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		fetchClientApi();
	}, [isLoading]);

	const fetchClientApi = async () => {
		try {
			const res = await axios.get("http://3.108.40.132:1337/api/clients", {
				headers: {
					"Content-Type": "application/json",
				},
			});
			if (res.status === 200) {
				setIsLoading(true);
				setClientList(res.data.data);
			} else {
				alert("Something went wrong!");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleDeleteClient = async (id) => {
		try {
			const res = await axios.delete(
				"http://3.108.40.132:1337/api/clients/" + id,
				{
					headers: {
						"Content-Type": "appication/json",
					},
				}
			);
			if (!(res.status === 200)) {
				setIsLoading(true);
				alert("Something went wrong!");
			}
		} catch (error) {
			console.log(error);
		}
	};

	console.log(clientList);
	return (
		<table className="table">
			<thead>
				<tr>
					<th scope="col">Name</th>
					<th scope="col">Email</th>
					<th scope="col">Phone</th>
					<th scope="col"></th>
				</tr>
			</thead>
			<tbody>
				{clientList?.map((item) => (
					<tr key={item.id}>
						<td scope="row">{item.attributes.client_name}</td>
						<td>{item.attributes.email}</td>
						<td>{item.attributes.phone}</td>
						<td>
							<button
								className="btn btn-danger btn-sm"
								onClick={() => handleDeleteClient(item.id)}>
								{icons.trash}
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default ClientList;
