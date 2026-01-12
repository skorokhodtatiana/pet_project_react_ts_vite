import { FC } from "react";

import './displayPizza.scss';
import Pizza from "../../models/Pizza";
import SinglePizza from "../singlePizza/SinglePizza";

interface DisplayPizzaProps {
	pizzasList: Pizza[]
}


const DisplayPizza:FC<DisplayPizzaProps> = ({pizzasList}) => {
	return (
		<div className="container">
			{pizzasList && pizzasList.map(pizza => {
				return <SinglePizza key={pizza.id} pizza={pizza}></SinglePizza>
			})}
		</div>
	)
}

export default DisplayPizza;
