import React from "react";
import { Jumbotron } from "./jumbotron.jsx";
import { Cards } from "./card.jsx";
import { Footer } from "./footer.jsx";
import { Navbar } from "./navbar.jsx";
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="container-fliud">
			<Navbar/>
			<div className="text-center">
				<Jumbotron/>
				<div className="row justify-content-center">
				<Cards />
				<Cards />
				<Cards />
				<Cards />
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
