import { useState } from "react";
import ListItem from "../components/ListItem";
import { TaskInterface } from "../interfaces/TaskInterface";

const TaskData: TaskInterface[] = [
  {
    id: 0,
    item: "Sweep the Kitchen",
    explanation: "Get under the cabinets, do a good job",
    status: false,
    indicator: true,
  },
  {
    id: 1,
    item: "Sweep the Kitchen",
    explanation: "Get under the cabinets, do a good job",
    status: true,
    indicator: true,
  },
];

function Task() {
  const [taskData, setTaskData] = useState(TaskData);

  return (
    <>
      <div className="p-4">
        <div className="text-3xl">Task</div>
        <div className="flex flex-col gap-4 mt-4">
          {TaskData.map((task: TaskInterface, idx) => {
            return (
              <ListItem
                {...task}
                idx={idx}
                taskListData={taskData}
                setTaskListData={setTaskData}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Task;
