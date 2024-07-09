import Icon from "@/components/icon";

const NavItem = ({ title, target, selected }) => (
  <li className="ease-in-out duration-300 nav-item hover:bg-gray-700">
    <a href={target} className="flex justify-between py-2 px-4">
      <span>{title}</span>
      {selected && <Icon name={`icon-spin1`} className="selected-spin" />}
    </a>
  </li>
);

export default NavItem;
