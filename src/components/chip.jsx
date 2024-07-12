import Icon from "@/components/icon";

const Chip = ({ icon, text }) => {
  return (
    <div
      className={`flex items-center p-1 shadow-sm border-indigo-500 border-2 rounded-full hover:bg-indigo-500 ease-in-out duration-300`}
    >
      {icon && <Icon name={icon} />}
      <div>{text}</div>
    </div>
  );
};

export default Chip;
