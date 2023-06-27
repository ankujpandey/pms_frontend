import React, { useState } from "react";
import { icons } from "../icons/Icons";
import ClientModal from "./ClientModal";
import ProjectModal from "./ProjectModal";
import { Link } from "react-router-dom";

function Header(props) {
	const [isLogedin, setIsLogedin] = useState(false);
	return (
		<nav className="navbar bg-body-tertiary">
			<div className="container">
				<div className="header-name">
					<h1>
						<a>Project Management</a>
					</h1>
				</div>
				{isLogedin ? (
					<div className="d-flex">
						<button
							className="btn btn-primary me-2"
							data-bs-toggle="modal"
							data-bs-target="#clientModal">
							{icons.client} Add Client
						</button>
						<button
							className="btn btn-warning"
							data-bs-toggle="modal"
							data-bs-target="#projectModal">
							{icons.list} New Project
						</button>
					</div>
				) : (
					<div>
						<Link className="btn btn-warning" to={"/login"}>
							Login
						</Link>
					</div>
				)}
			</div>
			<ClientModal />
			<ProjectModal />
		</nav>
	);
}

export default Header;
