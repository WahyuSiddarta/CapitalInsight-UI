import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SelectSahamGroup } from "../SelectSahamGroup";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChartCandlestick } from "lucide-react";
import { Input } from "@/components/ui/input"; // Import your custom Input component

const schema = yup
  .object({
    ticker: yup.string().required("Ticker is required and must be a string"),
    terminal_year_params: yup.number().required("Terminal year is required"),
    beta_params: yup
      .number()
      .nullable()
      .transform((value, originalValue) =>
        originalValue === "" ? null : value
      ), // beta as number
    bvps_params: yup
      .number()
      .nullable()
      .transform((value, originalValue) =>
        originalValue === "" ? null : value
      ),
    roe_params: yup
      .number()
      .nullable()
      .transform((value, originalValue) =>
        originalValue === "" ? null : value
      ), // roe as number
    decline_year_params: yup
      .number()
      .nullable()
      .transform((value, originalValue) =>
        originalValue === "" ? null : value
      ),
    final_roe_params: yup
      .number()
      .nullable()
      .transform((value, originalValue) =>
        originalValue === "" ? null : value
      ),
  })
  .required();

const CalculatorCAPMCustom = ({ handleApi, isLoading, resultData }) => {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    handleApi(data);
  };

  const sellingPrice =
    resultData.fairValue + resultData.fairValue * resultData.costOfEquity;
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-4">
          <div className="col-span-1 text-sm">
            <p className="text-lg font-bold text-black dark:text-white">
              Masukan Asumsi Perhitungan Nilai Wajar Saham, jika optional tidak
              diisi akan memakai nilai saat ini
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
              <Label htmlFor="terminal_year_params">Terminal Year</Label>
              <Input
                type="number"
                step=".01"
                {...methods.register("terminal_year_params")}
              />
              {methods.formState.errors.terminal_year_params && (
                <ErrorMessage
                  message={
                    methods.formState.errors.terminal_year_params.message
                  }
                />
              )}
            </div>
            <div className="flex flex-col col-span-1 gap-2">
              <Label htmlFor="beta_params">Beta (Optional)</Label>
              <Input
                type="number"
                step=".01"
                {...methods.register("beta_params")}
              />
              {methods.formState.errors.beta_params && (
                <ErrorMessage
                  message={methods.formState.errors.beta_params.message}
                />
              )}
            </div>
            <div className="flex flex-col col-span-1 gap-2">
              <Label htmlFor="bvps_params">
                Book Value Per Share (Optional)
              </Label>
              <Input
                type="number"
                step=".01"
                {...methods.register("bvps_params")}
              />
              {methods.formState.errors.bvps_params && (
                <ErrorMessage
                  message={methods.formState.errors.bvps_params.message}
                />
              )}
            </div>
            <div className="flex flex-col col-span-1 gap-2">
              <Label htmlFor="roe_params">ROE (Optional)</Label>
              <Input
                type="number"
                step=".01"
                {...methods.register("roe_params")}
              />
              {methods.formState.errors.roe_params && (
                <ErrorMessage
                  message={methods.formState.errors.roe_params.message}
                />
              )}
            </div>
            <div className="flex flex-col col-span-1 gap-2">
              <Label htmlFor="decline_year_params">
                Decline Year (Optional)
              </Label>
              <Input
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
              <Label htmlFor="final_roe_params">Final ROE (Optional)</Label>
              <Input type="number" {...methods.register("final_roe_params")} />
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
                  {sellingPrice.toLocaleString("id-ID", {
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
                              Buy Price
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
                    asumsi nilai perusahaan yang diinputkan.
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

export default CalculatorCAPMCustom;
