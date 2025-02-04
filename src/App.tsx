import { useState } from "react";
import Task from "./styling-challenges/Task";

function App() {
  const [checked, setChecked] = useState("Task");

  return (
    <>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2" onClick={() => setChecked("Task")}>
            {checked !== "Task" ? (
              <a
                href="#"
                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >
                Task
              </a>
            ) : (
              <a
                href="#"
                className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                aria-current="page"
              >
                Task
              </a>
            )}
          </li>
          <li className="me-2" onClick={() => setChecked("Task List")}>
            {checked !== "Task List" ? (
              <a
                href="#"
                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >
                Task List
              </a>
            ) : (
              <a
                href="#"
                className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                aria-current="page"
              >
                Task List
              </a>
            )}
          </li>
          <li className="me-2" onClick={() => setChecked("Message Thread")}>
            {checked !== "Message Thread" ? (
              <a
                href="#"
                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >
                Message Thread
              </a>
            ) : (
              <a
                href="#"
                className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                aria-current="page"
              >
                Message Thread
              </a>
            )}
          </li>
          <li className="me-2" onClick={() => setChecked("Post")}>
            {checked !== "Post" ? (
              <a
                href="#"
                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >
                Post
              </a>
            ) : (
              <a
                href="#"
                className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                aria-current="page"
              >
                Post
              </a>
            )}
          </li>
          <li className="me-2" onClick={() => setChecked("Heat Grid")}>
            {checked !== "Heat Grid" ? (
              <a
                href="#"
                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >
                Heat Grid
              </a>
            ) : (
              <a
                href="#"
                className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                aria-current="page"
              >
                Heat Grid
              </a>
            )}
          </li>
          <li className="me-2" onClick={() => setChecked("Tab Descriptor")}>
            {checked !== "Tab Descriptor" ? (
              <a
                href="#"
                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >
                Tab Descriptor
              </a>
            ) : (
              <a
                href="#"
                className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                aria-current="page"
              >
                Tab Descriptor
              </a>
            )}
          </li>
        </ul>
      </div>
      {checked === "Task" && <Task />}
    </>
  );
}

export default App;
