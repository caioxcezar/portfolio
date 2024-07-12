const Button = ({ onclick, title }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 p-2 rounded-full"
      onClick={() => onclick()}
    >
      {title}
    </button>
  );
};

export default Button;
