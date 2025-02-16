import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlockMath, InlineMath } from "react-katex";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import CalculatorCAPM10Y from "./CalculatorCAPM10Y";
import CalculatorCAPM5Y from "./CalculatorCAPM5Y";
import fetchWrapper from "@/src/utils/Api";
import ErrorModal from "../ErrorModal";
import { getErrorMessage } from "@/src/utils/errorHandler";
const CalculatorCAPM = () => {
  const [resultData, setResultData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [activeTab, setActiveTab] = useState("5y"); // State to track the active tab

  const handleSubmit = async (data) => {
    const params = {
      ticker: data.ticker,
      ...(data.terminal_year_params && {
        terminal_year_params: data.terminal_year_params,
      }),
      ...(data.beta_params && { beta_params: data.beta_params }),
      ...(data.bvps_params && { bvps_params: data.bvps_params }),
      ...(data.roe_params && { roe_params: data.roe_params }),
      ...(data.decline_year_params && {
        decline_year_params: data.decline_year_params,
      }),
      ...(data.final_roe_params && { final_roe_params: data.final_roe_params }),
    };

    setIsLoading(true);
    try {
      const response = await fetchWrapper.postPrivate(
        "/fundamental/erm",
        params
      );

      console.log("response ", response);
      setResultData(response.data);

      setTimeout(() => {
        document.querySelector("html").style.scrollBehavior = "auto";
        window.scroll({ bottom: 0 });
        document.querySelector("html").style.scrollBehavior = "";
      }, 1000);

      return response;
    } catch (error) {
      setErrorMessage(getErrorMessage(error)); // Use the helper function
      setShowErrorModal(true);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <ErrorModal
        show={showErrorModal}
        handleClose={() => setShowErrorModal(false)}
        errorMessage={errorMessage}
      />
      <Card className="dark:bg-gray-600/70">
        <CardHeader>
          <CardDescription className="text-lg font-bold text-black dark:text-white">
            Model Penilaian Capital Asset Pricing Model (CAPM)
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-3 space-y-2 ">
          <p className="mb-2 text-sm text-base">
            Capital Asset Pricing Model (CAPM) adalah model yang digunakan untuk
            menentukan tingkat pengembalian yang diharapkan dari suatu investasi
            dengan mempertimbangkan risiko investasi tersebut relatif terhadap
            pasar secara keseluruhan. CAPM mengasumsikan bahwa investor perlu
            dikompensasi dalam dua cara: nilai waktu dari uang dan risiko. Nilai
            waktu dari uang diwakili oleh tingkat pengembalian bebas risiko, dan
            risiko diwakili oleh premi risiko yang didasarkan pada beta dari
            investasi tersebut.
          </p>
          <div className="text-base">
            Mengapa CAPM Baik untuk Industri Financial :
            <ol className="ml-5 text-sm list-decimal">
              <li className="mb-2">
                <span>
                  Industri Financial Tidak Memiliki Arus Kas Bebas (FCF)
                  Tradisional Model Discounted Cash Flow (DCF) tradisional
                  bergantung pada Arus Kas Bebas (FCF), yang sulit dihitung
                  untuk Industri Financial karena:{" "}
                </span>
                <ul className="ml-5 list-disc">
                  <li className="mb-1">
                    Industri Financial menghasilkan pendapatan dari pendapatan
                    bunga daripada penjualan produk.
                  </li>
                  <li className="mb-1">
                    Mereka memiliki persyaratan modal yang sangat diatur, yang
                    berarti penggunaan modal mereka berbeda dari industri lain.
                  </li>
                </ul>
              </li>
              <li className="mb-2">
                <span>
                  ROE dan Nilai Buku Lebih bermakna untuk Industri Financial
                </span>
                <ul className="ml-5 list-disc">
                  <li className="mb-1">
                    Industri Financial diharuskan untuk memegang modal regulasi
                    dan mengelola leverage dengan hati-hati.
                  </li>
                  <li className="mb-1">
                    Model ini bergantung pada Return on Equity (ROE) dan Nilai
                    Buku Ekuitas, yang merupakan indikator keuangan utama untuk
                    Industri Financial.
                  </li>
                </ul>
              </li>
              <li className="mb-2">
                <span>
                  Berfungsi Baik untuk Industri Financial yang Stabil dan
                  Menguntungkan
                </span>
                <ul className="ml-5 list-disc">
                  <li className="mb-1">
                    Jika sebuah Industri Financial secara konsisten menghasilkan
                    di atas Biaya Ekuitasnya (COE), model ini memberikan
                    penilaian yang andal. Banyak Industri Financial, seperti
                    BBCA, memiliki ROE tinggi dan pendapatan stabil,
                    menjadikannya kandidat ideal untuk model ini.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
          <p className="mb-4 text-sm text-base">
            Rumus untuk menghitung nilai wajar menggunakan CAPM adalah sebagai
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
              <strong>BVPS</strong>:{" "}
              <InlineMath math="Nilai\ Buku\ Per\ Saham" />
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

          <Tabs
            defaultValue="5y"
            className="w-full mt-4"
            onValueChange={(value) => {
              setActiveTab(value);
              setResultData(null);
            }} // Track active tab
          >
            <TabsList className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
              <TabsTrigger
                value="5y"
                className="border border-violet-300 lg:border-none"
              >
                Short Term (5Y)
              </TabsTrigger>
              <TabsTrigger
                value="10y"
                className="border border-violet-300 lg:border-none"
              >
                Long Term (10Y)
              </TabsTrigger>
              <TabsTrigger
                value="custom"
                className="border border-violet-300 lg:border-none"
              >
                Custom
              </TabsTrigger>
            </TabsList>

            <TabsContent value="5y">
              <CalculatorCAPM5Y
                handleApi={handleSubmit}
                isLoading={isLoading}
                resultData={resultData}
              />
            </TabsContent>
            <TabsContent value="10y">
              <CalculatorCAPM10Y
                handleApi={handleSubmit}
                isLoading={isLoading}
                resultData={resultData}
              />
            </TabsContent>
            <TabsContent value="custom">
              <p className="w-full my-5 text-center h-min-30">Comming Soon</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
};

export default CalculatorCAPM;
