const Input = ({
  label,
  placeholder,
  value,
  onchange,
  error,
  multiline,
  rows = 5,
}) => {
  const labelStyle = error
    ? "block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
    : "block mb-2 font-medium text-gray-900 dark:text-white";
  const inputStyle = error
    ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
    : "block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500";
  return (
    <div className="mb-4">
      <label className={labelStyle}>{label}</label>
      {multiline ? (
        <textarea
          className={inputStyle}
          placeholder={placeholder}
          value={value}
          rows={rows}
          onChange={({ target: { value } }) => onchange(value)}
        />
      ) : (
        <input
          className={inputStyle}
          placeholder={placeholder}
          value={value}
          onChange={({ target: { value } }) => onchange(value)}
        />
      )}
    </div>
  );
};

export default Input;
