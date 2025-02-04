import { useState } from "react";
import ListItem from "../components/ListItem";
import { TaskInterface } from "../interfaces/TaskInterface";

const TaskData: TaskInterface[] = [
  {
    id: 0,
    item: "Sweep the Kitchen",
    explanation: "Get under the cabinets, do a good job",
    initialStatus: false,
    indicator: true,
  },
  {
    id: 1,
    item: "Sweep the Kitchen",
    explanation: "Get under the cabinets, do a good job",
    initialStatus: true,
    indicator: true,
  },
];

function Task() {
  const [completion, setCompletion] = useState(
    TaskData.map((datum) => datum.initialStatus),
  );

  return (
    <>
      <div className="p-4">
        <div className="text-3xl">Task</div>
        <div className="flex flex-col gap-4 mt-4">
          {TaskData.map((datum: TaskInterface) => {
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

export default Task;
