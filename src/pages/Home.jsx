import React from "react";
import ClientList from "../components/ClientList";
import ProjetsCard from "../components/ProjetsCard";

function Home(props) {
	return (
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
	);
}

export default Home;
