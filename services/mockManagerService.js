var mocks=[]

function saveMock(m){
    console.log(m)
    mocks.push(m)
    console.log(mocks)
    return m
}

function getMock(path, method){
    console.log(mocks)
    if(mocks.length > 0){
         result = mocks.filter(p => p.path == path && p.method == method)
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