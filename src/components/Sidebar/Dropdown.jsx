import React from "react";
import { useState } from "react";

export function Dropdown() {
  const [value, setValue] = useState("trade");

  return (
    <div>
      <select
        value={value}
        onChange={(val) => setValue(val)}
        className="h-9 w-full p-1"
      >
        <option value="trade">Trade List</option>
        <option value="indices">Indices</option>
        <option value="options">Options</option>
      </select>
    </div>
  );
}
