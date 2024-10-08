import React from "react";
import { Main } from "../Main/Main";
import Navbar from "../Navigation/Navbar";
import './AssignPage3.css';

const Assignment3 = () => {
  const obj = {
    id: "10002",
    name: "Eco-Friendly Water Bottle",
    description: "Stay hydrated with our durable, eco-friendly water bottle.",
    price: 14.99,
    currency: "USD",
    imageURL: "https://example.com/images/product-10002.jpg",
  };

 
  const list = (
    <table className="table">
      <thead>
        <tr className="table-header-row">
          <th className="table-header-row table-cell">Key</th>
          <th className="table-header-row table-cell">Value</th>
          <th className="table-header-row table-cell">Position</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(obj).map(([key, value], index) => (
          <tr key={key}>
            <td className="table-cell">{key}</td>
            <td className="table-cell">{value}</td>
            <td className="table-cell">{index}</td> {/* Use index as position */}
          </tr>
        ))}
      </tbody>
    </table>
  );

  // Return the entire structure with only <div>{list}</div>
  return (
    <div>
      <Navbar />
      <Main>
        <div>
          {list}
        </div>
      </Main>
    </div>
  );
};


export default Assignment3;