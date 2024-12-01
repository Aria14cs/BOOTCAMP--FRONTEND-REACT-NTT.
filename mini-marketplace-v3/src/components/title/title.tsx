const Title: React.FC<TitleProps> = ({
  text,
  size = "medium",
  align = "center",
  color = "inherit",
  className = "",
}) => {
  const sizeStyles: Record<typeof size, string> = {
    small: "text-sm",
    medium: "text-xl",
    large: "text-3xl",
  };

  const alignStyles: Record<typeof align, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <h1
      className={`${sizeStyles[size]} ${alignStyles[align]} font-bold ${className}`}
      style={{ color }}
    >
      {text}
    </h1>
  );
};

export default Title;
