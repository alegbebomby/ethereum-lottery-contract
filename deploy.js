const HDWalletProvider = require('truffle-hdwallet-provider');
const  Web3 = require('web3');
const {interface, bytecode} = require('./compile');
const provider = new HDWalletProvider('ugly parrot parade fabric license person flame film concert exist frozen yard',
    'https://rinkeby.infura.io/Mncf8eSsAoc0eRgG42Rt');

const web3 = new Web3(provider);

const deploy =  async ()=>{
    const accounts = await web3.eth.getAccounts();
    console.log(" the acount  to use", accounts[0]);
    const results  = await new web3.eth.Contract(JSON.parse(interface)).deploy({data : bytecode}).
    send({from:accounts[0],gas:'1000000'});
    results.setProvider(provider);

    console.log(" Contracts is deployed to ",results.options.address);
}
deploy();