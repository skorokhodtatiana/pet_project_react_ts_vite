import { FC } from "react";
import Pizza from "../../models/Pizza";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

import './singlePizza.scss';


interface singlePizzaProps {
	pizza: Pizza
}

const SinglePizza:FC<singlePizzaProps> = ({pizza}) => {
	return (
		<div className="pizza">
			<img className="pizza__img" src={`src/assets/images/${pizza.img}`} alt={pizza.img}/>
			<h2 className="pizza__title">{pizza.title}</h2>
			<span className="pizza__price">{pizza.price}</span>
			<div className="pizza__controls">
				<AiFillEdit></AiFillEdit>
				<AiFillDelete></AiFillDelete>
			</div>
		</div>
	)
}

export default SinglePizza;
