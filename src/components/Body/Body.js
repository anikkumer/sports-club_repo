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
          <div className="text-2xl font-bold">
            <img
              className="rounded-xl mb-4"
              src="https://pbs.twimg.com/media/FZqVpnbXgAA2Z1b.jpg"
              alt="tom"
            />
            <h1>Anik Kumer Dey</h1>
            <h2>Majortila, Sylhet</h2>
          </div>
          <div>
            <h1>
              Weight :<span className="font-bold"> 50kg</span>
            </h1>
            <h1>
              Height :<span className="font-bold"> 5feet4inch</span>
            </h1>
            <h1>
              Age :<span className="font-bold"> 24years</span>
            </h1>
          </div>
          <div>
            <h1>Add a bread</h1>
            <div>
              <button>10s</button>
              <button>20s</button>
              <button>30s</button>
              <button>40s</button>
              <button>50s</button>
            </div>
          </div>
          <div>
            <h1>Exercise details</h1>
            <div>
              <h1>Exercise time:</h1>
              <input type="text" className="border border-black" />
            </div>
            <div>
              <h1>Break time:</h1>
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
