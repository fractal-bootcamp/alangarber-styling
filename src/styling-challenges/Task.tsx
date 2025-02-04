import ListItem from "../components/ListItem";

interface Task {
  id: number,
  item: string,
  explanation: string,
  initialStatus: boolean
}

const TaskData: Task[] = [
  {
    id: 0,
    item: "Sweep the Kitchen",
    explanation: "Get under the cabinets, do a good job",
    initialStatus: false,
  },
  {
    id: 1,
    item: "Sweep the Kitchen",
    explanation: "Get under the cabinets, do a good job",
    initialStatus: true,
  },
];

function Task() {
  return (
    <>
      <div className="p-4">
        <div className="text-3xl">Task</div>
        <div className="flex flex-col gap-4 mt-4">
          {TaskData.map((datum: Task) => {
            return (
              <ListItem {...datum} initialCheckedStatus={datum.initialStatus} />
            )
          })}
        </div>
      </div>
    </>
  );
}

export default Task;
