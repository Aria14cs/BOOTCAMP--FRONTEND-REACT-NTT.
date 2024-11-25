import "./boton.css";

interface BotonProps {
  text: string;
  color: string;
  size: "small" | "medium" | "large";
  onClick?: () => void;
  disabled?: boolean;
}

const Boton: React.FC<BotonProps> = ({ text, color, size, onClick }) => {
  const colorClass = `button-${color}`;

  return (
    <button className={`button ${colorClass} button-${size}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Boton;
