const HDWalletProvider = require('truffle-hdwallet-provider');
const  Web3 = require('web3');

const {interface, bytecode} = require('./compile');
const provider = new HDWalletProvider('open city cheese frozen energy wonder describe panel purity wool monster december',
    'https://rinkeby.infura.io/Mncf8eSsAoc0eRgG42Rt');



const deploy =  async ()=>{
    const web3 = new Web3(provider);
    const accounts = await   web3.eth.getAccounts();
    // get first account;
    //console.log(" the acount  to use", accounts[0]);

    const results  = await  new web3.eth.Contract(JSON.parse(interface)).deploy({data : bytecode}).
    send({from:accounts[0],gas:'1000000'});

    results.setProvider(provider);
    console.log(interface);
    console.log(" Contracts is deployed to ",results.options.address);

}
deploy();