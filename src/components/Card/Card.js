import React from "react";

const Card = (props) => {
  const { img, name, duration, details } = props.data;
  return (
    <div className="border border-green-400 rounded-lg ">
      <img
        className="object-cover rounded-xl h-48 w-96 mb-2"
        src={img}
        alt="hello"
      />
      <h1 className="mb-4 text-2xl font-bold">{name}</h1>
      <h1 className="m-4">{duration} min</h1>
      <p className="m-4">{details}</p>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Add to list
      </button>
    </div>
  );
};

export default Card;
