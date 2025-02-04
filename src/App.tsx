import { useState } from "react";
import Task from "./styling-challenges/Task";
import TaskList from "./styling-challenges/TaskList";
import MessageThread from "./styling-challenges/MessageThread";
import Post from "./styling-challenges/Post";

function App() {
  const [tab, setTab] = useState("Task");

  return (
    <>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-100 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2" onClick={() => setTab("Task")}>
            {tab !== "Task" ? (
              <a className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-100 dark:hover:text-gray-100">
                Task
              </a>
            ) : (
              <a
                className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                aria-current="page"
              >
                Task
              </a>
            )}
          </li>
          <li className="me-2" onClick={() => setTab("Task List")}>
            {tab !== "Task List" ? (
              <a className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-100 dark:hover:text-gray-100">
                Task List
              </a>
            ) : (
              <a
                className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                aria-current="page"
              >
                Task List
              </a>
            )}
          </li>
          <li className="me-2" onClick={() => setTab("Message Thread")}>
            {tab !== "Message Thread" ? (
              <a className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-100 dark:hover:text-gray-100">
                Message Thread
              </a>
            ) : (
              <a
                className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                aria-current="page"
              >
                Message Thread
              </a>
            )}
          </li>
          <li className="me-2" onClick={() => setTab("Post")}>
            {tab !== "Post" ? (
              <a className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-100 dark:hover:text-gray-100">
                Post
              </a>
            ) : (
              <a
                className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                aria-current="page"
              >
                Post
              </a>
            )}
          </li>
          <li className="me-2" onClick={() => setTab("Heat Grid")}>
            {tab !== "Heat Grid" ? (
              <a className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-100 dark:hover:text-gray-100">
                Heat Grid
              </a>
            ) : (
              <a
                className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                aria-current="page"
              >
                Heat Grid
              </a>
            )}
          </li>
          <li className="me-2" onClick={() => setTab("Tab Descriptor")}>
            {tab !== "Tab Descriptor" ? (
              <a className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-100 dark:hover:text-gray-100">
                Tab Descriptor
              </a>
            ) : (
              <a
                className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                aria-current="page"
              >
                Tab Descriptor
              </a>
            )}
          </li>
        </ul>
      </div>
      {tab === "Task" && <Task />}
      {tab === "Task List" && <TaskList />}
      {tab === "Message Thread" && <MessageThread />}
      {tab === "Post" && <Post />}
    </>
  );
}

export default App;
