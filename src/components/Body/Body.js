import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Body = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("fakedb.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  console.log(datas);
  return (
    <>
      <div className="border-2 border-red-500 grid grid-cols-12 ">
        <div className="border-2 border-blue-500 col-span-8">
          <h1>Today's Sports </h1>
          <div className="grid grid-cols-3 gap-4 p-2">
            {datas.map((data) => (
              <Card key={data.id} data={data}></Card>
            ))}
          </div>
        </div>
        <div className="border-2 border-yellow-500 col-span-4">
          {/* picture */}
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
              <button className="border border-green-600 rounded bg-green-400 p-1">
                10s
              </button>
              <button className="border border-green-600 rounded bg-green-400 p-1">
                20s
              </button>
              <button className="border border-green-600 rounded bg-green-400 p-1">
                30s
              </button>
              <button className="border border-green-600 rounded bg-green-400 p-1">
                40s
              </button>
              <button className="border border-green-600 rounded bg-green-400 p-1">
                50s
              </button>
            </div>
          </div>
          <div className="mb-6">
            <h1 className="text-xl p-2">Exercise details</h1>
            <div>
              <h1 className="text-lg font-bold">Exercise time:</h1>
              <input type="text" className="border border-black" />
            </div>
            <div>
              <h1 className="text-lg font-bold">Break time:</h1>
              <input type="text" className="border border-black" />
            </div>
          </div>
          <div>
            <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              {" "}
              Activity Complete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
