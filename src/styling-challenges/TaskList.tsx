import { useState } from "react";
import ListItem from "../components/ListItem";
import { TaskInterface } from "../interfaces/TaskInterface";

const TaskListData: TaskInterface[] = [
  {
    id: 200,
    item: "Dishwashing",
    explanation: "Wash and dry dishes, pots, pans, and utensils",
    status: true,
    indicator: false,
  },
  {
    id: 201,
    item: "Laundry",
    explanation: "Wash, dry, fold, and put away clothes and linens.",
    status: false,
    indicator: false,
  },
  {
    id: 202,
    item: "Vacuuming",
    explanation: "Vacuum carpets, rugs, and floors throughout the house",
    status: false,
    indicator: false,
  },
  {
    id: 203,
    item: "Dusting",
    explanation: "Dust furniture, shelves, and other surfaces",
    status: false,
    indicator: false,
  },
];

function TaskList() {
  const [taskListData, setTaskListData] = useState(TaskListData);

  return (
    <>
      <div className="p-4">
        <div className="text-3xl">Task List</div>
        <div className="text-lg">Sorted by completion</div>
        <div className="flex flex-col gap-4 mt-4">
          {taskListData
            .sort((a, b) => (a.status < b.status ? 1 : -1))
            .map((task: TaskInterface, idx) => {
              return (
                <ListItem
                  {...task}
                  idx={idx}
                  taskListData={taskListData}
                  setTaskListData={setTaskListData}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default TaskList;
