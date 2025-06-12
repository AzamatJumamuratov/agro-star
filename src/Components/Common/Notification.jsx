import { useEffect, useRef, useState } from "react";

const Notification = ({ result, durationSeconds, innerText }) => {
  const [doneShowing, SetDoneShowing] = useState(true);
  useEffect(() => {
    SetDoneShowing(false);
    let id = setTimeout(() => {
      SetDoneShowing(true);
    }, durationSeconds);
    return () => {
      clearTimeout(id);
    };
  }, [result]);
  return (
    <>
      {
        <div
          className={`${
            result && !doneShowing ? "top-14" : "-top-full"
          } bg-red-500 rounded-4xl fixed left-1/2 -translate-1/2 -top-full p-4 duration-1000 ease-in-out text-white z-40`}
        >
          {innerText}
        </div>
      }
    </>
  );
};

export default Notification;
