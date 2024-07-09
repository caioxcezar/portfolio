import Icon from "@/components/icon";
import Image from "next/image";
import { useMemo } from "react";

const Card = ({ id, icon, image, title, children }) => {
  return (
    <div
      id={id}
      className="bg-gray-900/75 rounded-2xl shadow-ml shadow-gray-900"
    >
      {icon || image ? (
        <div className="grid grid-cols-5 p-4">
          {icon && <Icon name={icon} className="col-span-1 text-9xl" />}
          {image && (
            <Image
              src={image}
              width={500}
              height={500}
              className="col-span-1 px-2"
              alt={"About Picture"}
            />
          )}
          <div className="col-span-4">
            <div className="text-4xl font-bold">{title}</div>
            {children}
          </div>
        </div>
      ) : (
        <div className="p-4">
          <div className="text-4xl font-bold">{title}</div>
          {children}
        </div>
      )}
    </div>
  );
};
export default Card;
