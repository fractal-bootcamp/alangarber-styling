interface ListItemProps {
  id: number;
  item: string;
  explanation: string;
  completion: boolean[];
  indicator: boolean;
  setCompletion: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const ListItem = ({
  id,
  item,
  explanation,
  completion,
  indicator,
  setCompletion,
}: ListItemProps) => {
  const checked: boolean = completion[id];

  return (
    <div>
      {indicator ? <p>{checked ? "Complete" : "Incomplete"}</p> : <div></div>}
      <div
        className={
          checked
            ? `flex items-center ps-4 border border-gray-200 rounded-sm dark:border-gray-700 bg-green-300`
            : `flex items-center ps-4 border border-gray-200 rounded-sm dark:border-gray-700 bg-white`
        }
      >
        <input
          id="bordered-checkbox-1"
          type="checkbox"
          value=""
          name="bordered-checkbox"
          className={
            checked
              ? `appearance-none w-4 h-4 border-2 border-gray-300 rounded-sm bg-green-600`
              : `appearance-none w-4 h-4 border-2 border-gray-300 rounded-sm bg-white`
          }
          onChange={() =>
            setCompletion([
              ...completion.slice(0, id),
              !checked,
              ...completion.slice(id + 1),
            ])
          }
        />
        <div className="flex flex-col">
          <label
            htmlFor="bordered-checkbox-1"
            className="w-full py-4 ms-2 text-sm font-medium text-black"
          >
            {item}
            <p className="text-sm font-light text-gray-400">{explanation}</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
