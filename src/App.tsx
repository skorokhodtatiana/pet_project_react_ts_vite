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

	const updatePizza = (newPizza: Pizza) => {
		setPizzasList(pizzasList.map(pizza => (
			pizza.id === newPizza.id ? newPizza : pizza
		)));
	};

	const deletePizza = (id: number) => {
		const newPizzaList = pizzasList.filter(pizza => pizza.id !== id)
		setPizzasList(newPizzaList);
	};

	console.log(pizzasList)

	return (
		<div className="app">
			<div className="app__wrap">
				<div className="app__heading">
					Наша пиццерия
					<AddPizzaForm addNewPizza={addNewPizza}></AddPizzaForm>
				</div>
				<DisplayPizza pizzasList={pizzasList} updatePizza={updatePizza} deletePizza={deletePizza}></DisplayPizza>
			</div>
		</div>
	);
}

export default App
