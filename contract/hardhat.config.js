require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

//FOR DEPLOYING LOCALLY
// module.exports = {
//   solidity: "0.8.18",
// };

const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://rpc.ankr.com/polygon_mumbai";
const NEXT_PUBLIC_PRIVATE_KEY = "f0707ea73ac8b6fd673836380d223c4c81d6381752795794fa6ba496888290ac";

module.exports = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  defaultNetwork: "matic",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
};

// npx hardhat run scripts/deploy.js --network polygon_mumbai
