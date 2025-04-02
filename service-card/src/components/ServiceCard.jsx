import React from "react";

const ServiceCard = ({ title, desc }) => (
  <div className="w-60 m-4 p-4 bg-blue-300 border rounded-lg shadow">
    <h2 className="font-bold text-lg">{title}</h2>
    <p className="text-gray-700 mt-2">{desc}</p>
  </div>
);

export default ServiceCard;
