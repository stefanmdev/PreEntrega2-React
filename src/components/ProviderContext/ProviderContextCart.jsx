import { createContext, useState } from "react";
import products from "../Products/products";
import {
	getFirestore,
	collection,
	getDocs,
	addDoc,
	serverTimestamp,
} from "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {

	authDomain: "store-af657.firebaseapp.com",
	projectId: "store-af657",
	storageBucket: "store-af657.appspot.com",
	messagingSenderId: "596971287963",
	appId: "1:596971287963:web:3cfa3271e24424f89f5d3e",
	measurementId: "G-JMST2ZW0QD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const listCartContext = createContext(null);

const ProviderContextCart = ({ children }) => {
	const [listCart, setListCart] = useState([]);

	const addProduct = (id) => {
		//Find the product I want to add
		const productAdd = products.find((product) => product.id === id);

		//Array of products in cart
		const productInList = listCart.filter((product) => product.id !== id);

		let add = true;
		for (let product of listCart) {
			if (product.id === id) {
				let stock = product.stock;

				if (stock < productAdd.stock) {
					const newQty = { ...product, stock: stock + 1 };
					setListCart([...productInList, newQty]);
				}

				add = false;
				break;
			}
		}
		add && setListCart([...productInList, { ...productAdd, stock: 1 }]);
	};

	const clearCart = () => {
		setListCart([]); //empty the cart.
	};

	const remove = (id) => {
		const updateList = listCart.filter((product) => product.id !== id);
		setListCart(updateList);
	};

	return (
		<listCartContext.Provider
			value={{
				remove,
				listCart,
				addProduct,
				clearCart,
			}}>
			{children}
		</listCartContext.Provider>
	);
};

export default ProviderContextCart;