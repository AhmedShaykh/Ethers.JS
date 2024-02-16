import { ethers } from "ethers";
import "./style.css";

const provider = new ethers.providers.Web3Provider(window.ethereum);

console.log(provider);

console.log(window.ethereum.isConnected());

window.ethereum.request({
    "method": "eth_blockNumber",
    "params": []
})
    .then(data => console.log(data));

window.ethereum.request({
    "method": "eth_getBalance",
    "params": [
        "0xb3590E61A1BB15F342d8148d2870d894c4C1FBCF",
        "19241127"
    ]
})
    .then(data => console.log(data));