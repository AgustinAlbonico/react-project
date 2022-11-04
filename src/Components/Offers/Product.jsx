import './Offers.css'


const Product = ({data, openModal}) => {

  const {id, name, sale, price, img} = data;
  
  return (
    <div className="card">
      <div className="description-card">
        <img src={img} alt={name} />
        <div className='text-card'>
          <h4>{name}</h4>
          <div className='price-text'>
            <h5>${sale}</h5> <h6>${price}</h6>
          </div>
          <div className='stars'>
            ★★★★★
          </div>
        </div>
      </div>
          
      <button className="btn" onClick={() => openModal(id)}>
        Ver detalles 
      </button>
  </div>
  )
}

export default Product