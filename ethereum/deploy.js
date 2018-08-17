const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');
const compiledCampaign = require('./build/Campaign.json');

const provider = new HDWalletProvider(
  'slim size car confirm opera desk box cave lottery unfair defy adult',
  'https://rinkeby.infura.io/3041d901a0144ab680d4f1fb55c5b0d0'
);

const web3 = new Web3(provider);

const deploy = async () => {
  try {

    const accounts = await web3.eth.getAccounts();
    console.log('test deploy account', accounts[0]);
  
    const result = await new web3.eth.Contract(
      JSON.parse(compiledFactory.interface)
    )
      .deploy({ data: '0x' + compiledFactory.bytecode }) // 要加 0x 不然不會被認為是一連串的 bytes
      .send({ gas: '1000000', from: accounts[0] });
    

    console.log('contract deploy to', result.options.address);
  } catch (err) {
    console.log(err);
  }
};
deploy();