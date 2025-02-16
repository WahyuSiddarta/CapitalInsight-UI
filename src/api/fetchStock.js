import fetchWrapper from "@/src/utils/Api";

// Function to send email and password to /api/public/login
export const getStockTicker = async () => {
  try {
    const response = await fetchWrapper.getPrivate("/stock/tickers");
    return response;
  } catch (error) {
    console.error("Error getStockTicker:", error);
    throw error;
  }
};
