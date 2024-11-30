// import React, { useEffect, useState } from "react";
// import SelectInput from "../selec/SelectInput"; // Importamos el componente SelectInput creado previamente

// interface Distrito {
//   value: string;
//   label: string;
// }

// const SelectDistritos: React.FC = () => {
//   const [distritos, setDistritos] = useState<Distrito[]>([]); // Estado para almacenar los distritos
//   const [selectedDistrito, setSelectedDistrito] = useState<string>(""); // Estado para el distrito seleccionado

//   // Cargar los distritos desde el archivo JSON
//   useEffect(() => {
//     const fetchDistritos = async () => {
//       try {
//         const response = await fetch("/src/data/distritosLima.json"); // Ruta al archivo JSON
//         const data: Distrito[] = await response.json();
//         setDistritos(data);
//       } catch (error) {
//         console.error("Error al cargar los distritos:", error);
//       }
//     };

//     fetchDistritos();
//   }, []);

//   const handleSelectChange = (value: string) => {
//     setSelectedDistrito(value);
//   };

//   return (
//     <div className="p-4">
//       <h1>Selecciona un distrito de Lima</h1>
//       <SelectInput
//         options={distritos}
//         selectedValue={selectedDistrito}
//         onChange={handleSelectChange}
//         label="Distrito"
//       />
//       <p>Distrito seleccionado: {selectedDistrito}</p>
//     </div>
//   );
// };

// // export default SelectDistritos;
// import React, { useEffect, useState } from "react";
// import SelectInput from "../selec/SelectInput"; // Asegúrate de importar el componente SelectInput creado previamente

// interface Distrito {
//   value: string;
//   label: string;
// }

// const SelectDistritos: React.FC = () => {
//   const [distritos, setDistritos] = useState<Distrito[]>([]); // Estado para almacenar los distritos
//   const [selectedDistrito, setSelectedDistrito] = useState<string>(""); // Estado para el distrito seleccionado

//   // Cargar los distritos desde el archivo JSON
//   useEffect(() => {
//     const fetchDistritos = async () => {
//       try {
//         const response = await fetch("/src/data/distritosLima.json"); // Ruta al archivo JSON
//         const data: Distrito[] = await response.json();
//         setDistritos(data);
//       } catch (error) {
//         console.error("Error al cargar los distritos:", error);
//       }
//     };

//     fetchDistritos();
//   }, []);

//   const handleSelectChange = (value: string) => {
//     setSelectedDistrito(value);
//   };

//   return (
//     <div className="p-4">
//       <SelectInput
//         options={distritos}
//         selectedValue={selectedDistrito}
//         onChange={handleSelectChange}
//         label="Distrito"
//       />
//       <p>Distrito seleccionado: {selectedDistrito}</p>
//     </div>
//   );
// };

// export default SelectDistritos;
import React, { useEffect, useState } from "react";
import SelectInput from "../selec/SelectInput"; // Importamos el componente SelectInput creado previamente

interface Distrito {
  value: string;
  label: string;
}

const SelectDistritos: React.FC = () => {
  const [distritos, setDistritos] = useState<Distrito[]>([]); // Estado para almacenar los distritos
  const [selectedDistrito, setSelectedDistrito] = useState<string>(""); // Estado para el distrito seleccionado

  // Cargar los distritos desde el archivo JSON
  useEffect(() => {
    const fetchDistritos = async () => {
      try {
        const response = await fetch("/src/data/distritosLima.json"); // Ruta al archivo JSON
        const data: Distrito[] = await response.json();
        setDistritos(data);
      } catch (error) {
        console.error("Error al cargar los distritos:", error);
      }
    };

    fetchDistritos();
  }, []);

  const handleSelectChange = (value: string) => {
    setSelectedDistrito(value);
  };

  return (
    <SelectInput
      options={distritos}
      selectedValue={selectedDistrito}
      onChange={handleSelectChange}
      label="Distrito"
    />
  );
};

export default SelectDistritos;
