"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { toast } from "react-toastify";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

const Meet = () => {
  // const providerOptions = {};
  // const handleConnect = async () => {
  //   try {
  //     let web3Modal = new Web3Modal({
  //       cacheProvider: false,
  //       providerOptions,
  //     });
  //     const web3ModalInstance = await web3Modal.connect();
  //     const web3ModalProvider = new ethers.BrowserProvider(web3ModalInstance);
  //     console.log(web3ModalProvider);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const [hasProvider, setHasProvider] = useState<boolean | null>(null);
  const [chainId, setChainId] = useState(null);
  const [account, setAccount] = useState([null]);

  useEffect(() => {
    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true });
      console.log("Provider ", provider);
      setHasProvider(Boolean(provider));
    };
    getProvider();
    console.log("Provider ", hasProvider);
  }, [hasProvider]);

  const updateWallet = async (accounts: any) => {
    setAccount(accounts[0]);
  };

  const handleConnect = async () => {
    if (window.ethereum) {
      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
      const chId = await window.ethereum.request({ method: "eth_chainId" });
      updateWallet(accounts);
      if (chId == "0x13881") {
        setChainId(chId);
      } else {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [
            {
              chainId: "0x13881",
            },
          ],
        });
        toast.success("Network switched!", { position: "top-right" });
      }
      console.log("Account addr:", account, "Chain id:", chId);
      toast.success(`Connected to wallet`, {
        position: "top-right",
      });
    } else {
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
          <input className="coin-input" type="number" placeholder="0.0" />
          <Image
            className="gold-coin"
            src="/images/gold-coin.png"
            width={40}
            height={40}
            alt="gold-coin"
          />
        </div>
        <button className="wallet-btn" onClick={handleConnect}>
          <div className="btn-content">
            <Image
              src="/images/wallet.png"
              width={30}
              height={30}
              alt="wallet"
            />
            Connect wallet
            {/* {account[0]
              ? ` Address: ${account.slice(0, 15)}....
                `
              : "Connect Wallet"} */}
          </div>
        </button>
        <button className="download-btn">
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
