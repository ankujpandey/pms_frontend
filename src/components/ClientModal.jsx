import axios from "axios";
import React, { useEffect, useState } from "react";

function ClientModal(props) {
	const [formData, setFormData] = useState([]);
	const [isSubmit, setIsSubmit] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			setIsSubmit(true);
			const res = await axios.post(
				"http://3.108.40.132:1337/api/clients",
				{
					data: {
						client_name: formData.name,
						email: formData.email,
						phone: formData.phone,
					},
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (res.status === 200) {
				setIsSubmit(false);
				window.location = "/";
			} else {
				alert("Something went wrong!!!");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<div className="modal fade" tabIndex={-1} id="clientModal">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Add Client</h5>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						/>
					</div>
					<div className="modal-body">
						<form onSubmit={(e) => handleSubmit(e)}>
							<div className="mb-3">
								<label htmlFor="name" className="form-label">
									Name
								</label>
								<input
									type="text"
									className="form-control"
									id="exampleInputPassword1"
									name="name"
									onChange={(e) => handleChange(e)}
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="email" className="form-label">
									Email address
								</label>
								<input
									type="email"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									name="email"
									onChange={(e) => handleChange(e)}
								/>
								<div id="emailHelp" className="form-text"></div>
							</div>
							<div className="mb-3">
								<label htmlFor="name" className="form-label">
									Phone
								</label>
								<input
									type="text"
									className="form-control"
									id="exampleInputPassword1"
									name="phone"
									onChange={(e) => handleChange(e)}
								/>
							</div>

							{isSubmit ? (
								<button type="submit" className="btn btn-primary">
									Submitting...
								</button>
							) : (
								<button type="submit" className="btn btn-primary">
									Submit
								</button>
							)}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ClientModal;
