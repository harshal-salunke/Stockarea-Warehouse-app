import React from "react";

const WarehouseDetailsView = ({ warehouse, onEdit, onGoBack }) => {
  const {
    name,
    code,
    city,
    space_available,
    type,
    cluster,
    is_registered,
    is_live,
  } = warehouse;

  return (
    <div>
      <h1>Warehouse Details</h1>
      <p>Name: {name}</p>
      <p>Code: {code}</p>
      <p>City: {city}</p>
      <p>Space Available: {space_available}</p>
      <p>Type: {type}</p>
      <p>Cluster: {cluster}</p>
      <p>Registered: {is_registered ? "Yes" : "No"}</p>
      <p>Live: {is_live ? "Yes" : "No"}</p>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onGoBack}>Go Back</button>
    </div>
  );
};

export default WarehouseDetailsView;
