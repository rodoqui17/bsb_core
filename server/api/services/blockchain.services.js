const Tx = require('ethereumjs-tx').Transaction
const Web3 = require("web3");
import { contract_address, ABI } from '../contracts/banitoken';

//const web3 = new Web3(process.env.PROVIDERETH)
//const web3 = new Web3(process.env.PROVIDERLACCHAIN)
//const account = process.env.ACCOUNT;
//var privateKey = process.env.PVKEY;



// variables LOCALES GANACHE
const web3 = new Web3("HTTP://127.0.0.1:7545");
const account = ("0xDef2aD70e887009c3F0E461Da576007ff267a09e");
const privateKey = ("ae843743066014b37db9d9facde93d2eba6debbddb5ae4abe1a8fcab13b73ca1");
const storageContract = new web3.eth.Contract(ABI, contract_address);

class BlockchainServicies {

  createuserbani = async (id, nombre, role, address) => {
    console.log(id, nombre, role, address);
    const networkId = await web3.eth.net.getId();
    const tx = storageContract.methods.creaUser(id, nombre, role, address);
    const gas = await tx.estimateGas({ from: account });
    const gasPrice = await web3.eth.getGasPrice();
    const data = tx.encodeABI();
    const nonce = await web3.eth.getTransactionCount(account);
    const signedTx = await web3.eth.accounts.signTransaction(
      {
        to: contract_address,
        data,
        gas: 300000,
        gasPrice,
        nonce,
        chainId: networkId
      },
      privateKey
    );
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log(receipt.transactionHash);
    return receipt.transactionHash;
  }

  storeData = async (data_store, cuenta, llave) => {
    console.log(data_store);
    const networkId = await web3.eth.net.getId();
    const tx = storageContract.methods.store(data_store);
    const gas = await tx.estimateGas({ from: cuenta });
    const gasPrice = await web3.eth.getGasPrice();
    const data = tx.encodeABI();
    const nonce = await web3.eth.getTransactionCount(cuenta);
    const signedTx = await web3.eth.accounts.signTransaction(
      {
        to: contract_address,
        data,
        gas: 300000,
        gasPrice,
        nonce,
        chainId: networkId
      },
      llave
    );
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log(receipt.transactionHash);
    storageContract.methods.retrieve().call()
      .then(console.log);
    return receipt.transactionHash;
  }

  getData() {
    return storageContract.methods.retrieve().call();



  }

  async getBlockNumber() {
    const response = web3.eth.getBlockNumber(function (error, result) {
      console.log(result)
      return result;
    })
    return Promise.resolve(response);
  }

  create_account(id) {
    const new_account = web3.eth.accounts.create();
    return Promise.resolve(new_account);
  }

  balance(address) {
    console.log(address);
    const add = web3.eth.getBalance(address);
    return Promise.resolve(add);
  }

  getTransaction(transaction) {
    const tx = web3.eth.getTransaction(transaction);
    return Promise.resolve(tx);
  }

}


export default new BlockchainServicies();
