import React from "react";
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";

const CalculatorERM = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-xl">
      <h2 className="mb-4 text-xl font-semibold">
        Residual Income Valuation Model
      </h2>
      <div
        id="code"
        className="col-span-1 p-4 overflow-x-auto text-gray-300 whitespace-pre bg-gray-800 rounded-md code"
      >
        <h2 className="mb-4 text-xl font-bold">Fair Value Calculation</h2>
        <BlockMath
          math={String.raw`Fair\ Value = BVPS + \sum_{t=1}^{N} \frac{Excess\ Return_t}{(1 + r)^t}`}
        />
        <p className="mt-2 text-sm">Dimana:</p>
        <p className="mt-2 text-sm">
          <strong>BVPS</strong>: <InlineMath math="Book\ Value\ Per\ Share" />
        </p>
        <p className="mt-2 text-sm">
          <strong>Excess Return</strong>:{" "}
          <InlineMath math="(ROE - r) \times BVPS" />
        </p>
        <p className="mt-2 text-sm">
          <strong>r</strong>: <InlineMath math="Required\ Return" />
        </p>
        <p className="mt-2 text-sm">
          <strong>N</strong>: <InlineMath math="Number\ of\ Years" />
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 space-y-1 xl:grid-cols-2"></div>
    </div>
  );
};

export default CalculatorERM;
