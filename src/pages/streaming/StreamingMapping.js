import React from "react";
import StreamingTable from "./StreamingTable";

const StreamingMapping = ({ info }) => {
  return (
    <tbody>
      {info.map((item) => {
        return <StreamingTable key={item.create_at} item={item} />;
      })}
    </tbody>
  );
};

export default StreamingMapping;
