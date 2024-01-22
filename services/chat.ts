import { IChat } from "@/context/HistoryContext";
import axios from "axios";

const getToken = () => {
  return localStorage.getItem('accessToken')
}

export const addUserChat = async (data: IChat) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/chat`,
    data,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
  );
  return res;
};

export const getUserChat = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/chat`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
  );
  return res;
};