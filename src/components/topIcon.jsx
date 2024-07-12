import Icon from "./icon";

const TopIcon = ({ icon, className = "", onclick = () => null }) => {
  return (
    <button
      onClick={onclick}
      className={`dark:bg-black/50 bg-gray-50/75 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 p-2 rounded-b-lg ${className}`}
    >
      <Icon name={icon} />
    </button>
  );
};

export default TopIcon;
