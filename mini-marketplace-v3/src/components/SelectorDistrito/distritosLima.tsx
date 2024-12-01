import React, { useEffect, useState } from "react";
import SelectInput from "../selec/SelectInput";

interface Distrito {
  value: string;
  label: string;
}

const SelectDistritos: React.FC = () => {
  const [distritos, setDistritos] = useState<Distrito[]>([]);
  const [selectedDistrito, setSelectedDistrito] = useState<string>("");

  useEffect(() => {
    const fetchDistritos = async () => {
      try {
        const response = await fetch("/src/data/distritosLima.json");
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
      label=""
    />
  );
};

export default SelectDistritos;
