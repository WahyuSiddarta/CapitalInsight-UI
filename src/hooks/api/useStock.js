import { useQuery } from "@tanstack/react-query";
import { getStockTicker } from "@/src/api/fetchStock"; // Import the fetch function

export const useStockTicker = () => {
  return useQuery({
    queryKey: ["stockTicker"],
    queryFn: getStockTicker,
  });
};
