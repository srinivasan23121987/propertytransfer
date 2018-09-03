const path=require('path');
const fs=require('fs');
const fsextra = require('fs-extra');
const buildpath = path.resolve(__dirname, "build");
fsextra.removeSync(buildpath);

const solc=require('solc');
const inboxPath=path.resolve(__dirname,"contracts","propertytransfer.sol");
const source=fs.readFileSync(inboxPath,"utf8");
module.exports=solc.compile(source,1).contracts[":PropertyTransfer"];
const output=solc.compile(source,1).contracts;
fsextra.ensureDirSync(buildpath);
for (let contract in output) {
    myString = contract.slice(1)
    fsextra.outputJSONSync(
        path.resolve(buildpath, myString + ".json"),
        output[contract]
    );
}
