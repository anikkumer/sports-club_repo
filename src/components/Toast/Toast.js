import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  const handleToast = () => {
    toast("you have completed activity!!");
  };
  return (
    <>
      <div>
        <button
          onClick={handleToast}
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          {" "}
          Activity Complete
        </button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Toast;
