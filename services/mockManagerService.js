var mocks=[]

function saveMock(m){
    mocks.push(m)
    return m
}

function getMock(path){
    return mocks.filter(p => p.path == path)[0].response
}

function getAllMocks(){
    return mocks
}

module.exports.saveMock = saveMock
module.exports.getMock = getMock
module.exports.getAllMocks = getAllMocks