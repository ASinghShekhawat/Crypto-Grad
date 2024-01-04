import axios from "axios";

const getToken = () => {
  return localStorage.getItem('accessToken')
}

export const login = async (walletAddress: string, referral?: string,) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/user/login`,
    referral
      ? {
          walletAddress: walletAddress,
          referralId: referral,
        }
      : {
          walletAddress: walletAddress,
        }
  );
  return res;
};

export const userWalletByRefId = async (referral: string) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/user/user-by-referral-id`,
        {
          referralId: referral,
        }
  );
  return res;
}

export const addReferral = async () => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/user/add-referrel`,
        {},
        {
            headers: {
              Authorization : `Bearer ${getToken()}`
            }
        }
  );
  return res;
};

export const userWalletByUserId = async (userId: string) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/user/user-by-user-id`,
        {
          userId: userId,
        }
  );
  return res;
}

export const getUserDetails = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/user/user-details`,
    {
      headers: {
        Authorization : `Bearer ${getToken()}`
      }
    }
  );
  return res.data;
}



export const userDirectPartners = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/user/directPartners`,
        {
          headers: {
            Authorization : `Bearer ${getToken()}`
          }
        }
  );
  return res;
}

export const totalTeamPartners = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/user/totalTeamPartners`,
        {
          headers: {
            Authorization : `Bearer ${getToken()}`
          }
        }
  );
  return res;
}

export const userInfo =async (address:string) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/user/userInfo`,
      {
        walletAddress : address
      }
  );
  return res.data;
}

export const totalteamTurnOver =async (address:string) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/commission/user-team-turnover`,
      {
        walletAddress : address
      }
  );
  return res.data;
}

export const getUserRank =async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/user/rank`,
    {
      headers: {
        Authorization : `Bearer ${getToken()}`
      }
    }
  );
  return res.data;
}

export const getLeaderBoard =async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/user/leader-board`
  );
  return res.data;
}
