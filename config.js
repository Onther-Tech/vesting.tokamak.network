const config = {
  'mainnet': {
    'baseURL': 'https://dashboard-api.tokamak.network',
    'prefixTransactionHash': 'https://etherscan.io/tx/',
    'prefixAddress': 'https://etherscan.io/address/',
    'network': '1',
    'contractAddress': {
      'TON': '',
      'Swapper': '',
      'StrategicTON': {
        'token': '0x2801265c6f888f5a9e1b72ee175fc0091e007080',
        'vesting': '',
      },
      'PrivateTON': {
        'token': '0x34D70fe2F63D2404c979cE2A7B101c9C840a63d7',
        'vesting': '',
      },
      'SeedTON': {
        'token': '0x2801265c6f888f5a9e1b72ee175fc0091e007080',
        'vesting': '',
      },
      'MarketingTON': {
        'token': '0x8Ae43F11DDd3fac5bbD84ab0BA795E1e51b78df7',
        'vesting': '',
      },
    },
  },
  'rinkeby': {
    'baseURL': 'https://dashboard-api.tokamak.network/rinkeby',
    'prefixTransactionHash': 'https://rinkeby.etherscan.io/tx/',
    'prefixAddress': 'https://rinkeby.etherscan.io/address/',
    'network': '4',
    'contractAddress': {
      'SeedTON':'0x0764C973864d3123D4547ab852E60b60f7043d95',
      'PrivateTON':'0xE16509e2A0499bA66454CFA637Bc8431FBB3CFa9',
      'StrategicTON':'0x56f001506eE738A1d6BF09Ce5E0287d0100fD3aa',
      'MarketingTON':'0x134D1ebfA2DCc327E30276DeF36e9A5503d33d9E',
      'DaoTON':'0xF2A8D7d24647823AdefAb8006Fb7a7a37D769870',
      'TeamTON':'0x41C9fCBB127Ee1963342D2E7eF3596B525ACCF02',
      'AdvisorTON':'0x4b4E8aE7b8e570994bDD10A448035EccA0485d45',
      'BusinessTON':'0x199f59936Bcedf864CDE36870D72ccA67753929B',
      'ReserveTON':'0x8DcFea5aa12E5dc6B38fEE7c051B8319051e8d87',
      'TON':'0x94b2642eAef7c44839497e56fF65e52Fb5Be29BE',
      'StepSwapper':'0xFd4ef92AC94bb8E98A30c3Cc36c8049647cb42af',
      'VestingSwapper':'0xbdcc74bbb1B3F100fd0880021B7560F3D4D6211F',
      'TONVault':'0xB91CF4b34264e9320E0251bC7d492062F087332b',
      'Burner':'0x358B15726B813dF1186C38F5DbCd712260c273d4',
    },
  },
  'development': {
    'baseURL': 'http://127.0.0.1:9002',
    'prefixTransactionHash': 'https://rinkeby.etherscan.io/tx/',
    'prefixAddress': 'https://rinkeby.etherscan.io/address/',
    'network': '1337',
    'contractAddress': {
      'TON': '',
      'Swapper': '',
      'StrategicTON': {
        'token': '',
        'vesting': '',
      },
      'PrivateTON': {
        'token': '',
        'vesting': '',
      },
      'SeedTON': {
        'token': '',
        'vesting': '',
      },
      'MarketingTON': {
        'token': '',
        'vesting': '',
      },
    },
  },
};

const query = window.location.search;
const params = new URLSearchParams(query);
const network = params.get('network');
export function getConfig () {
  switch (network) {
  case 'rinkeby':
    return config.rinkeby;
  case 'development':
    return config.development;
  default:
    // return config.mainnet;
    return config;
  }
}

export function getLink (type) {
  // TODO: migrate to config/default.json
  if (type === 'use') {
    return 'https://docs.tokamak.network/';
  } else if (type === 'register') {
    return 'https://docs.tokamak.network/';
  }
}
