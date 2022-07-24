require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside skull drift reward stereo purchase install entry bridge giant'; 
let testAccounts = [
"0x8a246fcbb36c15ec56ad03e80929d5607f8eb290d13c72e1867ccca6f74d55aa",
"0x0b585478e8b9cc2eba59d9636cfd69bd23ec0469bf999bbbe5e2a2d1636f8715",
"0xbad0b13fd3c19be32f2792a95c0a0466a672882f3eda1a2ffe65cd8ffed13c5f",
"0x5eb3d60f0025f291281f77f642a964c3a5d7030c335d5029e7c2fdf408c523b1",
"0x75d4e03c7d242b68356b803d9464a64be4e97bc938ccddf96857bba9d40567c1",
"0xb66991b2877fcae5890d90fdb82a3c96a016077a8edd1c9daeee1284695601f7",
"0x06560fdccc05ac30feb5883ce931965fb191e6d40b80c1d16073b82d79efefb2",
"0x07ae1c5d70421ff7accbeb0dbc0c5181a67398ca0889da5539106acc86d7c7fd",
"0x7b529d49fec1b177763d026ee630d823d4428e409e051764d96acf30be714bbd",
"0x40f268ff4953cb3aed351472db4d7b67971177433274a185989d83d7e271b2a0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

