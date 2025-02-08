import React from "react";
import { InlineMath, BlockMath } from "react-katex";

const CalculatorDMMH = () => {
  return (
    <div className="text-sm">
      <p className="text-lg font-bold">H-Model</p>
      <p className="text-muted-foreground">
        H-Model adalah metode penilaian saham yang menggabungkan dua tahap
        pertumbuhan dividen: tahap pertumbuhan tinggi awal yang menurun secara
        linear ke tingkat pertumbuhan stabil jangka panjang. Model ini digunakan
        untuk menentukan nilai intrinsik saham berdasarkan dividen yang
        diharapkan di masa depan dan tingkat pertumbuhan dividen yang
        bervariasi.
      </p>
      <br />
      <pre
        id="code"
        className="col-span-1 p-4 overflow-x-auto text-gray-300 whitespace-pre bg-gray-800 rounded-md code"
      >
        <code>
          Rumus dasar H-Model adalah:
          <br />
          <BlockMath
            math={"P = \\frac{D_0 (1 + g_L) + D_0 H (g_S - g_L)}{r - g_L}"}
          />
          <br />
          Di mana:
          <ul>
            <li>
              <InlineMath>P</InlineMath> = harga saham saat ini
            </li>
            <li>
              <InlineMath>D_0</InlineMath> = dividen per saham saat ini
            </li>
            <li>
              <InlineMath>g_L</InlineMath> = tingkat pertumbuhan dividen jangka
              panjang yang stabil
            </li>
            <li>
              <InlineMath>g_S</InlineMath> = tingkat pertumbuhan dividen jangka
              pendek yang tinggi
            </li>
            <li>
              <InlineMath>H</InlineMath> = setengah dari periode pertumbuhan
              tinggi
            </li>
            <li>
              <InlineMath>r</InlineMath> = tingkat pengembalian yang diinginkan
            </li>
          </ul>
        </code>
      </pre>
    </div>
  );
};

export default CalculatorDMMH;
