interface MessageProps {
  authorIsOwner: boolean;
  name: string;
  prevAuthor: boolean;
  nextAuthor: boolean;
  text: string;
  image: string;
}

const Message = ({
  authorIsOwner,
  name,
  prevAuthor,
  nextAuthor,
  text,
  image,
}: MessageProps) => {
  return (
    <div className="grid grid-cols-16 grid-4">
      {authorIsOwner ? (
        <div className="col-span-4 content-end"></div>
      ) : (
        <div className="col-span-1 content-start">
          <img src={image} alt={name} className="clip-circle h-1/2"></img>
        </div>
      )}
      <div className="col-span-11 content-center">
        {" "}
       <div
          className={`flex items-center ps-4 border border-gray-100 ${nextAuthor && authorIsOwner ? `rounded-br-xs` : ``} ${prevAuthor && authorIsOwner ? `rounded-tr-xs` : ``} ${nextAuthor && !authorIsOwner ? `rounded-tl-xs` : ``} ${prevAuthor && !authorIsOwner ? `rounded-bl-xs` : ``} rounded-2xl border-gray-300 ${authorIsOwner ? `bg-blue-300` : `bg-gray-300` } `}
        >
          <div className="flex flex-col">
            <label
              htmlFor="bordered-checkbox-1"
              className="w-full py-4 px-4 text-sm font-medium text-black"
            >
              {text}
            </label>
          </div>
        </div>
      </div>
      {authorIsOwner ? (
        <div className="col-span-1 content-start">
          <img src={image} alt={name} className="clip-circle h-1/2"></img>
        </div>
      ) : (
        <div className="col-span-4 content-end"></div>
      )}
    </div>
  );
};

export default Message;
