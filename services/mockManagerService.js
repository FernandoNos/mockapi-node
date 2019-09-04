var mocks=[]

function saveMock(m){
    mocks.push(m)
    console.log(mocks)
    return m
}

function getMock(path){
    console.log(mocks)
    if(mocks.length > 0){
         result = mocks.filter(p => p.path == path)
         if(result.length > 0)
            return result[0].response
        return null
    }
    return null
}

function getAllMocks(){
    return mocks
}

module.exports.saveMock = saveMock
module.exports.getMock = getMock
module.exports.getAllMocks = getAllMocks