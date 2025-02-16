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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-4">
          <div className="col-span-1 text-sm">
            <p className="text-lg">Asumsi pertumbuhan ROE selama 10 tahun</p>
          </div>
          <div className="grid grid-cols-1 col-span-1 gap-3 text-sm md:grid-cols-2">
            <div className="flex flex-col col-span-1 gap-3 md:col-span-2">
              <Label htmlFor="ticker">Kode Saham</Label>
              <SelectSahamGroup name="ticker" />
              {methods.formState.errors.ticker && (
                <ErrorMessage
                  message={methods.formState.errors.ticker.message}
                />
              )}
            </div>
            <div className="flex flex-col col-span-1 gap-3">
              <Label htmlFor="decline_year_params" className="flex gap-3">
                Decline Year (OPTIONAL)
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
            <div className="flex flex-col col-span-1 gap-3">
              <Label htmlFor="final_roe_params" className="flex gap-3">
                Final ROE (OPTIONAL)
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
      {!isLoading && !!resultData && (
        <Card className="mt-4 dark:bg-gray-700">
          <CardHeader className="flex flex-row items-center gap-3 pb-2 dark:bg-gray-700">
            <p className="text-lg font-bold">Hasil Perhitungan</p>{" "}
            <ChartCandlestick />
          </CardHeader>
          <CardContent>
            <div className="grid w-full grid-cols-1 gap-5 mt-4 text-sm min-h-30 md:grid-cols-2">
              <div className="col-span-1">
                <p className="text-sm">Nilai Wajar : </p>
                <p className="text-lg">
                  {Number(resultData.fairValue).toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
              <div className="col-span-1">
                <p className="text-sm"> Cost Of Equity : </p>
                <p className="text-lg font-bold">
                  {Number(resultData.costOfEquity).toLocaleString("id-ID", {
                    style: "percent",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
              <div className="col-span-1 rounded-md md:col-span-2">
                <p className="pb-2 text-lg font-bold">Margin Of Safety</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border border-collapse rounded-md">
                    <thead>
                      <tr>
                        <th className="p-2 border-b rounded-tl-md">10%</th>
                        <th className="p-2 border-b">20%</th>
                        <th className="p-2 border-b">30%</th>
                        <th className="p-2 border-b rounded-tr-md">40%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border-b">
                          {(Number(resultData.fairValue) * 0.9).toLocaleString(
                            "id-ID",
                            {
                              style: "currency",
                              currency: "IDR",
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            }
                          )}
                        </td>
                        <td className="p-2 border-b">
                          {(Number(resultData.fairValue) * 0.8).toLocaleString(
                            "id-ID",
                            {
                              style: "currency",
                              currency: "IDR",
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            }
                          )}
                        </td>
                        <td className="p-2 border-b">
                          {(Number(resultData.fairValue) * 0.7).toLocaleString(
                            "id-ID",
                            {
                              style: "currency",
                              currency: "IDR",
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            }
                          )}
                        </td>
                        <td className="p-2 border-b">
                          {(Number(resultData.fairValue) * 0.6).toLocaleString(
                            "id-ID",
                            {
                              style: "currency",
                              currency: "IDR",
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            }
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-span-1 p-4 my-2 bg-yellow-400 rounded-md md:col-span-2">
                <p className="text-lg dark:text-black">Important</p>
                <ol className="flex flex-col gap-2 text-sm italic text-black list-decimal list-inside">
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
