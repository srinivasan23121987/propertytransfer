pragma solidity ^0.4.11;

contract PropertyTransfer{
    
    uint public totalProperty;
    address public authority;
    mapping(string =>bool) soldStatus;
    constructor() public{
        authority=msg.sender;
    }
    Property  propstruct;
    modifier onlyOwner(){
        require(authority==msg.sender);
        _;
    }
    struct Property{
        string ownerName;
        address addr;
        mapping(string =>bool) details;
        mapping(string => bool) approved;
        address soldTo;
    }
    Property[] public properties;
    function getPropertySoldStatus(address addr,string name)onlyOwner public view returns(bool){
        for (uint i=0;i<properties.length;i++){
        if(properties[i].addr==addr){
            Property storage props=properties[i];
            return props.details[name];
        }
        }
    }
    function getPropertyDetails(uint index,string propname)public view returns(string,address,bool,bool){
        Property storage  props=properties[index];
        return (props.ownerName,props.addr,props.details[propname],props.approved[propname]);
    }
    
    function TransferProperties(address trfrAddress,string name)public{
         for (uint i=0;i<properties.length;i++){
             if(properties[i].addr==msg.sender && properties[i].details[name]==false){
                 Property storage props=properties[i];
                props.soldTo=trfrAddress;
                 props.details[name]=true;
             }
         }
    }
    function ApproveProperty(uint index,string propname)onlyOwner public{
        if(properties[index].soldTo==address(0) && properties[index].details[propname]==true && properties[index].approved[propname]==false)return;
        Property storage props=properties[index];
        props.approved[propname]=true;
    }
    function listProperty() public view returns(uint){
        return properties.length;
    }
    function addProperty(string ownerName,address owner,string name)onlyOwner public{
        if(owner==authority) return;
        soldStatus[name]=false;
        Property memory  prop;
        prop.ownerName=ownerName;
        prop.addr=owner;
        properties.push(prop);
        Property storage  props=properties[properties.length-1];
        props.details[name]=false;
        props.approved[name]=false;
    }
    
}