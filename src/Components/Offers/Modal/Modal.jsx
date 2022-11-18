import "./Modal.css";

const Modal = ({ dataModal, addToCart, cancelModal, added }) => {
	const { id, name, sale, price, img, description } = dataModal;

	console.log(dataModal);

	return (
		<article className="modal-container">
			<div className="image-modal">
				<img src={img} alt={name} />
			</div>
			<div className="description-modal">
				<h4>{name}</h4>
				<div className="price-text">
					<h5>${sale}</h5> <h6>${price}</h6>
				</div>
				<div>
					<p>{description}</p>
				</div>
				<div className="btn-modal">
					<button className="btn" onClick={() => addToCart(id)}>
						Agregar al carrito
					</button>
					<button className="btn" onClick={() => cancelModal()}>
						Cancelar
					</button>
				</div>
			</div>
			{added ? (
				<span
					style={{
						color: "#fff",
						position: "absolute",
						bottom: "10%",
						left: "45%",
						padding: ".6rem 2rem",
						borderRadius: ".5rem",
						backgroundColor: "#0a0",
					}}
				>
					Producto Añadido!
				</span>
			) : null}
		</article>
	);
};

export default Modal;
