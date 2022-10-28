

const Foot = () => {
  return (
    <div class="grid grid-cols-1  md:grid-cols-3 p-10   text-white bg-[#2493BF] ">
      <div className="Contacto" class="m-5">
        <h4 class="font-bold mb-2 text-gray-300">CONTACTO</h4>
        <h5>Sgto. Cabral 1436, El Palomar, Bs. As., Argentina</h5>
        <h5>Tel:(5411)4650 - 8823 </h5>
        <h5> info@bytepro.com.ar </h5>
        <a href="" class="hover:text-[#05DBF2] ">Ver ubicación</a>
      </div>
      <div className="Menu" class=" flex flex-col text-start md:text-center ml-5 md:ml-0 mt-5">
        <h4  class="font-bold mb-2 text-gray-300">MENÚ</h4>
          <ul>
            <li><a href="" class="hover:text-[#05DBF2] ">Home</a></li>
            <li><a href="" class="hover:text-[#05DBF2] " >Nosotros</a></li>
            <li><a href="" class="hover:text-[#05DBF2] ">Servicios</a></li>
            <li><a href="" class="hover:text-[#05DBF2] ">Contacto</a></li>
          </ul>
      </div>
      <div className="consultas" class="flex flex-col m-5 pt-5 md:pt-0" >
        <p>Deje su consulta, le responderemos a la brevedad</p>
        <form action="" class="flex flex-col mt-2">
          <label htmlFor="nombres"></label>
          <input type="text" name="nombres" id="nombres" placeholder="Nombre" class="mt-2 border-solid"/>
          <label htmlFor="apellido"></label>
          <input type="text" name="apellido" id="apellido" placeholder="Apellido" class="mt-2"/>
          <label htmlFor="correo"></label>
          <input type="text" name="correo" id="correo" placeholder="Correo" class="mt-2"/>
        </form>
      </div>
    </div>
  )
}

export default Foot;
