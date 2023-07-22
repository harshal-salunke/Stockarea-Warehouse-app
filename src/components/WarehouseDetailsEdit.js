import React from "react";

const WarehouseDetailsEdit = ({
  editedWarehouse,
  onInputChange,
  onSave,
  onCancel,
}) => {
  const {
    name,
    code,
    city,
    space_available,
    type,
    cluster,
    is_registered,
    is_live,
  } = editedWarehouse;

  return (
    <div>
      <h1>Edit Warehouse Details</h1>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={onInputChange} />
      </label>
      <label>
        Code:
        <input type="text" name="code" value={code} onChange={onInputChange} />
      </label>
      <label>
        City:
        <input type="text" name="city" value={city} onChange={onInputChange} />
      </label>
      <label>
        Space Available:
        <input
          type="number"
          name="space_available"
          value={space_available}
          onChange={onInputChange}
        />
      </label>
      <label>
        Type:
        <input type="text" name="type" value={type} onChange={onInputChange} />
      </label>
      <label>
        Cluster:
        <input
          type="text"
          name="cluster"
          value={cluster}
          onChange={onInputChange}
        />
      </label>
      <label>
        Registered:
        <input
          type="checkbox"
          name="is_registered"
          checked={is_registered}
          onChange={onInputChange}
        />
      </label>
      <label>
        Live:
        <input
          type="checkbox"
          name="is_live"
          checked={is_live}
          onChange={onInputChange}
        />
      </label>
      <button onClick={onSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default WarehouseDetailsEdit;
