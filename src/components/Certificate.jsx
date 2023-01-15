import React, { useState } from "react";
import CardCertificate from "./ModalCertificate";
import data from "../database/dataCertificate";
import ModalCertificate from "./ModalCertificate";

const Certificate = () => {
  const [modal, setModal] = useState(false);
  const [tempdata, setTempdata] = useState([]);
  const getData = (img, title, desc) => {
    let tempData = [img, title, desc];
    setTempdata((item) => [1, ...tempData]);
    return setModal(true);
  };
  return (
    <div className="container m-[200px]">
      <section className="flex items-center justify-center gap-4">
        {data.map((item, index) => {
          return (
            <div
              className="max-w-sm gap-2 rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"
              key={index}
            >
              <img className="rounded-t-lg" src={item.imgSrc} alt="" />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {/* {item.title} */}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {/* {item.desc} */}
                </p>
                <button
                  className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => getData(item.imgSrc, item.title, item.desc)}
                >
                  Read more
                </button>
              </div>
            </div>
          );
        })}
      </section>
      {modal === true ? (
        <ModalCertificate
          img={tempdata[1]}
          title={tempdata[2]}
          desc={tempdata[3]}
          hide={() => setModal(false)}
        />
      ) : (
        null
      )}
    </div>
  );
};

export default Certificate;
