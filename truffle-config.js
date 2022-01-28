const path = require("path");

//const HDWalletProvider = require('@truffle/hdwallet-provider');
//const fs = require('fs');
//const mnemonicRopsten = fs.readFileSync("ropsten.secret").toString().trim();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {

    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonicRopsten, "https://ropsten.infura.io/v3/7d43c9442e6c4060bfb74a621a860902")
      },
      network_id: 3
    },

    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: 5777,       // Any network (default: none)
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.11",    // Fetch exact version from solc-bin (default: truffle's version)
       docker: false,        // Use "0.5.1" you've installed locally with docker (default: false)
       settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
        evmVersion: "byzantium"
       }
    }
  }
};
