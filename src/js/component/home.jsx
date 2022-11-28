import React from "react";
import { Jumbotron } from "./jumbotron.jsx";
import { Cards } from "./card.jsx";
import { Footer } from "./footer.jsx";
import { Navbar } from "./navbar.jsx";
//include images into your bundle
let title = "A Warm Welcome";
let espacio1= "Card 1";
let espacio2= "Card 2";
let espacio3= "Card 3";
let espacio4= "Card 4";

//create your first component
const Home = () => {
	return (
		<div className="container-fliud">
			<Navbar/>
			<div className="text-center">
				<Jumbotron title={title}/>
				<div className="row justify-content-center">
				<Cards espacio={espacio1}/>
				<Cards espacio={espacio2}/>
				<Cards espacio={espacio3}/>
				<Cards espacio={espacio4}/>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
