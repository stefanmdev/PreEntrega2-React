import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailedCard from "./components/CardItems/DetailedCardContainer";
import Contacto from "./components/Contacto/Contacto";
import ProviderContextCart from "./components/ProviderContext/ProviderContextCart";

function App() {
	return (
		<ProviderContextCart>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Navigate to="/React/" />} />
					<Route
						main
						path="/React/"
						element={<ItemListContainer />}
					/>
					<Route
						path="/React/contacto"
						element={<Contacto />}
					/>
					<Route
						path="/React/item/:id"
						element={<DetailedCard />}
					/>
					<Route
						path="/React/category/:idCategory"
						element={<ItemListContainer />}
					/>
				</Routes>
			</BrowserRouter>
		</ProviderContextCart>
	);
}

export default App;