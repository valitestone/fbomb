import { useEffect, useState } from 'react'
import { useContract } from './useContract.js'
import abi from './abis.js'
import abi2 from './abis2.js'
import { toBigInt, fromWei } from 'web3-utils';


export function useConvertRate(refPool, rpc, tokenIndex){

    const [status, setStatus] = useState('idle')
    const [rate, setRate] = useState()
    
    const { ethers, JsonRpcProvider } = require('ethers');
    const provider = new JsonRpcProvider(rpc);
    
    const contract = new ethers.Contract(refPool, abi, provider);

    //console.log("useConvert",contract)
    useEffect(() => {
      const fetchData = async () => {
        setStatus('fetching')
        let reserves 
        if (contract){
         reserves = await contract.getReserves()
         //console.log("reserves",reserves)
        }
        const [r0,r1] = tokenIndex>0?[reserves[1],reserves[0]]:[reserves[0],reserves[1]]
	const rate = fromWei(r0,'ether')/fromWei(r1?r1:1,'ether')
        setRate(rate.toString())
        setStatus('fetched')
      }
       
      fetchData()
    }, [])
  
    return { status, rate }
}

export function useLpValue(tokenAddress, pool, rpc, rate){

    const [status, setStatus] = useState('idle')
    const [lpvalue, setLpvalue] = useState()
    
    const { ethers, JsonRpcProvider } = require('ethers');
    const provider = new JsonRpcProvider(rpc);
    
    const contract = new ethers.Contract(tokenAddress, abi, provider);
    const poolContract = new ethers.Contract(pool.p, abi, provider);
	


    useEffect(() => {
      const fetchData = async () => {
      try{
        setStatus('fetching')

        if (contract&&rate){
         	const fbombBal = await contract.balanceOf(pool.p)
         	const totalSupply = await poolContract.totalSupply()
         	const gaugeBalance = await poolContract.balanceOf(pool.g)
		const val = fromWei(fbombBal+fbombBal,'ether')*fromWei(gaugeBalance,'ether')/fromWei(totalSupply,"ether")/(rate?rate:1)
        	setLpvalue(val.toString())
        	setStatus('fetched')
        	console.log('lpvalue',pool.t,val,rate,fbombBal)
        }
        
	
        }catch(e){console.log(e)}
      }
       
      fetchData()
    }, [rate])
  
    return { status, lpvalue }
}
export function useAPR(type,dexToken,tokenAddress, pool, rpc, rate, lpvalue){

    const [status, setStatus] = useState('idle')
    const [apr, setApr] = useState()
    const [rewardRate, setrewardRate] = useState()
    const { ethers, JsonRpcProvider } = require('ethers');
    const provider = new JsonRpcProvider(rpc);
    
    const year = 3153600000;
	


    useEffect(() => {
      const fetchData = async () => {
        setStatus('fetching')

        if(dexToken=='0x54016a4848a38f257B6E96331F7404073Fd9c32C'){console.log('Equalizer')}
       try{

        if(type==1){
        	const contract2 = new ethers.Contract(pool.g, abi, provider);
         	const result = await contract2.rewardRate()
         	//console.log("basereward",result)
         	setrewardRate(result)
         }else{
         	const contract = new ethers.Contract(pool.g, abi2, provider);
         	const result = await contract.rewardRate(dexToken)
         	//console.log("fantomreward",result)
         	setrewardRate(result)
         }
         
        }catch(e) {console.log(e)}
        
       // console.log("lpvalue",lpvalue)
        if(rewardRate>0 && lpvalue){
		const val = fromWei(rewardRate,"ether")*year/(lpvalue?lpvalue:1)
		setApr(val.toFixed(2))
		console.log(pool.t,val,rewardRate,lpvalue)
        setStatus('fetched')
	}
        
      }
       
      fetchData()
    }, [lpvalue, rate,rewardRate])
  
    return { status, apr }
}
export function useAPR2(chain,dexToken,tokenAddress, pool,gauge, rpc, rate, lpvalue){

    const [status, setStatus] = useState('idle')
    const [apr, setApr] = useState()
    
    const { ethers, JsonRpcProvider } = require('ethers');
    const provider = new JsonRpcProvider(rpc);

    const contract = new ethers.Contract(gauge, abi, provider);
	
    const year = toBigInt('3153600000');
	


    useEffect(() => {
      const fetchData = async () => {
        setStatus('fetching')
        let rewardRate 
        if (contract){
  //      try{
        console.log(chain=='Fantom')
        rewardRate = await contract.rewardRate(dexToken)
        console.log("fantomreward",rewardRate)
         
         
  //       }catch {}
        }
        console.log("lpvalue",lpvalue)
        if(lpvalue && rewardRate){
		const val = rewardRate*year/toBigInt(lpvalue?lpvalue:1)
		setApr(val.toString())
        setStatus('fetched')
	}
        
      }
       
      fetchData()
    }, [lpvalue, rate])
  
    return { status, apr }
}

