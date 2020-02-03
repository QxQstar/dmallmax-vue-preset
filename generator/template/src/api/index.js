const apiContext = require.context('./',true,/index\.js$/);
let api = {}
apiContext.keys().forEach(key => {
    // 如果是 api 根目录的 index.js 不做处理
    if(key.startsWith('./index')) {
        return
    }
    const apiModule = apiContext(key);

    api = Object.assign({},api,apiModule);
})



export  { api }

