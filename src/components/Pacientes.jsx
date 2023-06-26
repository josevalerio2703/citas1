import React from "react";

const Pacientes = ({ ele, setPaciente1, eliminarPaciente }) => {
  const { paciente, padre, email, fecha, sintomas, id } = ele;

  const handleDelete = () => {
    const respuesta = confirm(`Desea eliminar al paciente ${paciente}`);
    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Paciente: {""}
        <span className="font-normal normal-case">{paciente}</span>{" "}
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Padre: {""}
        <span className="font-normal normal-case">{padre}</span>{" "}
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>{" "}
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de Consulta: {""}
        <span className="font-normal normal-case">{fecha}</span>{" "}
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>{" "}
      </p>
      <div className="flex justify-between mt-10">
        <button
          className="bg-indigo-600 hover:bg-indigo-700 py-2 px-10 rounded text-white font-bold uppercase"
          onClick={() => setPaciente1(ele)}
        >
          Editar
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 py-2 px-10 rounded text-white font-bold uppercase"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Pacientes;
