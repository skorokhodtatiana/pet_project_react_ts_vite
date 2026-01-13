import { FC, useState, ChangeEvent, FormEvent } from 'react';

import './addPizzaForm.scss';
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

	const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
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
			//console.log(newPizza)
		}
	}

	return (
		<>
			<form className="form" onSubmit={handleSubmit}>
				<input
					className="form__input"
					name="title"
					type="text"
					placeholder="Название"
					onChange={handleChange}
					value={newPizza.title}
				/>
				<input
					className="form__input"
					name="price"
					type="text"
					placeholder="Стоимость"
					onChange={handleChange}
					value={newPizza.price}
				/>
				<input
					className="form__input"
					name="img"
					type="text"
					placeholder="Изображение"
					onChange={handleChange}
					value={newPizza.img}
				/>
				<button className="form__button-submit" type="submit">
					Добавить в меню
				</button>
			</form>
		</>
	)
};

export default AddPizzaForm;