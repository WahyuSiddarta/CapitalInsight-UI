import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlockMath, InlineMath } from "react-katex";

const CalculatorERM = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-xl">
      <h2 className="mb-4 text-xl font-semibold">
        Model Penilaian Residual Income Ekuitas
      </h2>
      <p className="mb-2 text-sm text-gray-600">
        Model Penilaian Residual Income Ekuitas (ERM) adalah metode yang
        digunakan untuk memperkirakan nilai intrinsik ekuitas perusahaan. Ini
        didasarkan pada premis bahwa nilai ekuitas perusahaan sama dengan nilai
        buku ekuitas ditambah nilai sekarang dari pendapatan residual masa
        depan. Pendapatan residual adalah pendapatan yang dihasilkan oleh
        perusahaan setelah memperhitungkan biaya modal. Metode ini baik
        digunakan untuk perusahaan di industri keuangan karena pendapatan
        residual dapat dihitung dengan mudah.
      </p>
      <div className="text-base text-gray-600">
        Mengapa Model Excess Return Baik untuk Bank :
        <ol className="ml-5 text-sm list-decimal">
          <li className="mb-2">
            <span>
              Bank Tidak Memiliki Arus Kas Bebas (FCF) Tradisional Model
              Discounted Cash Flow (DCF) tradisional bergantung pada Arus Kas
              Bebas (FCF), yang sulit dihitung untuk bank karena:{" "}
            </span>
            <ul className="ml-5 list-disc">
              <li className="mb-1">
                Bank menghasilkan pendapatan dari pendapatan bunga daripada
                penjualan produk.
              </li>
              <li className="mb-1">
                Mereka memiliki persyaratan modal yang sangat diatur, yang
                berarti penggunaan modal mereka berbeda dari industri lain.
              </li>
            </ul>
          </li>
          <li className="mb-2">
            <span>ROE dan Nilai Buku Lebih Bermakna untuk Bank</span>
            <ul className="ml-5 list-disc">
              <li className="mb-1">
                Bank diharuskan untuk memegang modal regulasi dan mengelola
                leverage dengan hati-hati.
              </li>
              <li className="mb-1">
                Model ini bergantung pada Return on Equity (ROE) dan Nilai Buku
                Ekuitas, yang merupakan indikator keuangan utama untuk bank.
              </li>
            </ul>
          </li>
          <li className="mb-2">
            <span>Berfungsi Baik untuk Bank yang Stabil dan Menguntungkan</span>
            <ul className="ml-5 list-disc">
              <li className="mb-1">
                Jika sebuah bank secara konsisten menghasilkan di atas Biaya
                Ekuitasnya (COE), model ini memberikan penilaian yang andal.
                Banyak bank, seperti BBCA, memiliki ROE tinggi dan pendapatan
                stabil, menjadikannya kandidat ideal untuk model ini.
              </li>
            </ul>
          </li>
        </ol>
      </div>
      <p className="mb-4 text-sm text-gray-600">
        Rumus untuk menghitung nilai wajar menggunakan ERM adalah sebagai
        berikut:
      </p>
      <div
        id="code"
        className="col-span-1 p-4 overflow-x-auto text-gray-300 whitespace-pre bg-gray-800 rounded-md code"
      >
        <h2 className="mb-4 text-xl font-bold">Perhitungan Nilai Wajar</h2>
        <BlockMath
          math={String.raw`Nilai\ Wajar = BVPS + \sum_{t=1}^{N} \frac{Excess\ Return_t}{(1 + r)^t}`}
        />
        <p className="mt-2 text-sm">Dimana:</p>
        <p className="mt-2 text-sm">
          <strong>BVPS</strong>: <InlineMath math="Nilai\ Buku\ Per\ Saham" />
        </p>
        <p className="mt-2 text-sm">
          <strong>Excess Return</strong>:{" "}
          <InlineMath math="(ROE - r) \times BVPS" />
        </p>
        <p className="mt-2 text-sm">
          <strong>r</strong>:{" "}
          <InlineMath math="Tingkat\ Pengembalian\ yang\ Diharapkan" />
        </p>
        <p className="mt-2 text-sm">
          <strong>N</strong>: <InlineMath math="Jumlah\ Tahun" />
        </p>
      </div>

      <Tabs defaultValue="stable" className="w-full mt-4">
        <TabsList className="grid w-full grid-cols-1 gap-2 md:grid-cols-2">
          <TabsTrigger
            value="stable"
            className="border border-violet-300 lg:border-none"
          >
            Stable Growth
          </TabsTrigger>
          <TabsTrigger
            value="Multi-Stage"
            className="border border-violet-300 lg:border-none"
          >
            Multi-Stage Growth
          </TabsTrigger>
        </TabsList>
        <TabsContent value="stable">
          <div className="text-sm">
            <p>Asumsi pertumbuhan ROE konstant ( 5 tahun ) :</p>
          </div>
        </TabsContent>
        <TabsContent value="Multi-Stage">
          <div className="text-sm">
            <p>
              Asumsi pertumbuhan ROE sudah mencapai puncak, kemudain menurun
              secara perlahan sampai mencapai ROE konstant (10 tahun):
            </p>
          </div>
        </TabsContent>
      </Tabs>
      <div className="grid grid-cols-1 gap-8 space-y-1 xl:grid-cols-2"></div>
    </div>
  );
};

export default CalculatorERM;
