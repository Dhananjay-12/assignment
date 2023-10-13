function Button({ children, type, btnStyle, onClick }) {
  const buttonClass =
    type === "blue"
      ? "bg-blue-500 text-white hover:bg-blue-800"
      : "bg-white text-blue-500 hover:bg-gray-200 border border-blue-400";

  return (
    <button
      className={`px-4 py-2 rounded-xl font-semibold ${btnStyle} ${buttonClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
