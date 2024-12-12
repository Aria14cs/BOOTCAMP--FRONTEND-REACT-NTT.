// falta test
import SelectInput from "../selec/SelectInput";

interface CategoriaOption {
  value: string;
  label: string;
}

interface SelectorCategoriaProps {
  categorias: CategoriaOption[];
  onCategoryChange: (categorySlug: string) => void;
  selectedCategory: string;
  placeholder?: string;
}

const SelectorCategoria: React.FC<SelectorCategoriaProps> = ({
  categorias,
  onCategoryChange,
  selectedCategory,
  placeholder = "Selecciona una categoría",
}) => {
  return (
    <div>
      <SelectInput
        options={categorias}
        selectedValue={selectedCategory}
        onChange={onCategoryChange}
        label=""
        placeholder={placeholder}
      />
    </div>
  );
};

export default SelectorCategoria;
