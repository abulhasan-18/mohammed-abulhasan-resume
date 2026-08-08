import React from "react";

export default function ResumeSection({ title, children }) {
  const childArray = React.Children.toArray(children);
  const firstChild = childArray[0];
  const restChildren = childArray.slice(1);

  return (
    <section className="mb-6">
      <div style={{ pageBreakInside: "avoid" }}>
        <h3 className="text-sm font-bold uppercase tracking-wide border-b border-black pb-0.5 mb-4">
          {title}
        </h3>
        {firstChild}
      </div>
      {restChildren}
    </section>
  );
}