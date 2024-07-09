import Icon from "./icon";

const Steam = ({ timer }) => {
  return (
    <Icon
      name="icon-steam"
      className={`text-5xl steam steam-duration-${timer}`}
    />
  );
};

const Coffee = ({ className = "" }) => {
  return (
    <div className={className}>
      <div className={"flex"}>
        <span className="text-gray-900">{"0000000000000"}</span>
        <Steam timer={4} />
        <Steam timer={5} />
        <Steam timer={3} />
      </div>
      <Icon name="icon-emo-coffee" className="text-9xl" />
    </div>
  );
};

export default Coffee;
