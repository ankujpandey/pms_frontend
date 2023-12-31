import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.jsx";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";
import LoginPage from "./pages/LoginPage";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path=":id" element={<ProjectDetails />} />
				<Route path="login" element={<LoginPage />} />
			</Routes>
		</div>
	);
}

export default App;
