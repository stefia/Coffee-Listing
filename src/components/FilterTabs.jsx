import React from "react";

export default function FilterTabs({value, onChange}) {
    return (
        <div className="panel-btns">
            <button className={`panel-btn ${value === "all" ? "panel-btn--active" : ""}`} onClick={() => onChange("all")}>All products</button>
            <button className={`panel-btn ${value === "available" ? "panel-btn--active" : ""}`} onClick={() => onChange("available")}>Available Now</button>
        </div>
    )
}