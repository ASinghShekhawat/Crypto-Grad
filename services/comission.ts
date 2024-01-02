import axios from "axios";

export const addComission = async (commissionObj : {
    receivingUser :  string,
    level: number,
    token : string,
    comissionedFrom: string,
    comissionAmount: number,
    baseAmount: number,
    transactionHash: string
  }) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/commission/add-commission`,
        commissionObj
  );
  return res;
};
