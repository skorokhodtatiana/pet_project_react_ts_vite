import { FC, useState } from "react";
import Pizza from "../../models/Pizza";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import EditPizzaForm from "../editPizzaForm/EditPizzaForm";

import './singlePizza.scss';


interface singlePizzaProps {
	pizza: Pizza;
	updatePizza: (newPizza: Pizza) => void;
	deletePizza: (id: number) => void;
}

const SinglePizza:FC<singlePizzaProps> = ({pizza, updatePizza, deletePizza}) => {
	const [edit, setEdit] = useState<boolean>(false);

	const handleToggleEdit = () => {
		setEdit(!edit)
	}

	const handleDelet = () => {
		deletePizza(pizza.id)
	}

	return (
		<div className="pizza">
			<img className="pizza__img" src={`images/${pizza.img}`} alt={pizza.img}/>
			<h2 className="pizza__title">{pizza.title}</h2>
			<span className="pizza__price">{pizza.price}</span>

			<div className="pizza__controls">
				<AiFillEdit onClick={handleToggleEdit}></AiFillEdit>
				<AiFillDelete onClick={handleDelet}></AiFillDelete>
			</div>

			{edit ?
				<EditPizzaForm data={pizza} updatePizza={updatePizza} handleToggleEdit={handleToggleEdit}/> :
				null}
		</div>
	)
}

export default SinglePizza;
