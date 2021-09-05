import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import * as RiIcons from "react-icons/ri";

export const RelatedApps = (props) => {
  const category = props.category;

  const [categoryApps, setcategoryApps] = useState([]);

  useEffect(() => {
    // window.scrollTo(0, 0);
    axios
      .get(`http://localhost:1111/api/apps/${category}`)
      .then((res) => {
        setcategoryApps(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [category]);

  return (
    <div className="mx-auto px-1 mt-4 h-full pb-10">
      <div className="grid gap-2 mb-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Map for each card from db*/}
        {categoryApps.map((app) => (
          <a href={`/app/${app._id}`}>
            <div
              key={app.id}
              className="flex items-center p-1 bg-white border-2 border-gray-200 rounded-lg shadow-sm md:h-24"
            >
              <div className="p-1 mr-1 text-white rounded-full">
                <img className="max-h-16 rounded-lg" src={app.Logo} alt="" />
              </div>
              <div className="">
                <h2 className="mb-1 my-auto text-xl font-medium text-gray-700 self-center">
                  {app.Name}
                </h2>
                <div className="flex space-x-2 text-xs font-normal text-gray-600">
                  <p className="text-xs font-medium">
                    {app.Size} MB <i className="far fa-save" />
                  </p>
                  <p className="text-xs font-medium">
                    {app.NumberOfDownloads} M{" "}
                    <i className="far fa-arrow-alt-circle-down" />
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
        {/* single card */}
      </div>
    </div>
  );
};

export default RelatedApps;
