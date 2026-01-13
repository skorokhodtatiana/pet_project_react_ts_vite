import { FC, useState, ChangeEvent, FormEvent } from 'react';

import './editPizzaForm.scss';
import Pizza from '../../models/Pizza';

interface EditPizzaFormProps {
	data: Pizza;
	updatePizza: (newPizza: Pizza) => void;
	handleToggleEdit: () => void
};

const EditPizzaForm: FC<EditPizzaFormProps> = ({data, updatePizza, handleToggleEdit}) => {
	const [editPizza, setEditPizza] = useState(data);

	const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target;
		setEditPizza({
			...editPizza,
			[name]: value,

		})
	}

	const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const {title, price, img} = editPizza;

		if (title && img && price) {
			updatePizza(editPizza);
			handleToggleEdit();
			//console.log("editPizza " + editPizza.price)
		}
	}

	return (
		<>
			<form className="edit-form" onSubmit={handleSubmit}>
				<input
					className="edit-form__input"
					name="title"
					type="text"
					placeholder="Название"
					onChange={handleChange}
					value={editPizza.title}
				/>
				<input
					className="edit-form__input"
					name="price"
					type="text"
					placeholder="Стоимость"
					onChange={handleChange}
					value={editPizza.price}
				/>
				<input
					className="edit-form__input"
					name="img"
					type="text"
					placeholder="Изображение"
					onChange={handleChange}
					value={editPizza.img}
				/>
				<button className="edit-form__button-submit" type="submit">
					Отправить
				</button>
			</form>
		</>
	)
};

export default EditPizzaForm;
