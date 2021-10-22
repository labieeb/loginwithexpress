const dbClient = require('mongoose');
dbClient.connect("mongodb+srv://labeeb:labeeb1234@cluster0.cn5rg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(()=>{
    console.log('successfully connect to database');
}).catch((err)=>{
    console.error('error connecting to database');
})
module.exports = dbClient;