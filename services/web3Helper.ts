import Web3 from "web3";
// import {
//   vestingAbi,
//   vestingContractAddress,
// } from "../utils/config";

import { readContract, writeContract } from '@wagmi/core'
import { waitForTransaction } from "wagmi/actions";
import {createPublicClientLocal, publicClient } from "./web3Service";
import { ico } from "@/utils/icoDetails";
import { tokenAbi } from "@/utils/token-abi";
import { decodeEventLog, parseEther, zeroAddress } from "viem";
import { currencies } from "@/utils/currencies";

const executeWriteFunction = async (txObj:any, userAddress:string) => {
  const publicClient = createPublicClientLocal()
  try {
    await publicClient.estimateContractGas({ ...txObj, account: userAddress})
  } catch (error) {
    throw error
  }
  let hash: any;
  try {
     hash = await writeContract(txObj);
  } catch (error) {
    throw error
  }
  return await publicClient.waitForTransactionReceipt({
    hash: hash.hash,
    pollingInterval:20000
  })
}


export const getUsdcAndUsdtTokenAddresses = async () => {
  const usdt:any = readContract({
    address: ico.address as any,
    abi: ico.abi,
    functionName: "usdt",
    args : []
  });
  const usdc:any = readContract({
    address: ico.address as any,
    abi: ico.abi,
    functionName: "usdc",
    args : []
  });
  return { usdt: await usdt, usdc: await usdc };
};

export const maxSeedSaleBuyAmountUser = async (address:any) => {
  const usdInvestedByUser:any = readContract({
    address: ico.address as any,
    abi: ico.abi,
    functionName: "seedSaleUsdInvestedByUser",
    args : [address]
  });
  return await usdInvestedByUser ;
};

export const preRegisterationUsdInvestedByUser = async (address:any) => {
  const usdInvestedByUser:any = readContract({
    address: ico.address as any,
    abi: ico.abi,
    functionName: "preRegisterationUsdInvestedByUser",
    args : [address]
  });
  return await usdInvestedByUser ;
};


export const getAmountRaised = async () => {
  const amountRaised = await readContract({
    address: ico.address as any,
    abi: ico.abi,
    functionName: "amountRaised",
    args: []
  });
  
  return  Number(amountRaised)/Math.pow(10,26) // 26=>18
};

export const getTokenAmount = async (address: any, amount:any) => {
  const price = await readContract({
    address: ico.address as any,
    abi: ico.abi,
    functionName: "getTokenAmount",
    args: [amount, address]
  });

  return Number(price)
};

export const getTokenBalance = async (
  userAddress: string
) => {
  const tokenAddresses: any = await getUsdcAndUsdtTokenAddresses();
  const usdtBalance = await readContract({
    address: tokenAddresses.usdt,
    abi: tokenAbi,
    functionName: "balanceOf",
    args: [userAddress],
  });
  const usdcBalance = await readContract({
    address: tokenAddresses.usdc,
    abi: tokenAbi,
    functionName: "balanceOf",
    args: [userAddress],
  });
  const usdtDecimals:any = await readContract({
    address: tokenAddresses.usdt,
    abi: tokenAbi,
    functionName: "decimals",
    args: []
  });
  const usdcDecimals:any = await readContract({
    address: tokenAddresses.usdc,
    abi: tokenAbi,
    functionName: "decimals",
    args: []
  });

  return {
    usdtBalance: (
      Number(usdtBalance) / Math.pow(10, usdtDecimals)
    ).toFixed(4),
    usdcBalance: (
      Number(usdcBalance) / Math.pow(10, usdcDecimals)
    ).toFixed(4),
  };
};

export const estimateFees = async (
  tokenType: string,
  amount: any,
  address: any
) => {
  const tokens = await getUsdcAndUsdtTokenAddresses();
  const tokenAddresss = tokenType.toUpperCase() === "USDT" ? tokens.usdt : tokens.usdc;
  const web3 = new Web3()
  const amountInWei = web3.utils.toWei(amount?.toString(),"ether")
  const gasPrice = await publicClient.getGasPrice() 
  try {
    const fees = await publicClient.estimateContractGas({
      address: ico.address as any,
      abi: ico.abi,
      functionName: "buyToken",
      account: address,
      args: [tokenAddresss, amountInWei],
    })
    return ((Number(fees) * Number(gasPrice)) / Math.pow(10, 18)).toFixed(4);
  } catch (error) {
    throw error
  }
};

const approveToken = async (tokenAddress: any, address: string) => {
  const txObj:any ={
    address: tokenAddress,
    abi: tokenAbi,
    functionName: "approve",
    args: [ico.address, "100000000000000000000000000000"]
  }
  try {
    return await executeWriteFunction(txObj, address)
  } catch (error) {
    throw error
  }
};

export const getDecimals = async(tokenAddress: string) => {
  const decimals:any = await readContract({
    address: tokenAddress as any,
    abi: tokenAbi,
    functionName: "decimals",
    args: []
  });
  return Number(decimals)
}

