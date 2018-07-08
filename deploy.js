const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'throw memory cereal derive crater share stove hurry goose effort pigeon physical',
    'https://rinkeby.infura.io/U9c9ImzwoAGXFVpAhmW5'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from Account ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi There!'] })
        .send({ gas: '1000000', from: accounts[0] })
        .catch((err) => console.log('Insufficient funds'));
        
    if (result != null)
    {
        console.log('Contract deploy to ', result.options.address);
    }
};
deploy();
