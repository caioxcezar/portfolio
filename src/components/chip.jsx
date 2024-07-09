import Icon from "@/components/icon";

const Chip = ({ icon, text, color = "indigo-500" }) => {
  return (
    <div
      className={`flex items-center p-1 shadow-sm border-${color} border-2 rounded-full hover:bg-indigo-500 ease-in-out duration-300`}
    >
      {icon && <Icon name={icon} />}
      <div>{text}</div>
    </div>
  );
};

export default Chip;
