// src/components/WarehouseList.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/warehouses.json";

const WarehouseList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cityFilter, setCityFilter] = useState("all");
  const [clusterFilter, setClusterFilter] = useState("all");
  const [spaceLimit, setSpaceLimit] = useState("");

  const filteredWarehouses = data.filter((warehouse) => {
    if (
      searchTerm &&
      !warehouse.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }
    if (cityFilter !== "all" && warehouse.city !== cityFilter) {
      return false;
    }
    if (clusterFilter !== "all" && warehouse.cluster !== clusterFilter) {
      return false;
    }
    if (spaceLimit && warehouse.space_available > parseInt(spaceLimit)) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <h1>Warehouse List</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        value={cityFilter}
        onChange={(e) => setCityFilter(e.target.value)}
      >
        <option value="all">All Cities</option>
        {[...new Set(data.map((warehouse) => warehouse.city))].map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <select
        value={clusterFilter}
        onChange={(e) => setClusterFilter(e.target.value)}
      >
        <option value="all">All Clusters</option>
        {[...new Set(data.map((warehouse) => warehouse.cluster))].map(
          (cluster) => (
            <option key={cluster} value={cluster}>
              {cluster}
            </option>
          )
        )}
      </select>
      <input
        type="number"
        placeholder="Space available limit"
        value={spaceLimit}
        onChange={(e) => setSpaceLimit(e.target.value)}
      />
      <ul>
        {filteredWarehouses.map((warehouse) => (
          <li key={warehouse.id}>
            <Link to={`/warehouse/${warehouse.id}`}>{warehouse.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WarehouseList;