export const buyToken = async (
  amount: any,
  address: any,
  referrer: any,
  token: any
) => {
  let amountInWei;

  if (token !== currencies[0].address){
    const decimals:any = await readContract({
      address: token as any,
      abi: tokenAbi,
      functionName: "decimals",
      args: []
    });
    if(Number(decimals) === 18)
      amountInWei = parseEther(Number(amount).toFixed(18).toString())
    else
      amountInWei = amount * Math.pow(10, Number(decimals))
  }
  else {
    amountInWei = parseEther(Number(amount).toFixed(18).toString())
  }

  let txObj:any = {
    address: ico.address as any,
    abi: ico.abi,
    functionName: "buyToken",
    args: [token, amountInWei, referrer?referrer:zeroAddress],
  }
  if (token !== currencies[0].address){
    const allowanceToIco = await allowance(token, address)
    if(allowanceToIco < Number(amount))
      await approveToken(token, address)
  }
  else 
    txObj = {...txObj, value: parseEther(Number(amount).toFixed(18).toString())}

  try {
    return await executeWriteFunction(txObj, address)
  } catch (error) {
    throw error
  }
};

export const allowance = async (
  token: string,
  address: string
) => {
  const allowance = await readContract({
    address: token as any,
    abi: tokenAbi,
    functionName: "allowance",
    args: [address, ico.address as any],
  });
  return Number(allowance) / Math.pow(10, 18);
};

export const cgBougth = async (address: any) => {
  const bnqBalance = await readContract({
    address: ico.address as any,
    abi: ico.abi,
    functionName: "tokenBoughtUser",
    args: [address],
  });
  return (Number(bnqBalance) / Math.pow(10, 18)).toFixed(4);
};

// export const claimAllVestingReward = async (address:any) => {
//   try {
//     await publicClient.estimateContractGas({
//       address: vestingContractAddress,
//       abi: vestingAbi,
//       functionName: "withdrawTokens",
//       account: address,
//       args: []
//     })
//   } catch (error) {
//     throw error
//   }
//   let hash: any;
//   try {
//      hash = await writeContract({
//       address: vestingContractAddress,
//       abi: vestingAbi,
//       functionName: "withdrawTokens",
//       args: []
//     });
//   } catch (error) {
//     throw error
//   }
//   return await waitForTransaction({
//     hash: hash.hash,
//   })
// };

// export const getClaimPercent = async (address: string, useContractRead:any) => {
//   const tokenVested = await readContract({
//     address: vestingContractAddress,
//     abi: vestingAbi,
//     functionName: "userVestedAmount",
//     args: [address],
//   });
//   const tokenClaimed = await readContract({
//     address: vestingContractAddress,
//     abi: vestingAbi,
//     functionName: "userClaimedAmount",
//     args: [address],
//   });
//   return {
//     tokenVested: Number(tokenVested) / Math.pow(10, 18),
//     tokenClaimed: Number(tokenClaimed) / Math.pow(10, 18),
//   };
// };

export const getElegiebleAmout = async (address: string) => {
  const poolAndAmount = await readContract({
    address: ico.address as any,
    abi: ico.abi,
    functionName: "getPoolAndAmount",
    args: [address],
  });
  return poolAndAmount
};

// export const getVestingDate = async () => {
//   const presaleEndDate = await readContract({
//     address: vestingContractAddress,
//     abi: vestingAbi,
//     functionName: "preSaleEnd",
//     args : []
//   });
//   const cliff = await readContract({
//     address: vestingContractAddress,
//     abi: vestingAbi,
//     functionName: "cliff",
//     args : []
//   });

//   return (Number(presaleEndDate) + Number(cliff)) * 1000; // In mili seconds
// };

// export const getClaimableAmount = async (address: string) => {
//   const unloackedAmount = await readContract({
//     address: vestingContractAddress,
//     abi: vestingAbi,
//     functionName: "getUserUnlockedAmount",
//     args: [address]
//   });
//   const userVestedAmount = await readContract({
//     address: vestingContractAddress,
//     abi: vestingAbi,
//     functionName: "userVestedAmount",
//     args: [address]
//   });
//   return Number(unloackedAmount) - Number(userVestedAmount);
// };

// export const unloackedAmount = async (address: string) => {
//     const claimableamount = await readContract({
//         address: vestingContractAddress,
//         abi: vestingAbi,
//         functionName: "getUserUnlockedAmount",
//         args: [address]
//     });
//   return Number(claimableamount) / Math.pow(10, 18);
// };

// export const endSeedSaleTime = async () => {
//     const phase1StartTime = await readContract({
//         address: vestingContractAddress,
//         abi: vestingAbi,
//         functionName: "phase1StartTime",
//         args: []
//     });
//   return Number(phase1StartTime)
// };


export const endSaleTime = async () => {
  console.log("{phase1StartTime}")
  const phase1StartTime = await readContract({
      address: ico.address as any,
      abi: ico.abi,
      functionName: "endTime",
      args: []
  });
  console.log({phase1StartTime})
return Number(phase1StartTime)
};

export const getEventValue = async (result: any, eventName:string) => {
  let tokenBought :any;
  for(let i=0; i< result.logs.length; i++){
    try {
      const log = decodeEventLog({
        abi: ico.abi,
        data: result.logs[i].data,
        topics: result.logs[i].topics
      })
      if(log.eventName === eventName){
        tokenBought = log.args;
      }
    
    } catch (error) {
      console.log("error")
    }
  }
  return tokenBought;
}