import React, { useEffect, useState } from "react";
import Toast from "../Toast/Toast";

const Body = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("fakedb.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  const handleBreakTen = () => {
    const breakTime = document.getElementById("break-time");
    breakTime.value = "";
    breakTime.value = "10";
  };
  const handleBreakTwenty = () => {
    const breakTime = document.getElementById("break-time");
    breakTime.innerHTML = "";
    breakTime.value = "";
    breakTime.value = "20";
  };
  const handleBreakThirty = () => {
    const breakTime = document.getElementById("break-time");
    breakTime.innerHTML = "";
    breakTime.value = "";
    breakTime.value = "30";
  };
  const handleBreakForty = () => {
    const breakTime = document.getElementById("break-time");
    breakTime.innerHTML = "";
    breakTime.value = "";
    breakTime.value = "40";
  };
  const handleBreakFifty = () => {
    const breakTime = document.getElementById("break-time");
    breakTime.innerHTML = "";
    breakTime.value = "";
    breakTime.value = "50";
  };

  const [list, setList] = useState([]);
  const handleAddToList = (Li) => {
    const newList = [...list, Li];
    setList(newList);
    console.log(newList);
    let totalTime = 0;

    for (const lis of newList) {
      totalTime = totalTime + lis.duration;
      console.log(totalTime);
      document.getElementById("exercise-time").value = totalTime;
    }
  };

  return (
    <>
      <div className="grid grid-cols-12 ">
        <div className="col-span-12 md:col-span-8  ">
          <h1 className="text-2xl font-bold m-3">Today's Sports </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
            {datas.map((data) => (
              <div
                key={data.id}
                className="border border-green-400 rounded-lg "
              >
                <img
                  className="object-cover rounded-xl h-48 w-96 mb-2"
                  src={data.img}
                  alt="hello"
                ></img>
                <h1 className="mb-4 text-2xl font-bold">{data.name}</h1>
                <h1 className="data-duration border border-green-400 rounded-sm m-4">
                  {data.duration} min
                </h1>
                <p className="m-4">{data.details}</p>
                <button
                  onClick={() => handleAddToList(data)}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Add to list
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-12  md:col-span-4 ">
          <h1 className="text-2xl font-bold mb-6">Personal Info</h1>

          <div className="p-2 text-2xl font-bold mb-4">
            <img
              className="rounded-xl mb-4"
              src="https://pbs.twimg.com/media/FZqVpnbXgAA2Z1b.jpg"
              alt="tom"
            />
            <h1>Anik Kumer Dey</h1>
            <h2 className="text-xl">Majortila, Sylhet</h2>
          </div>

          <div className="flex justify-center mb-4  ">
            <h1 className="mr-2">
              Weight : <span className="font-bold"> 50kg</span>
            </h1>

            <h1 className="mr-2">
              Height : <span className="font-bold"> 5feet4inch</span>
            </h1>

            <h1>
              Age : <span className="font-bold"> 24years</span>
            </h1>
          </div>
          <div className=" p-2">
            <h1 className="text-xl mb-2 ">Add a break</h1>
            <div className="flex justify-evenly mb-3 border border-green-400 p-2 rounded">
              <button
                onClick={handleBreakTen}
                className="border border-green-600 rounded bg-green-400 p-1"
              >
                10min
              </button>
              <button
                onClick={handleBreakTwenty}
                className="border border-green-600 rounded bg-green-400 p-1"
              >
                20min
              </button>
              <button
                onClick={handleBreakThirty}
                className="border border-green-600 rounded bg-green-400 p-1"
              >
                30min
              </button>
              <button
                onClick={handleBreakForty}
                className="border border-green-600 rounded bg-green-400 p-1"
              >
                40min
              </button>
              <button
                onClick={handleBreakFifty}
                className="border border-green-600 rounded bg-green-400 p-1"
              >
                50min
              </button>
            </div>
          </div>
          <div className="mb-6">
            <h1 className="text-xl p-2">Exercise details</h1>
            <div>
              <h1 className="text-lg font-bold">Exercise time:</h1>
              <input
                id="exercise-time"
                type="text"
                className=" text-center border border-black"
              />
              <span className="text-xl font-semibold">min</span>
            </div>
            <div>
              <h1 className="text-lg font-bold">Break time:</h1>
              <input
                id="break-time"
                type="text"
                className="text-center border border-black"
              />
              <span className="text-xl font-semibold">min</span>
            </div>
          </div>
          <div>
            <Toast></Toast>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
