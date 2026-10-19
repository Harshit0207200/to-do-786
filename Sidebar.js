import React from "react";

const items = ["Dashboard", "All Tasks", "Pending Tasks", "Completed Tasks"];

export default function Sidebar({ activePage, setActivePage }) {
  return <aside className="sidebar bg-dark text-white p-3">
    <h6 className="text-uppercase text-secondary mb-3">Menu</h6>
    <div className="sidebar-items">
      {items.map(item => <button key={item}
        className={`btn text-start ${activePage === item ? "btn-primary" : "btn-outline-light"}`}
        onClick={() => setActivePage(item)}>{item}</button>)}
    </div>
  </aside>;
}
