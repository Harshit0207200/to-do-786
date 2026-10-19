import React from "react";

export default function TaskCards({ tasks }) {
  const completed = tasks.filter(task => task.completed).length;
  const cards = [
    { label: "Total Tasks", value: tasks.length, color: "primary" },
    { label: "Pending Tasks", value: tasks.length - completed, color: "warning" },
    { label: "Completed Tasks", value: completed, color: "success" }
  ];
  return <div className="row g-3 mb-4">
    {cards.map(card => <div className="col-sm-6 col-xl-4" key={card.label}>
      <div className="card summary-card border-0 shadow-sm h-100">
        <div className="card-body">
          <p className="text-muted mb-2">{card.label}</p>
          <h2 className={`text-${card.color} mb-0`}>{card.value}</h2>
        </div>
      </div>
    </div>)}
  </div>;
}
