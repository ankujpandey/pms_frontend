import React, { useState } from "react";
import ClientList from "../components/ClientList";
import ProjetsCard from "../components/ProjetsCard";
import { Link } from "react-router-dom";

function Home(props) {
	const [isLogedin, setIsLogedin] = useState(false);
	return (
		<>
			{isLogedin ? (
				<div className="py-4">
					<div className="container">
						<div className="mt-3">
							<ProjetsCard />
						</div>
					</div>

					<div className="container mt-5">
						<hr className="mb-1" />
						<ClientList />
					</div>
				</div>
			) : (
				<div className="home-page d-flex justify-content-center align-items-center">
					Please Login first
					<Link className="btn btn-warning" to={"/login"}>
						Login
					</Link>
				</div>
			)}
		</>
	);
}

export default Home;
