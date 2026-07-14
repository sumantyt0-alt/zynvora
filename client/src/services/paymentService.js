import API from "./api";

export const createOrder = async (amount, token) => {
  const response = await API.post(
    "/payment/create-order",
    { amount },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};