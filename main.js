import { ethers } from "ethers";
import "./style.css";

const provider = new ethers.providers.Web3Provider(window.ethereum);

console.log(provider);