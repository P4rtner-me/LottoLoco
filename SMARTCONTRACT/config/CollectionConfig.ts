import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'LottolocoCardsT01',
  tokenName: 'LOTTOLOCO CARDS T 01',
  tokenSymbol: 'LOTTOLT01',
  hiddenMetadataUri: 'ipfs://QmdxcUfx74BfsanK1NvbSNM6N6yiZMnpmWWt57RyoWTYpz/hidden.json',
  maxSupply: 1000,
  whitelistSale: {
    price: 0.0,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.0,
    maxMintAmountPerTx: 1,
  },
  publicSale: {
    price: 0.01,
    maxMintAmountPerTx: 1,
  },
  contractAddress: '0x1DD8749917585FCd047235B27C8A4c8eFF1F1884',
  marketplaceIdentifier: 'lottolt01',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
