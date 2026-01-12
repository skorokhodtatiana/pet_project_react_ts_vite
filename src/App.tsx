import { FC, useState } from 'react';
import AddPizzaForm from './components/addPizzaForm/AddPizzaForm';
import DisplayPizza from './components/displayPizza/DisplayPizza';
import Pizza from './models/Pizza';

import './App.scss';

const App: FC = () => {
	const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

	const addNewPizza = (newPizza: Pizza) => {
		setPizzasList([...pizzasList,newPizza]);
	};

	console.log(pizzasList)

	return (
		<div className="container">
			<div className="container__wrap">
				<div className="container__heading">
					Наша пиццерия
					<AddPizzaForm addNewPizza={addNewPizza}></AddPizzaForm>
				</div>
				<DisplayPizza pizzasList={pizzasList}></DisplayPizza>
			</div>
		</div>
	);
}

export default App
