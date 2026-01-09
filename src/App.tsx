import { FC, useState } from 'react';
import AddPizzaForm from './components/addPizzaForm/AddPizzaForm';
import Pizza from './models/Pizza';

import './App.css';

const App: FC = () => {
	const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

	const addNewPizza = (newPizza: Pizza) => {
		setPizzasList([...pizzasList,newPizza]);
	};

	console.log(pizzasList)

	return (
		<div className="App">
			<div className="wrap">
				<div className="heading">
					Наша пиццерия
					<AddPizzaForm addNewPizza={addNewPizza}></AddPizzaForm>
				</div>
			</div>
		</div>
	);
}

export default App
