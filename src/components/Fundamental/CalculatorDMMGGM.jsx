import React from "react";
import { InlineMath, BlockMath } from "react-katex";

const CalculatorDMMGGM = () => {
  return (
    <div className="text-sm">
      <p className="text-lg font-bold">Gordon Growth Model (GGM)</p>
      <p className="text-muted-foreground">
        Gordon Growth Model (GGM) adalah metode penilaian saham yang
        mengasumsikan bahwa dividen akan tumbuh pada tingkat yang konstan
        selamanya. Model ini digunakan untuk menentukan nilai intrinsik saham
        berdasarkan dividen yang diharapkan di masa depan dan tingkat
        pertumbuhan dividen yang konstan.
      </p>
      <br />
      <pre
        id="code"
        className="col-span-1 p-4 overflow-x-auto text-gray-300 whitespace-pre bg-gray-800 rounded-md code"
      >
        <code>
          Rumus dasar GGM adalah:
          <br />
          <BlockMath math={"P = \\frac{D}{r - g}"} />
          <br />
          Di mana:
          <ul>
            <li>
              <InlineMath>P</InlineMath> = harga saham saat ini
            </li>
            <li>
              <InlineMath>D</InlineMath> = dividen per saham yang diharapkan
              tahun depan
            </li>
            <li>
              <InlineMath>r</InlineMath> = tingkat pengembalian yang diinginkan
            </li>
            <li>
              <InlineMath>g</InlineMath> = tingkat pertumbuhan dividen yang
              konstan
            </li>
          </ul>
        </code>
      </pre>
    </div>
  );
};

export default CalculatorDMMGGM;
