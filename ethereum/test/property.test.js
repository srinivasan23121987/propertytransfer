const assert=require('assert');
const ganache=require('ganache-cli');
const Web3=require('web3');
const web3=new Web3(ganache.provider());
process.setMaxListeners(0);
require('events').EventEmitter.defaultMaxListeners = 0;

const {interface,bytecode}=require('../compile');
// console.log(interface);
// console.log(bytecode)
let accounts;
let inbox;
beforeEach(async()=>{
    accounts=await web3.eth.getAccounts();
    // console.log(accounts);
   inbox= await new web3.eth.Contract(JSON.parse(interface)).deploy({data:bytecode,arguments:[]})
    .send({from:accounts[0],gas:'2000000'})
    console.log('srini');
  
})

describe('Inbox',()=>{
    it('Deploys a contract',()=>{
        // console.log(inbox.methods)
    })
    it('get the Property Authorizer',async ()=>{
        const authorizer=await inbox.methods.authority().call();
        // console.log(authorizer);
        assert.ok(authorizer)
    })
    it('adding the property',async()=>{
        const addProperty=await inbox.methods.addProperty("srinivasan",accounts[1],"prop1")
        .send({from:accounts[0],gas:'3000000'})
        const addProperty1=await inbox.methods.addProperty("srinivasan",accounts[2],"prop2")
        .send({from:accounts[0],gas:'3000000'})
        console.log(addProperty1)
        const listProperty=await inbox.methods.listProperty()
        .call()
        console.log(listProperty)
        const properties=await inbox.methods.properties(0).call();
        console.log(properties);
        const transfer=await inbox.methods.
        TransferProperties(accounts[3],"prop1").send({from:accounts[1],gas:'3000000'});
        const listoperties=await inbox.methods.properties(0).call();
        const approveProperty=await inbox.methods.ApproveProperty(0,"prop1").send({from:accounts[0],gas:'3000000'});
        console.log(approveProperty);
        const getProperty=await inbox.methods.getPropertyDetails(0,"prop1").call();
        console.log(getProperty);

    })
    // it('adding the property',async()=>{
        
    // })
    // it('get property details',async()=>{
    //     try{
    //     const addProperty=await inbox.methods.listProperty()
    //     .call()
    //     console.log(addProperty)
    //     }
    //     catch(e){
    //         console.log(e)
    //     }
    // })
    // it('Total Properties',async ()=>{
    //     try{
    //     const properties=await inbox.methods.properties(0).call();
    //     console.log(properties);
    //     assert.ok(properties)
    //     }catch(err){
    //         assert.ok(err)
    //         console.log(err)
    //     }
    // })
    
    // it('list the property',async()=>{
    //     try{
    //     const listProperty=await inbox.methods.listProperty().call();
    //     assert.equal(listProperty, '1');
    // }catch(err){
    //     console.log(err);
    //     assert.ok(err)
    // }
    // });

})