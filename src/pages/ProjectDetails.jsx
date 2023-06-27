import React, { useEffect, useState } from "react";
import { icons } from "../icons/Icons";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";

function ProjectDetails(props) {
	// const location = useLocation();
	// const project = location.state;
	// console.log(project);

	const { id } = useParams();
	const [project, setProject] = useState(null);
	const [clients, setClients] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const [projectName, setProjectName] = useState("");
	const [description, setDescription] = useState("");
	const [projectStatus, setProjectStatus] = useState("");
	const [client, setClient] = useState("");

	// --------------------------------------------------
	// fetching project api of individuals.
	// --------------------------------------------------

	useEffect(() => {
		fetchProjectApi();
		fetchClientApi();
	}, []);

	// useEffect(() => {
	// 	updateProject();
	// }, []);

	// ------------------------------------------------
	// 	fetching whole project details
	// ------------------------------------------------

	const fetchProjectApi = async () => {
		try {
			const res = await axios.get(
				`http://3.108.40.132:1337/api/projects/${id}?populate=*`,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (res.status === 200) {
				setProject(res.data.data);
				setIsLoading(false);
			} else {
				alert("Something went wrong!!");
			}
		} catch (error) {
			console.log(error);
		}
	};

	// -----------------------------------------------
	// 	Fetching clients
	// -----------------------------------------------

	const fetchClientApi = async () => {
		try {
			const res = await axios.get("http://3.108.40.132:1337/api/clients", {
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (res.status === 200) {
				setClients(res.data.data);
			} else {
				alert("Something went wrong!!");
			}
		} catch (error) {
			console.log(error);
		}
	};

	console.log("This is Clients List ----", clients);

	// ------------------------------------------------
	//	form handling
	// -----------------------------------------------
	const submitFrom = (e) => {
		e.preventDefault();
		updateProject();
	};

	// updating the project api

	const updateProject = async () => {
		try {
			const res = await axios.put(
				`http://3.108.40.132:1337/api/projects/${id}`,
				{
					data: {
						project_name: projectName,
						description: description,
						status: projectStatus,
						clients: client,
					},
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (res.status === 200) {
				window.location = "/";
			} else {
				alert("Something went wrong!!");
			}
		} catch (error) {
			console.log(error);
		}
	};

	// console.log(project);

	if (!project) {
		return <>Loading...</>;
	}
	return (
		// -----------------------------------------------------
		//	Details Display
		// -----------------------------------------------------
		<div className="py-5">
			<div className="card container">
				<div className="card-body">
					<div className="d-grid gap-2 d-md-flex justify-content-md-end">
						<Link to="/">
							<button type="button" className="btn btn-light mt-4 px-5">
								Back
							</button>
						</Link>
					</div>

					<h5 className="card-title mt-4 fs-2">
						{project.attributes.project_name}
					</h5>
					<p className="card-subtitle mb-2 text-muted">
						{project.attributes.description}
					</p>

					<h6 className="card-text mt-5 fs-4">Project Status</h6>
					<p className="card-subtitle mb-2 text-muted">
						{project.attributes.status}
					</p>

					{project.attributes.clients.data.length > 0 ? (
						<div className="mt-5">
							Client Information
							<div className="card mt-2">
								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										{icons.clientId}{" "}
										{project.attributes.clients.data[0].attributes.client_name}
									</li>
									<li className="list-group-item">
										{icons.mail}{" "}
										{project.attributes.clients.data[0].attributes.email}
									</li>
									<li className="list-group-item">
										{icons.phone}{" "}
										{project.attributes.clients.data[0].attributes.phone}
									</li>
								</ul>
							</div>
						</div>
					) : (
						<div>
							<h5 className="no-data	 mt-5">No! Client data available!</h5>
						</div>
					)}

					<h5 className="card-title fs-2 mt-5">Updated Project Details</h5>

					{/* ---------------------------------
						Form section
					-------------------------------------*/}

					<div>
						<form onSubmit={(e) => submitFrom(e)}>
							<div className="mb-3">
								<label
									htmlFor="exampleFormControlInput1"
									className="form-label">
									Name
								</label>
								<input
									type="text"
									className="form-control"
									id="exampleFormControlInput1"
									name="name"
									onChange={(e) => setProjectName(e.target.value)}
									value={`${projectName}`}
								/>
							</div>
							<div className="mb-3">
								<label
									htmlFor="exampleFormControlTextarea1"
									className="form-label">
									Description
								</label>
								<textarea
									className="form-control"
									id="exampleFormControlTextarea1"
									placeholder="This is a Description"
									name="description"
									onChange={(e) => setDescription(e.target.value)}
									value={`${description}`}
								/>
							</div>

							<div className="mb-3">
								<label htmlFor="status" className="form-label">
									Status
								</label>
								<select
									className="form-select"
									name="status"
									onChange={(e) => setProjectStatus(e.target.value)}
									value={`${projectStatus}`}>
									<option defaultValue>Not Started</option>
									<option value={1}>Started</option>
									<option value={2}>Pending</option>
									<option value={3}>Completed</option>
								</select>
							</div>

							<div className="mb-3">
								<label htmlFor="client" className="form-label">
									Client
								</label>
								<select
									className="form-select"
									name="status"
									onChange={(e) => setClient(e.target.value)}
									value={`${client}`}>
									<option defaultValue>select client</option>
									{clients.length > 0 &&
										clients?.map((item) => (
											<option value={item.id} key={item.id}>
												{item.attributes.client_name}
											</option>
										))}
								</select>
							</div>

							<button type="submit" className="btn btn-warning">
								Submit
							</button>
						</form>
					</div>
					<div className="d-grid gap-2 d-md-flex justify-content-md-end">
						<button type="button" className="btn btn-danger">
							{icons.trash} Delete Project
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectDetails;
