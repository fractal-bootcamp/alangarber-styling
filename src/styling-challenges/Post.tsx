import { useState } from "react";
import { Helena } from "../objects/users";
import PexelsBellow from "../assets/pexels_bellow.png"
import RectangularSpeechBubble from "../assets/rectangular-speech-bubbles.png";

function Post() {
    const [hearts, setHearts] = useState(21);

  return (
    <>
      <div className="p-4">
        <div className="text-3xl">Post</div>
        <div
        className={`flex items-center ps-4`}
      >
          <img src={Helena.image} alt={Helena.name} className="clip-circle w-1/16"></img>
        <div className="flex flex-col">
          <label
            className="w-full py-4 ms-2 text-sm text-gray-400"
          >
            <div className="flex gap-1"><div className="text-black">Helena </div> in Group name</div>
            <p className="text-sm font-light text-gray-400">3 min ago</p>
          </label>
        </div>
      </div>
      <div className="grid grid-cols-20 grid-4">
        <div className="col-span-1"></div>
        <div className="col-span-15 flex flex-col">
            <img src={PexelsBellow} alt="Pexels Bellow" className="-mx-40"></img>
            <div className="mx-8 p-2">Post description</div>
            <div className="mx-8 p-2"></div>
            <div
        className={`flex`}
      >
    <input
      className="peer relative appearance-none shrink-0 w-4 h-4 mt-1"
      type="checkbox"
      id="heart-checkbox"
      onClick={() => {if (hearts === 21) {setHearts(22)} else {setHearts(21)}}}
    />
    <svg
      className="w-4 h-3 ml-6 pointer-events-none stroke-black fill-none peer-checked:!fill-red-500 mt-1"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
          <label
            htmlFor="heart-checkbox"
            className="w-full ms-2 text-sm font-medium text-black flex"
          >
             {`${hearts} likes`}<img src={RectangularSpeechBubble} alt="Rectangular speech bubble" className="h-1/32 mx-2"></img>{`4 comments`}
          </label>
      </div>
            </div>
      </div>
      </div>
    </>
  );
}

export default Post;
