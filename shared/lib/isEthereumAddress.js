import Web3 from 'web3'

const isEthereumAddress = address =>
  Web3.prototype.isAddress(address)

export default isEthereumAddress
