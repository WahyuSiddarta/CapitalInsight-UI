import React, { useState } from "react";
import { useForm, FormProvider, useWatch } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SelectSahamGroup } from "../SelectSahamGroup";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { convertToNumber } from "@/src/utils/Utils";
import Tooltip from "../Tooltip";
import fetchWrapper from "@/src/utils/Api";
import ErrorModal from "../ErrorModal";
import { getErrorMessage } from "@/src/utils/errorHandler";

const schema = yup
  .object({
    ticker: yup.string().required("Ticker is required and must be a string"),
    user_conviction: yup
      .number()
      .min(80, "Jangan Berinvestasi di saham yang tidak Anda yakini")
      .max(99, "Sisakan ruang minimal 1% untuk kesalahan")
      .required(
        "Conviction Anda diperlukan dan harus berupa angka antara 80 dan 99"
      ),
    net_income: yup
      .string()
      .required("Net income is required and must be a number"),
    market_share: yup
      .number()
      .min(0, "Market share must be between 0 and 100")
      .max(100, "Market share must be between 0 and 100")
      .when("net_income", (net_income, schema) => {
        console.log("when ", net_income, typeof net_income);
        const realNetIncome = convertToNumber(net_income || "0");
        return realNetIncome.isGreaterThan(5000000000000)
          ? schema.required(
              "Market share is required when net income is greater than 5,000,000,000,000"
            )
          : schema.notRequired();
      }),
    discounted_asset: yup
      .number()
      .min(0, "Discounted asset must be between 0 and 50")
      .max(50, "Discounted asset must be between 0 and 50")
      .required("Discounted asset is required and must be a number"),
    stability: yup
      .number()
      .min(0, "Stability must be between 0 and 100")
      .max(100, "Stability must be between 0 and 100")
      .required("Stability is required and must be a number"),
    growth_rate: yup
      .number()
      .required("Growth rate is required and must be a number"),
    dividen: yup
      .number()
      .min(0, "Dividen must be between 0 and 100")
      .required("Dividen is required and must be a number"),
  })
  .required();

