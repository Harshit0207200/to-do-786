import React from "react";

export default function TaskTable({ tasks, onEdit, onDelete, onToggleComplete }) {
  return <div className="card border-0 shadow-sm">
    <div className="card-header bg-white py-3"><h5 className="mb-0">Task List</h5></div>
    <div className="card-body">
      <div className="table-responsive">
        <table className="table table-hover align-middle mb-0">
          <thead className="table-light"><tr>
            <th>Task</th><th>Description</th><th>Status</th><th>Actions</th>
          </tr></thead>
          <tbody>
            {tasks.length === 0 ? <tr><td colSpan="4" className="text-center text-muted py-4">No tasks found.</td></tr> :
              tasks.map(task => <tr key={task._id}>
                <td className={task.completed ? "completed-task" : ""}>{task.title}</td>
                <td>{task.description || "-"}</td>
                <td><span className={`badge ${task.completed ? "text-bg-success" : "text-bg-warning"}`}>
                  {task.completed ? "Completed" : "Pending"}</span></td>
                <td><div className="d-flex flex-wrap gap-1">
                  <button className="btn btn-sm btn-outline-primary" onClick={() => onEdit(task)}>Edit</button>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(task._id)}>Delete</button>
                  <button className="btn btn-sm btn-outline-success" onClick={() => onToggleComplete(task)}>
                    {task.completed ? "Undo" : "Complete"}
                  </button>
                </div></td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  </div>;
}
