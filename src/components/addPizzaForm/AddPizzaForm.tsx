import { FC, useState, ChangeEvent, FormEvent } from 'react';

import './addPizzaForm.css';
import Pizza from '../../models/Pizza';

const initialState = {
		title: '',
		price: '',
		img: ''
	}

	interface addPizzaFormProps {
		addNewPizza: (newPizza:Pizza) => void
	};

const AddPizzaForm: FC<addPizzaFormProps> = ({addNewPizza}) => {
	const [newPizza, setNewPizza] = useState<{title: string, price: string, img: string}>(initialState);

	const handleClick = (e:ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target;
		setNewPizza({
			...newPizza,
			[name]: value,

		})
	}

	const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const {title, price, img} = newPizza;

		if (title && img && price) {
			addNewPizza({
				title,
				price,
				img,
				id: Date.now()
			})
			setNewPizza(initialState);
			console.log(newPizza)
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					name="title"
					type="text"
					placeholder="Название"
					onChange={handleClick}
					value={newPizza.title}
				/>
				<input
					name="price"
					type="text"
					placeholder="Стоимость"
					onChange={handleClick}
					value={newPizza.price}
				/>
				<input
					name="img"
					type="text"
					placeholder="Изображение"
					onChange={handleClick}
					value={newPizza.img}
				/>
				<button type="submit">
					Добавить в меню
				</button>
			</form>
		</>
	)
};

export default AddPizzaForm;