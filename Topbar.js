import React from "react";

export default function Topbar({ activePage, search, setSearch, onAddTask }) {
  return <div className="topbar bg-white border-bottom p-3">
    <div>
      <h4 className="mb-0">{activePage}</h4>
      <small className="text-muted">Manage your daily tasks</small>
    </div>
    <div className="topbar-actions">
      <input className="form-control" type="search" placeholder="Search tasks..."
        value={search} onChange={e => setSearch(e.target.value)} aria-label="Search tasks" />
      <button className="btn btn-primary text-nowrap" onClick={onAddTask}>+ Add Task</button>
    </div>
  </div>;
}
