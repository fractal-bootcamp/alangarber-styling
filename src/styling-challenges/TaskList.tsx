import { useState } from "react";
import ListItem from "../components/ListItem";
import { TaskInterface } from "../interfaces/TaskInterface";

const TaskListData: TaskInterface[] = [
  {
    id: 0,
    item: "Dishwashing",
    explanation: "Wash and dry dishes, pots, pans, and utensils",
    initialStatus: true,
    indicator: false,
  },
  {
    id: 1,
    item: "Laundry",
    explanation: "Wash, dry, fold, and put away clothes and linens.",
    initialStatus: false,
    indicator: false,
  },
  {
    id: 2,
    item: "Vacuuming",
    explanation: "Vacuum carpets, rugs, and floors throughout the house",
    initialStatus: false,
    indicator: false,
  },
  {
    id: 3,
    item: "Dusting",
    explanation: "Dust furniture, shelves, and other surfaces",
    initialStatus: false,
    indicator: false,
  },
];

function TaskList() {
  const [completion, setCompletion] = useState(
    TaskListData.map((datum) => datum.initialStatus),
  );

  return (
    <>
      <div className="p-4">
        <div className="text-3xl">Task List</div>
        <div className="text-lg">Sorted by completion</div>
        <div className="flex flex-col gap-4 mt-4">
          {TaskListData.sort((a, b) =>
            completion[a.id] < completion[b.id] ? 1 : -1,
          ).map((datum: TaskInterface) => {
            return (
              <ListItem
                {...datum}
                completion={completion}
                setCompletion={setCompletion}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TaskList;
