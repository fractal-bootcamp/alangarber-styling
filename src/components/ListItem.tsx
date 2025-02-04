import { TaskInterface } from "../interfaces/TaskInterface";

interface ListItemProps {
  idx: number;
  item: string;
  explanation: string;
  indicator: boolean;
  taskListData: TaskInterface[];
  setTaskListData: React.Dispatch<React.SetStateAction<TaskInterface[]>>;
}

const ListItem = ({
  idx,
  item,
  explanation,
  indicator,
  taskListData,
  setTaskListData,
}: ListItemProps) => {
  const checked: boolean = taskListData[idx].status;

  return (
    <div>
      {indicator ? <p>{checked ? "Complete" : "Incomplete"}</p> : <div></div>}
      <div
        className={
          checked
            ? `flex items-center ps-4 border rounded-sm bg-green-300`
            : `flex items-center ps-4 border rounded-sm bg-white`
        }
      >
        <input
          id="bordered-checkbox-1"
          type="checkbox"
          value=""
          name="bordered-checkbox"
          className={
            checked
              ? `appearance-none w-4 h-4 border-2 border-gray-100 rounded-sm bg-green-600`
              : `appearance-none w-4 h-4 border-2 border-gray-100 rounded-sm bg-white`
          }
          onChange={() =>
            setTaskListData([
              ...taskListData.slice(0, idx),
              { ...taskListData[idx], status: !checked },
              ...taskListData.slice(idx + 1),
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