const CalculatorThinkIdForm = () => {
  const [resultData, setResultData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const netIncome = useWatch({
    control: methods.control,
    name: "net_income",
  });

  const realNetIncome = convertToNumber(netIncome || "0");
  console.log("realNetIncome ", realNetIncome, typeof realNetIncome);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetchWrapper.postPrivate(
        "/fundamental/custom-model",
        data
      );

      console.log("response ", response);
      setResultData(response.data);
      return response;
    } catch (error) {
      setErrorMessage(getErrorMessage(error)); // Use the helper function
      setShowErrorModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <ErrorModal
        show={showErrorModal}
        handleClose={() => setShowErrorModal(false)}
        errorMessage={errorMessage}
      />

      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-4">
          <div className="col-span-1 text-sm">
            <p>
              Asumsi pertumbuhan ROE sudah mencapai puncak, kemudain menurun
              secara perlahan sampai mencapai ROE konstant (10 tahun):
            </p>
          </div>
          <div className="grid grid-cols-1 col-span-1 gap-3 text-sm">
            <div className="flex flex-col col-span-1 gap-3">
              <Label htmlFor="ticker">Kode Saham</Label>
              <SelectSahamGroup name="ticker" />
              {methods.formState.errors.ticker && (
                <ErrorMessage
                  message={methods.formState.errors.ticker.message}
                />
              )}
            </div>
            <div className="grid grid-cols-1 col-span-1 gap-3 md:grid-cols-2">
              <p className="col-span-1 mt-4 text-base font-bold md:col-span-2">
                Future Value
              </p>
              <div className="flex flex-col gap-2">
                <Label htmlFor="user_conviction">User Conviction</Label>
                <Input
                  id="user_conviction"
                  type="text" // Change type to text to handle decimal values
                  {...methods.register("user_conviction")}
                  prepend={
                    <span className="flex items-center justify-center w-full h-full text-sm">
                      %
                    </span>
                  }
                />
                {methods.formState.errors.user_conviction && (
                  <ErrorMessage
                    message={methods.formState.errors.user_conviction.message}
                  />
                )}
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="user_conviction">Stability</Label>
                <Input
                  id="stability"
                  type="text" // Change type to text to handle decimal values
                  {...methods.register("stability")}
                  prepend={
                    <span className="flex items-center justify-center w-full h-full text-sm">
                      %
                    </span>
                  }
                />
                {methods.formState.errors.stability && (
                  <ErrorMessage
                    message={methods.formState.errors.stability.message}
                  />
                )}
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="net_income" className="flex items-center gap-3">
                  Net Income{" "}
                  <Tooltip size="lg" position={"right"}>
                    <p className="text-xs">
                      Inputan dapat berupa angka seperti 1000000000000 atau
                      1,000 B. Pendapatan bersih yang Anda anggap normal untuk
                      perusahaan, misalnya Anda dapat menggunakan rata-rata 5
                      tahun. Harap berhati-hati saat menggunakannya pada saham
                      komoditas atau saham siklikal
                    </p>
                  </Tooltip>
                </Label>
                <Input
                  id="net_income"
                  type="text"
                  {...methods.register("net_income")}
                  prepend={
                    <span className="flex items-center justify-center w-full h-full text-sm">
                      IDR
                    </span>
                  }
                />
                {methods.formState.errors.net_income && (
                  <ErrorMessage
                    message={methods.formState.errors.net_income.message}
                  />
                )}
              </div>
              {realNetIncome.isGreaterThan(5000000000000) && (
                <div className="flex flex-col gap-2">
                  <Label htmlFor="market_share">Market Share</Label>
                  <Input
                    id="market_share"
                    type="text" // Change type to text to handle decimal values
                    {...methods.register("market_share")}
                    prepend={
                      <span className="flex items-center justify-center text-sm w/full h/full">
                        %
                      </span>
                    }
                  />
                  {methods.formState.errors.market_share && (
                    <ErrorMessage
                      message={methods.formState.errors.market_share.message}
                    />
                  )}
                </div>
              )}

              <div className="flex flex-col gap-2">
                <Label htmlFor="growth_rate">Growth Rate</Label>
                <Input
                  id="growth_rate"
                  type="text" // Change type to text to handle decimal values
                  {...methods.register("growth_rate")}
                  prepend={
                    <span className="flex items-center justify-center text-sm w/full h/full">
                      %
                    </span>
                  }
                />
                {methods.formState.errors.growth_rate && (
                  <ErrorMessage
                    message={methods.formState.errors.growth_rate.message}
                  />
                )}
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="dividen">Dividen</Label>
                <Input
                  id="dividen"
                  type="text" // Change type to text to handle decimal values
                  {...methods.register("dividen")}
                  prepend={
                    <span className="flex items-center justify-center text-sm w/full h/full">
                      %
                    </span>
                  }
                />
                {methods.formState.errors.dividen && (
                  <ErrorMessage
                    message={methods.formState.errors.dividen.message}
                  />
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 col-span-1 gap-3 md:grid-cols-2">
              <p className="col-span-1 mt-4 text-base font-bold md:col-span-2">
                Current Value
              </p>
              <div className="flex flex-col gap-2">
                <Label htmlFor="discounted_asset">Discounted Asset</Label>
                <Input
                  id="discounted_asset"
                  type="text" // Change type to text to handle decimal values
                  {...methods.register("discounted_asset")}
                  prepend={
                    <span className="flex items-center justify-center text-sm w/full h/full">
                      %
                    </span>
                  }
                />
                {methods.formState.errors.discounted_asset && (
                  <ErrorMessage
                    message={methods.formState.errors.discounted_asset.message}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <Button type="submit" className="w-full mt-4" loading={isLoading}>
          Submit
        </Button>
      </form>
      {!isLoading && !!resultData && (
        <div className="w-full mt-4 text-sm min-h-30">
          <p className="text-lg font-bold">
            Nilai Wajar :{" "}
            {Number(resultData).toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
      )}
    </FormProvider>
  );
};

export default CalculatorThinkIdForm;
