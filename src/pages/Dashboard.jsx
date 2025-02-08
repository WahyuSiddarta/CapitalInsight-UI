import React, { useState } from "react";

import { InlineMath, BlockMath } from "react-katex";

function Dashboard() {
  return (
    <div className="grid w-screen grid-cols-12 gap-6 text-2xl">
      <div className="w-screen overflow-x-auto">
        <pre
          id="code"
          className="p-4 overflow-x-auto text-gray-300 whitespace-pre bg-gray-800 rounded-md code"
        >
          <code>
            <span>Inline math: </span>
            <BlockMath>\int_0^\infty x^2 dx</BlockMath>
          </code>
        </pre>
        <BlockMath>\int_0^\infty x^2 dx</BlockMath>
      </div>
    </div>
  );
}

export default Dashboard;
