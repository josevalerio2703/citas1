import { useEffect, useState } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente1, setPaciente1 }) => {
  const [form, setForm] = useState({
    id: "",
    paciente: "",
    padre: "",
    email: "",
    fecha: "",
    sintomas: "",
  });

  const [error, setError] = useState(false);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({
      ...form,
      //id: generarId(),
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { paciente, padre, email, fecha, sintomas } = form;
    //Validacion Simple
    if ([paciente, padre, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }

    if(paciente1.id){
      //editando Pasiente   
      
    console.log('editando');
    console.log(form); //viejo
    console.log(paciente1); //nuevo
    form.id = paciente1.id
    const pacienteActualizado = pacientes.map(ele => ele.id === paciente1.id ? form : ele )
    setPacientes(pacienteActualizado)
    setPaciente1({})
    }else {
      //Nuevo Registro
      form.id = generarId()
      setPacientes([...pacientes, form]);
      
    }     

    setForm({
      paciente: "",
      padre: "",
      email: "",
      fecha: "",
      sintomas: "",
    });
    setError(false);
  };

  useEffect(() => {
    if (Object.keys(paciente1).length > 0) {
      setForm(paciente1);
    }
  }, [paciente1]);

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-bold text-3xl text-center">
        Seguimientos de Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralo</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        {error && (
          <Error>
            <p>Todos Los Campos Son Obligatorios</p>
          </Error>
        )}
        <div className="mb-5">
          <label
            htmlFor="paciente"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre de Paciente
          </label>
          <input
            id="paciente"
            type="text"
            placeholder="Nombre de Paciente "
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={form.paciente}
            name="paciente"
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="padre"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del Padre
          </label>
          <input
            id="padre"
            type="text"
            placeholder="Nombre del Padre"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="padre"
            value={form.padre}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email contacto del padre"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="fecha"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha de Consulta
          </label>
          <input
            id="fecha"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="fecha"
            value={form.fecha}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            name="sintomas"
            id="sintomas"
            cols="30"
            rows="3"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Descripcion de los Sintomas"
            value={form.sintomas}
            onChange={handleChange}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={paciente1.id ? 'Editar Paciente' : 'Agregar Paciente' }
        />
      </form>
    </div>
  );
};

export default Formulario;
