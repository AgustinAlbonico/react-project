export const Foot = () => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-3 p-10  text-white bg-[#2493BF] ">
      <div className="m-5 flex flex-col justify-start items-center">
          <h4 className="font-bold mb-8 text-gray-300 text-[30px] underline">CONTACTO</h4>
          <p className="font-bold text-salmon mb-4">Sgto. Cabral 1436, El Palomar, Bs. As., Argentina</p>
          <p className="font-bold text-salmon mb-4">Tel:(5411)4650 - 8823 </p>
          <p className="font-bold text-salmon mb-4"> info@bytepro.com.ar </p>
          <a href="" className="hover:text-[#05DBF2] font-bold mt-4">
            Ver ubicación
          </a>
      </div>
      <div className=" flex flex-col items-center justify-start text-start md:text-center ml-5 md:ml-0 mt-5">
        <h4 className="font-bold mb-2 text-gray-300 text-[30px] underline">MENÚ</h4>
        <ul>
          <li>
            <a href="" className="hover:text-[#05DBF2] ">
              Home
            </a>
          </li>
          <li>
            <a href="" className="hover:text-[#05DBF2] ">
              Nosotros
            </a>
          </li>
          <li>
            <a href="" className="hover:text-[#05DBF2] ">
              Servicios
            </a>
          </li>
          <li>
            <a href="" className="hover:text-[#05DBF2] ">
              Contacto
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col m-5 pt-5 md:pt-0">
        <p className="font-bold text-2xl text-center pb-8">Deje su consulta, le responderemos a la brevedad</p>
        <form action="" className="flex flex-col mt-2">
          <label htmlFor="nombres"></label>
          <input
            type="text"
            name="nombres"
            id="nombres"
            placeholder="Nombre"
            className="mt-2 border-solid p-2 font-bold"
          />
          <label htmlFor="apellido"></label>
          <input
            type="text"
            name="apellido"
            id="apellido"
            placeholder="Apellido"
            className="mt-2 p-2 font-bold"
          />
          <label htmlFor="correo"></label>
          <input
            type="text"
            name="correo"
            id="correo"
            placeholder="Correo"
            className="mt-2 p-2 font-bold"
          />
        </form>
      </div>
    </div>
  );
};

export default Foot;
