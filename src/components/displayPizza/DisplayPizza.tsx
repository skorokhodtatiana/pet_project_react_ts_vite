import { FC } from "react";

import './displayPizza.scss';
import Pizza from "../../models/Pizza";
import SinglePizza from "../singlePizza/SinglePizza";

interface DisplayPizzaProps {
	pizzasList: Pizza[];
	updatePizza: (newPizza: Pizza) => void;
	deletePizza: (id: number) => void;
}


const DisplayPizza:FC<DisplayPizzaProps> = ({pizzasList, updatePizza, deletePizza}) => {
	return (
		<div className="container">
			{pizzasList && pizzasList.map(pizza => {
				return <SinglePizza key={pizza.id} pizza={pizza} updatePizza={ updatePizza} deletePizza={deletePizza}></SinglePizza>
			})}
		</div>
	)
}

export default DisplayPizza;
