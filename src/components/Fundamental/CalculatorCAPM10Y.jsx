import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SelectSahamGroup } from "../SelectSahamGroup";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import Tooltip from "../Tooltip";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChartCandlestick } from "lucide-react";
const schema = yup
  .object({
    ticker: yup.string().required("Ticker is required and must be a string"),
    decline_year_params: yup
      .number()
      .min(0, "Decline Year must be between 0 and 10")
      .max(10, "Decline Year must be between 0 and 10")
      .nullable()
      .transform((value, originalValue) =>
        originalValue === "" ? null : value
      ),
    final_roe_params: yup.string().nullable(),
  })
  .required();

const CalculatorCAPM10Y = ({ handleApi, isLoading, resultData }) => {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    handleApi({
      ticker: data.ticker,
      terminal_year_params: 10,
      decline_year_params: data.decline_year_params,
      final_roe_params: data.final_roe_params,
    });
  };
  const sellingPrice =
    resultData.fairValue + resultData.fairValue * resultData.costOfEquity;
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-4">
          <div className="col-span-1 text-sm">
            <p className="text-lg font-bold text-black dark:text-white">
              Asumsi pertumbuhan ROE selama 10 tahun
            </p>
          </div>
          <div className="grid grid-cols-1 col-span-1 gap-3 text-sm md:grid-cols-2">
            <div className="flex flex-col col-span-1 gap-2 md:col-span-2">
              <Label htmlFor="ticker">Kode Saham</Label>
              <SelectSahamGroup name="ticker" />
              {methods.formState.errors.ticker && (
                <ErrorMessage
                  message={methods.formState.errors.ticker.message}
                />
              )}
            </div>
            <div className="flex flex-col col-span-1 gap-2">
              <Label
                htmlFor="decline_year_params"
                className="flex items-center gap-3"
              >
                Decline Year (Optional)
                <Tooltip size="lg" position={"right"}>
                  <p className="text-xs">
                    Tahun ROE mulai menurun, jika tidak ingin memakai asumsi
                    ini, isi dengan 10
                  </p>
                </Tooltip>
              </Label>
              <Input
                id="decline_year_params"
                type="number"
                {...methods.register("decline_year_params")}
              />
              {methods.formState.errors.decline_year_params && (
                <ErrorMessage
                  message={methods.formState.errors.decline_year_params.message}
                />
              )}
            </div>
            <div className="flex flex-col col-span-1 gap-2">
              <Label
                htmlFor="final_roe_params"
                className="flex items-center gap-3"
              >
                Final ROE (Optional)
                <Tooltip size="lg" position={"right"}>
                  <p className="text-xs">
                    Tingkat ROE yang diharapkan pada decline year
                  </p>
                </Tooltip>
              </Label>
              <Input
                id="final_roe_params"
                type="string"
                {...methods.register("final_roe_params")}
                prepend={
                  <span className="flex items-center justify-center w-full h-full text-sm">
                    %
                  </span>
                }
              />
              {methods.formState.errors.final_roe_params && (
                <ErrorMessage
                  message={methods.formState.errors.final_roe_params.message}
                />
              )}
            </div>
          </div>
        </div>
        <Button type="submit" className="w-full mt-4" loading={isLoading}>
          Submit
        </Button>
      </form>

      {!isLoading && !!resultData && resultData?.fairValue != 0 && (
        <Card className="mt-4 dark:bg-gray-700">
          <CardHeader className="flex flex-row items-center gap-3 !pb-2 ">
            <p className="text-lg font-bold">Hasil Perhitungan</p>{" "}
            <ChartCandlestick />
          </CardHeader>
          <CardContent className="!pb-2">
            <div className="grid w-full grid-cols-1 gap-5 mt-4 text-sm min-h-30 md:grid-cols-2">
              <div className="col-span-1">
                <p className="font-serif text-sm">Nilai Wajar : </p>
                <p className="text-lg font-bold">
                  {resultData.fairValue.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
              <div className="col-span-1">
                <p className="font-serif text-sm"> Cost Of Equity : </p>
                <p className="text-lg font-bold">
                  {resultData.costOfEquity.toLocaleString("id-ID", {
                    style: "percent",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
              <div className="col-span-1">
                <p className="font-serif text-sm">
                  Recomended Selling price (nilai wajar + COE) :{" "}
                </p>
                <p className="text-lg font-bold">
                  {(
                    resultData.fairValue +
                    resultData.fairValue * resultData.costOfEquity
                  ).toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
              <div className="col-span-1 md:col-span-2">
                <div className="p-3 bg-gray-100 rounded-md dark:bg-gray-900">
                  {/* Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full table-auto dark:text-gray-300">
                      {/* Table header */}
                      <thead className="text-xs text-gray-400 uppercase dark:text-gray-500 bg-gray-50 dark:bg-gray-700/50 rounded-xs">
                        <tr>
                          <th className="p-2" colSpan={3}>
                            <div className="font-semibold text-center">
                              Margin Of Safety
                            </div>
                          </th>
                        </tr>
                        <tr>
                          <th className="p-2" colSpan={1}>
                            <div className="font-semibold text-center">
                              Percentage
                            </div>
                          </th>
                          <th className="p-2" colSpan={1}>
                            <div className="font-semibold text-center">
                              Sell Price
                            </div>
                          </th>
                          <th className="p-2" colSpan={1}>
                            <div className="font-semibold text-center">
                              Mos + CoE
                            </div>
                          </th>
                        </tr>
                      </thead>
                      {/* Table body */}
                      <tbody className="text-sm font-medium bg-white divide-y divide-gray-100 dark:divide-gray-700/60 dark:bg-gray-800">
                        {/* Row */}
                        <tr>
                          <td className="p-2">
                            <div className="text-center">10%</div>
                          </td>

                          <td className="p-2">
                            <div className="text-center">
                              {" "}
                              {(
                                Number(resultData.fairValue) * 0.9
                              ).toLocaleString("id-ID", {
                                style: "currency",
                                currency: "IDR",
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </div>
                          </td>
                          <td className="p-2">
                            <div className="text-center">
                              {" "}
                              {(sellingPrice * 0.9).toLocaleString("id-ID", {
                                style: "currency",
                                currency: "IDR",
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2">
                            <div className="text-center">20%</div>
                          </td>
                          <td className="p-2">
                            <div className="text-center">
                              {" "}
                              {(
                                Number(resultData.fairValue) * 0.8
                              ).toLocaleString("id-ID", {
                                style: "currency",
                                currency: "IDR",
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </div>
                          </td>
                          <td className="p-2">
                            <div className="text-center">
                              {" "}
                              {(sellingPrice * 0.8).toLocaleString("id-ID", {
                                style: "currency",
                                currency: "IDR",
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2">
                            <div className="text-center">30%</div>
                          </td>
                          <td className="p-2">
                            <div className="text-center">
                              {" "}
                              {(sellingPrice * 0.7).toLocaleString("id-ID", {
                                style: "currency",
                                currency: "IDR",
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </div>
                          </td>
                          <td className="p-2">
                            <div className="text-center">
                              {" "}
                              {(sellingPrice * 0.7).toLocaleString("id-ID", {
                                style: "currency",
                                currency: "IDR",
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2">
                            <div className="text-center">40%</div>
                          </td>
                          <td className="p-2">
                            <div className="text-center">
                              {" "}
                              {(
                                Number(resultData.fairValue) * 0.6
                              ).toLocaleString("id-ID", {
                                style: "currency",
                                currency: "IDR",
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </div>
                          </td>
                          <td className="p-2">
                            <div className="text-center">
                              {" "}
                              {(sellingPrice * 0.6).toLocaleString("id-ID", {
                                style: "currency",
                                currency: "IDR",
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="col-span-1 p-4 my-2 font-serif bg-yellow-200 border border-yellow-400 rounded-md md:col-span-2 dark:bg-gray-700">
                <p className="text-lg font-bold text-brown-500 dark:text-yellow-400">
                  Important
                </p>
                <ol className="flex flex-col gap-2 text-sm italic list-decimal list-inside">
                  <li>
                    Nilai wajar adalah hasil perhitungan berdasarkan asumsi yang
                    digunakan, dalam hal ini adalah perhitungan Equity dengan
                    asumsi nilai perusahaan dalam 10 tahun ke depan, dengan
                    pertumbuhan ROE sesuai inputan.
                  </li>
                  <li>
                    Nilai wajar tidak sama dengan nilai saat ini, tidak ada
                    jaminan harga saat ini akan mencapai nilai wajar.
                  </li>
                  <li>
                    Nilai wajar tidak sama dengan nilai saat ini, tidak ada
                    jaminan harga saat ini akan mencapai nilai wajar.
                  </li>
                  <li>
                    Angka perhitungan yang kami pakai adalah angka yang
                    dibulatkan, hal ini dapat menyebabkan inakurasi
                  </li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </FormProvider>
  );
};

export default CalculatorCAPM10Y;
