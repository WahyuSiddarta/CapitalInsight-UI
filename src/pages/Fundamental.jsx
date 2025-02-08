import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import CalculatorThinkId from "../components/Fundamental/CalculatorThinkId";
import CalculatorDCF from "../components/Fundamental/CalculatorDCF";
import CalculatorDMM from "../components/Fundamental/CalculatorDMM";

function Fundamental() {
  return (
    <div className="grid grid-cols-12 gap-6 text-2xl">
      <div className="flex flex-col col-span-12 gap-2 px-4 py-0 bg-white rounded-sm dark:bg-gray-800">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="definition"
        >
          <AccordionItem value="definition">
            <AccordionTrigger>
              <h5 className="text-lg font-bold fonnt-bold">Definition</h5>
            </AccordionTrigger>
            <AccordionContent>
              <div>
                <p className="text-sm">
                  Fundamental analysis adalah sebuah analysis saham, dengan
                  pendekatan bisnis. Pengguna analisis fundamental percaya bahwa
                  sebuah saham memiliki nilai{" "}
                  <span className="italic font-bold">"wajar"</span>. Dengan
                  mengetahui nilai wajar tersebut, maka pengguna analisis
                  fundamental dapat mengetahui apakah saham tersebut sedang
                  overvalued atau undervalued. Hal ini membuat pengguna merasa
                  lebih yakin dalam membeli saham, karena mereka tahu bahwa
                  saham tersebut memiliki nilai wajar yang sesuai dengan harga
                  yang mereka bayarkan. Jika saham mereka overvalued, maka
                  mereka akan menjual saham tersebut. Jika saham mereka
                  undervalued, maka mereka akan membeli / tidak menjual saham
                  tersebut.
                </p>
                <p className="text-sm">
                  Inti dari analisis fundamental adalah menghitung harga wajar
                  saat ini dan / atau masa depan sebuah saham. Dikarenakan dalam
                  mata uang, uang saat ini {">"} lebih besar dari uang masa
                  depan, maka penilaian saham di masa depan harus dikurangi
                  dengan discount. Discount ini dinamakan discount rate, model
                  dari perhitungan nilai masa depan pada umumnya adalah nilai
                  masa depan dikurangi dengan discounted rate
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="variant">
            <AccordionTrigger>
              <h5 className="text-lg font-bold fonnt-bold">Variant</h5>
            </AccordionTrigger>
            <AccordionContent>
              <ol className="flex flex-col gap-2 list-decimal list-inside">
                <li>
                  <span className="text-base italic">Value Investing</span>
                  <p className="pl-4 text-sm">
                    Value investing adalah strategi investasi yang melibatkan
                    pemilihan saham yang tampaknya diperdagangkan dengan harga
                    lebih rendah dari nilai intrinsiknya. Investor yang
                    menggunakan strategi ini mencari saham yang mereka yakini
                    pasar telah undervalued. Mereka percaya bahwa harga saham
                    tersebut akan naik seiring waktu, sehingga memberikan
                    keuntungan. Strategi ini sering kali melibatkan analisis
                    mendalam terhadap laporan keuangan perusahaan, termasuk
                    pendapatan, laba, dividen, dan pertumbuhan masa depan.
                  </p>
                </li>
                <li>
                  <span className="text-base italic">Dividend Investing</span>
                  <p className="pl-4 text-sm">
                    Dividend investing adalah strategi investasi yang berfokus
                    pada pembelian saham dari perusahaan yang secara konsisten
                    membayar dividen. Investor yang menggunakan strategi ini
                    mencari perusahaan yang memiliki sejarah pembayaran dividen
                    yang stabil dan cenderung meningkat dari waktu ke waktu.
                    Tujuan utama dari dividend investing adalah untuk
                    menghasilkan pendapatan pasif yang stabil dari dividen yang
                    dibayarkan oleh perusahaan tersebut. Selain itu, saham-saham
                    yang membayar dividen sering kali dianggap lebih stabil dan
                    kurang berisiko dibandingkan dengan saham-saham yang tidak
                    membayar dividen.
                  </p>
                </li>
                <li>
                  <span className="text-base italic">Growth Investing</span>
                  <p className="pl-4 text-sm">
                    Growth investing adalah strategi investasi yang berfokus
                    pada pembelian saham dari perusahaan yang diharapkan
                    memiliki pertumbuhan pendapatan yang lebih tinggi
                    dibandingkan dengan rata-rata industri atau pasar secara
                    keseluruhan. Investor yang menggunakan strategi ini mencari
                    perusahaan yang menunjukkan potensi pertumbuhan yang kuat,
                    baik dari segi penjualan, laba, atau pangsa pasar. Mereka
                    percaya bahwa harga saham perusahaan tersebut akan meningkat
                    seiring dengan pertumbuhan kinerja perusahaan. Strategi ini
                    sering kali melibatkan investasi pada perusahaan teknologi
                    atau perusahaan yang berada dalam tahap ekspansi yang cepat.
                  </p>
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="col-span-12 p-4 bg-white rounded-sm dark:bg-gray-800">
        <h5 className="mb-2 font-bold">Calculator Saham</h5>
        <h6 className="mb-1 text-lg">Model</h6>
        <Tabs defaultValue="model" className="w-full">
          <TabsList className="grid w-full grid-cols-1 gap-2 lg:grid-cols-3 md:grid-cols-2">
            <TabsTrigger
              value="model"
              className="border border-violet-300 lg:border-none"
            >
              Our Model
            </TabsTrigger>
            <TabsTrigger
              value="dcf"
              className="border border-violet-300 lg:border-none"
            >
              Discounted Cash Flow (DCF)
            </TabsTrigger>
            <TabsTrigger
              value="dmm"
              className="border border-violet-300 lg:border-none"
            >
              Dividend Discount Model (DDM)
            </TabsTrigger>
          </TabsList>
          <TabsContent value="model">
            <CalculatorThinkId />
          </TabsContent>
          <TabsContent value="dcf">
            <CalculatorDCF />
          </TabsContent>
          <TabsContent value="dmm">
            <CalculatorDMM />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Fundamental;
