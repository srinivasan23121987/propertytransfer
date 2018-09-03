import web3 from './web3';
import CampaignFactory from './build/PropertyTransfer.json';
const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface),
    '0x68d34761EF8207c8C09c51fcbF0240535d975C27')
    export default instance;
