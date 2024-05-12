import { useEffect, useState } from 'react'

	
export function useContract(tokenAddress, rpc) {
    const [contract, setContract] = useState()
    const { ethers, JsonRpcProvider } = require('ethers');
    const provider = new JsonRpcProvider(rpc);
    const abi = [
  // Get pool reserves
  "function getReserves() view returns (uint,uint,uint)",
  
  // Get the totalSupply
  "function totalSupply() view returns (uint)",
  // Get the balance
  "function balanceOf(address) view returns (uint)",
  // Get rewardRate
  "function rewardRate() view returns (uint)"
	];

    //const erc20 = new ethers.Contract(tokenAddress, abi, provider);
    useEffect(() => {
      const fetchData = async () => {
        const erc20 = new ethers.Contract(tokenAddress, abi, provider);
        setContract(erc20);

      }
       
      fetchData()
      console.log("useContract",contract)
    }, [])
  
    return { contract }
}
