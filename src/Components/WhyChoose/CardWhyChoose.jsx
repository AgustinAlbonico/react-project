import './WhyChoose.css'

const CardWhyChoose = () => {
  return (
    <section className='whychoose-container'>
     <h2>¿Por qué elegirnos?</h2>
     <div className='cards-whychoose-container'>
      
      <div className='card-whychoose'>
        <img src={require('./images/whychoose1.png')} alt="precios flexibles" />
        <h3>Precios Flexibles</h3>
      </div>             
      <div className='card-whychoose card-front'>
        <img src={require('./images/whychoose2.png')} alt="precios flexibles" />
        <h3>Entregas rápidas</h3>
      </div>
      <div className='card-whychoose card-front'>
        <img src={require('./images/whychoose3.png')} alt="precios flexibles" />
        <h3>Garantía exclusiva</h3>
      </div>
      <div className='card-whychoose card-front'>
        <img src={require('./images/whychoose4.png')} alt="precios flexibles" />
        <h3>Resolvemos tus interrogantes</h3>
      </div>
     </div>
    </section>
  )
}

export default CardWhyChoose