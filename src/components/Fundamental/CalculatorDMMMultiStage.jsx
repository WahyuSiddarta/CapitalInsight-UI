import React from "react";
import { InlineMath, BlockMath } from "react-katex";

const CalculatorDMMMultiStage = () => {
  return (
    <div className="text-sm">
      <p className="text-lg font-bold"> Multi-Stage DMM</p>
      <p className="text-muted-foreground">
        Multi-Stage DMM adalah metode penilaian saham yang menggabungkan
        beberapa tahap pertumbuhan dividen: tahap pertumbuhan tinggi awal yang
        menurun secara bertahap ke tingkat pertumbuhan stabil jangka panjang.
        Model ini digunakan untuk menentukan nilai intrinsik saham berdasarkan
        dividen yang diharapkan di masa depan dan tingkat pertumbuhan dividen
        yang bervariasi.
      </p>
      <br />
      <pre
        id="code"
        className="col-span-1 p-4 overflow-x-auto text-gray-300 whitespace-pre bg-gray-800 rounded-md code"
      >
        <code>
          Rumus dasar Multi-Stage DMM adalah:
          <br />
          <BlockMath
            math={
              "P = \\sum_{t=1}^{n} \\frac{D_t}{(1 + r)^t} + \\frac{D_n (1 + g_L)}{(r - g_L)(1 + r)^n}"
            }
          />
          <br />
          Di mana:
          <ul>
            <li>
              <InlineMath>P</InlineMath> = harga saham saat ini
            </li>
            <li>
              <InlineMath>D_t</InlineMath> = dividen per saham pada tahun t
            </li>
            <li>
              <InlineMath>g_L</InlineMath> = tingkat pertumbuhan dividen jangka
              panjang yang stabil
            </li>
            <li>
              <InlineMath>r</InlineMath> = tingkat pengembalian yang diinginkan
            </li>
            <li>
              <InlineMath>n</InlineMath> = jumlah tahun dalam periode
              pertumbuhan tinggi
            </li>
          </ul>
        </code>
      </pre>
    </div>
  );
};

export default CalculatorDMMMultiStage;
