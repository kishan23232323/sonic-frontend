import API from "../../config/axios";

export const convertFiatUsdt = async ({ amount, from, to }) => {
  try {
    const response = await API.get("/api/v1/conversions/fiat-usdt", {
      params: { amount, from, to }
    });

    return response.data?.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};
