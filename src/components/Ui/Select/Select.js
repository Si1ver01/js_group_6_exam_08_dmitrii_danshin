import React from "react";
import "./Select.scss";

const Select = ({value, handler, required , list }) => {
  return (
    <div className="Select">
      <span className="custom-dropdown ">
        <label>Категория:</label>
        <select onChange={handler} value={value} required={required}> 
          <option disabled>Chose category:</option>
          {list.map(elem => <option value={elem} key={elem}>{elem}</option>)}
        </select>
      </span>
    </div>
  );
};

export default Select;
