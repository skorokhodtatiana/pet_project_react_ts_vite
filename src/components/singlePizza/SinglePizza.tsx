import { FC } from "react";

import './singlePizza.css';
import Pizza from "../../models/Pizza";

interface singlePizzaProps {
	pizza: Pizza
}


const SinglePizza:FC<singlePizzaProps> = ({pizza}) => {
	return (
		<div className="pizza">
			<img src={`src/assets/images/${pizza.img}`} alt={pizza.img}/>
			<h2>{pizza.title}</h2>
			<span className="price">{pizza.price}</span>
		</div>
	)
}

export default SinglePizza;
