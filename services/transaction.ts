import axios from "axios";

const getToken = () => {
    return localStorage.getItem('accessToken')
  }

export const addTransaction = async (transactionObj : {
    baseAmount: number,
    tokenQuantity : number,
    transactionHash: string,
    token : string,
  }) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/tx/add-transaction-history`,
        transactionObj,
        {
            headers: {
              Authorization : `Bearer ${getToken()}`
            }
        }
  );
  return res;
};

export const userTransactions = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/tx/user-transactions`,
        {
            headers: {
            Authorization : `Bearer ${getToken()}`
            }
        }
    );
    return res;
}