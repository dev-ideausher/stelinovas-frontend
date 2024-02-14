"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { toast } from "react-toastify";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import abi from "./abi.json";

const Meet = () => {
  const [currentAccount, setCurrentAccount] = useState<string>("");
  const [tokenAmount, setTokenAmount] = useState<number>(0);
  const contractABI = abi.abi;
  const contractAddress = "0x7e6b538CE8c005A28F06cd034804f8a09c29CAd9";
  const Ethereum = typeof window !== "undefined" && window.ethereum;

  const connect = async () => {
    try {
      if (!Ethereum) {
        toast.error("No Ethereum mask", { position: "top-right" });
        return;
      }
      const accounts = await Ethereum.request({
        method: "eth_requestAccounts",
      });
      if (accounts.length === 0) {
        toast.error("No authorised account", { position: "top-right" });
        return;
      }
      console.log(accounts[0]);
      setCurrentAccount(accounts[0]);
      toast.success("Wallet connected", { position: "top-right" });
      const chainId = await Ethereum.request({ method: "eth_chainId" });
      if (chainId == "0x13881") {
        console.log(chainId);
      } else {
        await Ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x13881" }],
        });
        toast.success("Netowrk switched", { position: "top-right" });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getContract = async () => {
    const provider = new ethers.BrowserProvider(Ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    return contract;
  };

  const buyTokens = async (tokenAmount: number) => {
    try {
      if (!Ethereum) {
        toast.error("Ethereum object not found", { position: "top-right" });
        return;
      }
      if (!currentAccount) {
        toast.error("No account connected", { position: "top-right" });
        return;
      }

      const contract = await getContract();
      const pricePerToken= await contract.getRate();
      console.log("<===================== price per token =====================>", pricePerToken.toString());
      const amount= Number(pricePerToken )* tokenAmount;
      const amountInEth=ethers.parseEther(amount.toString());


      const transaction = await contract.buyTokens(tokenAmount, {
        value: amountInEth,
      });

      await transaction.wait();

      toast.success("Tokens purchased successfully", { position: "top-right" });
    } catch (error: any) {
      toast.error(error.message, { position: "top-right" });
      console.log(error.message);
    }
  };

  const rotateAnimation = {
    rotate: [0, 360], // Rotate from 0 to 360 degrees
    transition: {
      duration: 4, // Duration of one rotation cycle
      ease: "linear", // Linear easing for constant rotation speed
      repeat: Infinity, // Repeat the animation indefinitely
    },
  };
  return (
    <div
      className="meet-container py-10"
      style={{
        backgroundImage: `url("/images/star-back.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        zIndex: -1,
      }}
    >
      <div className="left-div">
        <Image
          src="/images/char4.gif"
          width={1200}
          height={1800}
          alt="3dicons"
        />
      </div>
      <div className="center-div">
        <h1 className="text-white font-loaded text-4xl  font-semibold leading-normal">
          <span>MEET</span>{" "}
          <span className="text-[#a88aff] font-loaded text-4xl font-semibold leading-normal">
            STELINOVAS
          </span>
        </h1>
        <p className="text-white text-xs mb-10">
          The best game in 2023 with a lot of features
        </p>
        <div className="coin-input-container">
          <input
            className="coin-input"
            type="number"
            placeholder="0.0"
            value={tokenAmount}
            onChange={(e) => setTokenAmount(parseFloat(e.target.value))}
          />
          <Image
            className="gold-coin"
            src="/images/gold-coin.png"
            width={40}
            height={40}
            alt="gold-coin"
          />
        </div>
        {}
        <button className="wallet-btn" onClick={connect}>
          <div className="btn-content">
            <Image
              src="/images/wallet.png"
              width={30}
              height={30}
              alt="wallet"
            />
            Connect wallet
          </div>
        </button>
        <button className="download-btn" onClick={() => buyTokens(tokenAmount)}>
          <div className="btn-content">
            <Image
              src="/images/ion_download.png"
              width={30}
              height={30}
              alt="download"
            />
            Download Whitepaper
          </div>
        </button>
      </div>
      <div className="right-div">
        <Image
          src="/images/running.gif"
          width={450}
          height={450}
          alt="3dicons"
        />
      </div>
      <motion.img
        src="/images/moon.png"
        width={200}
        height={200}
        alt="moon"
        className="overlay"
        animate={rotateAnimation}
      />
    </div>
  );
};

export default Meet;
