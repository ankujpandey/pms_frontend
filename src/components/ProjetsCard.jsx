import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProjetsCard(props) {
	const [projects, setProjects] = useState(null);

	useEffect(() => {
		axios.get("http://3.108.40.132:1337/api/projects").then((res) => {
			setProjects(res.data.data);
		});
	}, []);

	// console.log(projects);

	if (!projects) {
		return <div>Loading...</div>;
	}

	return (
		<div className="d-flex justify-content-between flex-wrap">
			{projects.map((item) => {
				return (
					<div
						key={item.id}
						className="card col-md-6 mt-3"
						style={{ width: "34rem" }}>
						<div className="card-body">
							<div className="d-flex justify-content-between align-items-center">
								<h5 className="card-title">{item.attributes.project_name}</h5>
								<Link to={`/${item.id}`}>
									<button type="button" className="btn btn-light">
										View
									</button>
								</Link>
							</div>
							<div className="d-flex align-items-center">
								<p className="text-muted mt-1 me-1 mb-0">Status: </p>
								<p className="card-text mt-1 fw-bold mb-0">
									{item.attributes.status}
								</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default ProjetsCard;
