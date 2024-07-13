const Button = ({ onclick, title }) => {
  return (
    <button
      className="bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 p-2 rounded-full text-white"
      onClick={() => onclick()}
    >
      {title}
    </button>
  );
};

export default Button;
