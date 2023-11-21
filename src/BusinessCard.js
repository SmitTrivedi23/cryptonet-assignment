import React from "react";

const BusinessCard = ({ data }) => {
  return (
    <div className="flex items-center justify-center p-4 rounded shadow-md bg-white">
      <div className="mr-4">
        <img src={data.picture.large} alt="Profile" className="w-32 h-32 rounded-full" />
      </div>

      <div>
        <div className="text-gray-700 font-bold text-xl mb-2">Name: {`${data.name.first} ${data.name.last}`}</div>
        <div className="text-gray-500 mb-2">Gender: {data.gender.charAt(0).toUpperCase()+data.gender.slice(1)}</div>
        <div className="text-gray-500">Phone: {data.phone}</div>
      </div>
    </div>
  );
};

export default BusinessCard;
