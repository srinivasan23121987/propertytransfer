const HDWalletProvider=require('truffle-hdwallet-provider');

const Web3=require('web3');
const {interface,bytecode}=require('./compile')
const provider=new HDWalletProvider('problem prevent knife sudden tube rich lucky govern fly cloth van dad',
'https://rinkeby.infura.io/v3/3e59ca68b1c24825ae2ebf4d43a036a4');
const web3 = new Web3(provider);
const deploy = async () => {
try{
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    console.log('Attempting to deploy from accounts 0 ' + accounts[0])
    const result = await new web3.eth.Contract(JSON.parse(interface)).
        deploy({ data:'0x'+bytecode })
        .send({ gas: 4000000, from: accounts[0] });
    console.log('contract is deployed ' + result.options.address);
}
catch(err){
    console.log(err)
}
}
deploy();

