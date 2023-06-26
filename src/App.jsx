import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState( JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente1, setPaciente1] = useState({});

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter((ele) => ele.id !== id);
    setPacientes(pacientesActualizados);
  };

  return (
    <div className="container mx-auto my-12">
      <Header />
      <div className="mt-12 md:flex ">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente1={paciente1}
          setPaciente1={setPaciente1}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente1={setPaciente1}
          setPacientes={setPacientes}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
