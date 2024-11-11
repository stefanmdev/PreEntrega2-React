import { FaShoppingCart } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { listCartContext } from "../ProviderContext/ProviderContextCart";

const ButtonAddToCart = ({ id }) => {
	let { addProduct } = useContext(listCartContext);

	return (
		<Button
			variant="outline-primary"
			id="addCart"
			onClick={() => addProduct(id)}>
			<h6>
				<FaShoppingCart />
			</h6>
		</Button>
	);
};

export default ButtonAddToCart;