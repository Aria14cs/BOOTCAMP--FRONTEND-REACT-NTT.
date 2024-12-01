import React from "react";

interface SelectInputProps {
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
  label: string;
  className?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  options,
  selectedValue,
  onChange,
  label,
  className,
}) => {
  return (
    <div className={`select-input-container ${className}`}>
      <label>{label}</label>
      <select
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
        className="select-input"
      >
        <option value="">Seleccione un distrito</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
