import Pacientes from "./Pacientes";

const ListadoPacientes = ({ pacientes, setPaciente1,eliminarPaciente }) => {
  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? 
      <>
        <h2 className="font-bold text-3xl text-center">Listado de Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Administra tus {""}
        <span className="text-sky-900 font-bold">Pacientes y Citas</span>
      </p>
      {pacientes.map((ele) => (
        <Pacientes key={ele.id} 
        ele={ele} 
        setPaciente1={setPaciente1}
        eliminarPaciente={eliminarPaciente}
        />
      ))}
      </> : <><h2 className="font-bold text-3xl text-center">No Hay Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Inserte Pacientes {""}
        <span className="text-sky-900 font-bold">Para Mostar</span>
      </p></>
      }      
    </div>
  );
};

export default ListadoPacientes;
