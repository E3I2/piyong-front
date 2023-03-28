import React from "react";
import AdminTable from "./AdminTable";

const AdminMapping = ({ info, handleRemove, handleEdit }) => {
  return (
    <tbody>
      {info.map((item) => {
        return (
          <AdminTable
            key={item.id}
            item={item}
            handleRemove={handleRemove}
            handleEdit={handleEdit}
          />
        );
      })}
    </tbody>
  );
};

export default AdminMapping;
