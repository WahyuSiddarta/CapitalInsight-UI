import * as React from "react";
import { useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ErrorModal from "./ErrorModal";
import { useStockTicker } from "../hooks/api/useStock";

export function SelectSahamGroup({ name }) {
  const { isLoading, isError, data, error } = useStockTicker();
  // const isLoading = false;
  // const isError = false;
  // const data = [];
  // const error = "";
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { register, setValue, watch } = useFormContext();
  const selectedValue = watch(name);

  React.useEffect(() => {
    if (isError) {
      setIsModalOpen(true);
    }
  }, [isError]);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  if (isModalOpen) {
    return <ErrorModal error={error} onClose={handleClose} />;
  }

  const capitalizeAndReplace = (str) => {
    if (typeof str !== "string") return "";
    return str
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const groupedData = data?.reduce((acc, stock) => {
    const industry = stock.industri || "Others";
    if (!acc[industry]) {
      acc[industry] = [];
    }
    acc[industry].push(stock);
    return acc;
  }, {});

  return (
    <>
      <Select
        {...register(name)}
        onValueChange={(value) => setValue(name, value)}
        value={selectedValue}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Pilih Saham" />
        </SelectTrigger>
        <SelectContent>
          {isLoading ? (
            <SelectItem disabled> Loading...</SelectItem>
          ) : (
            Object.entries(groupedData).map(([industry, stocks]) => (
              <SelectGroup key={industry}>
                <SelectLabel>{capitalizeAndReplace(industry)}</SelectLabel>
                {stocks.map((stock) => (
                  <SelectItem key={stock.ticker} value={stock.ticker}>
                    {stock.ticker}
                  </SelectItem>
                ))}
              </SelectGroup>
            ))
          )}
        </SelectContent>
      </Select>
    </>
  );
}
