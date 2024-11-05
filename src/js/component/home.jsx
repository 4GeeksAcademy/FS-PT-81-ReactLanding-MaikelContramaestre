import React from "react";

//include images into your bundle
import {NavBar} from "./NavBar.jsx";
import {Jumbo} from "./jumbotron.jsx";
import {Card} from "./card.jsx";
import {Foot} from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<NavBar/>
			<Jumbo/>
			<Card/>
			<Card/>		
			<Foot/>	
		</>
	);
};

export default Home;
