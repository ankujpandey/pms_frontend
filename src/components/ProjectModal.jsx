import React from "react";

function ProjectModal(props) {
	return (
		<div className="modal fade" tabIndex={-1} id="projectModal">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">New Project</h5>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						/>
					</div>
					<div className="modal-body">
						<form>
							<div className="mb-3">
								<label htmlFor="name" className="form-label">
									Name
								</label>
								<input
									type="text"
									className="form-control"
									id="exampleInputPassword1"
								/>
							</div>

							<div className="mb-3">
								<label htmlFor="description" className="form-label">
									Description
								</label>
								<textarea
									type="text"
									className="form-control"
									id="floatingTextarea"
								/>
							</div>

							<div className="mb-3">
								<label htmlFor="status" className="form-label">
									Status
								</label>
								<select className="form-select">
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
								<select className="form-select">
									<option defaultValue>Select Client</option>
									<option value={1}>Tony Stark</option>
									<option value={2}>Peter Parker</option>
									<option value={3}>Buppy Leheree</option>
									<option value={4}>Other</option>
								</select>
							</div>

							<button type="submit" className="btn btn-warning">
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectModal;
