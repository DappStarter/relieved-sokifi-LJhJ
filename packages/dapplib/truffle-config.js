require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom slab green rare remind hospital hidden enroll olympic genius'; 
let testAccounts = [
"0x4d05371959a412db861402b85ffa14c3dc176a0b7fa413ce174200dd9f69646e",
"0x31df8ee7e0c10f88a40c5a5ea03e54117a499bcd19c4ac26b64704f2be564d77",
"0x76ecd44cf3d190c2f7c8db801ba54d17376965b7f3dd8460c044b09e11898111",
"0x648568782c4541846221fe41df18fcc69f72eefbbb5977afcc4b44509fc30b4a",
"0x05b7bf27cf5105b1ff29fb76991d5acbeb0a282b222de18c507db2dcdc064335",
"0x5a45426e37ee3d891c73d0c52fd42153390449e770fccdb0e6f950284fdff1fd",
"0x157553e1013b26b74e28abe2597dc4f7d117f4f8eb2fbea41af3e4e0afb17671",
"0x04a513a0ab5503b45b4d25b8c683a9ab2f7f244f4227b085e2d01f9f163b0d58",
"0x85ffaeb7c941ec13a232d8e494bb78aacbca911e043f5ed8e6ac8060c502444a",
"0x0d4a33694a0e5bb45c71d24dfce7c40f61a2d4ee0d41204904e86ab76d37d944"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

