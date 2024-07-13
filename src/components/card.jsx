import pressStartFont from "@/utils/pressStartFont";
import Image from "next/image";

const Card = ({ id, image, title, children }) => {
  const _title = (
    <div className="relative mb-2">
      <div className={`${pressStartFont} text-4xl text-gray-500`}>{title}</div>
      <div className="absolute italic font-bold text-xl" style={{ bottom: -5 }}>
        {`>> ${title}`}
      </div>
    </div>
  );
  return (
    <div
      id={id}
      className="dark:bg-black/50 bg-gray-50/75 text-gray-900 dark:text-gray-50 rounded-2xl shadow-ml shadow-gray-900"
    >
      {image ? (
        <div className="grid grid-cols-5 p-4">
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
            {_title}
            {children}
          </div>
        </div>
      ) : (
        <div className="p-4">
          {_title}
          {children}
        </div>
      )}
    </div>
  );
};
export default Card;
