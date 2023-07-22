import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import WarehouseDetailsView from "./WarehouseDetailsView";
import WarehouseDetailsEdit from "./WarehouseDetailsEdit";

const WarehouseDetails = () => {
  const { id } = useParams();
  const warehouseId = parseInt(id);

  const [data, setData] = useState([]);
  const [warehouse, setWarehouse] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedWarehouse, setEditedWarehouse] = useState(null);

  // Fetch data (similar to componentDidMount)
  useEffect(() => {
    // Simulating data fetch (replace this with actual API call or Redux)
    fetch("path/to/warehouse.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Set the selected warehouse when data is fetched
  useEffect(() => {
    if (data.length > 0) {
      const selectedWarehouse = data.find(
        (warehouse) => warehouse.id === warehouseId
      );
      setWarehouse(selectedWarehouse);
      setEditedWarehouse(selectedWarehouse);
    }
  }, [data, warehouseId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedWarehouse((prevWarehouse) => ({
      ...prevWarehouse,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    const updatedData = data.map((item) =>
      item.id === warehouseId ? { ...editedWarehouse } : item
    );
    setData(updatedData);
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditedWarehouse(warehouse);
    setEditMode(false);
  };

  const handleGoBack = () => {
    // You can use a Link component to navigate back
    // For example, if you want to go back to the previous page:
    // window.history.back();
  };

  if (!warehouse) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {editMode ? (
        <WarehouseDetailsEdit
          editedWarehouse={editedWarehouse}
          onInputChange={handleInputChange}
          onSave={handleSaveChanges}
          onCancel={handleCancel}
        />
      ) : (
        <WarehouseDetailsView
          warehouse={warehouse}
          onEdit={() => setEditMode(true)}
          onGoBack={handleGoBack}
        />
      )}
    </div>
  );
};

export default WarehouseDetails;
