
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Akanksha:Maniyari@cluster0.0muw2.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(async(err) => {
    if(!err){
        console.log("DB connection successful")
        const collection = client.db("test").collection("devices");
        const result = await collection.find().toArray()
        console.log(result)
    }else{
        console.log("DB connection failed ")
    }
});





function getData(second){
    return new Promise((resolve,reject)=>{
        if(second > 5){
            reject("promise rejected because time taken is more than 5 second")
        }else{
            setTimeout(()=>{
                resolve(`setTimeout executed after ${second} seconds`);
            },second * 1000)
        }
    })
}
async function start(){
    // let response = await getData(2);
    let response = await getData(10);
    console.log(response);
    let response1 = await getData(3);
    console.log(response1);
}





function getData(second){
    return new Promise((resolve,reject)=>{
        if(second > 5){
            reject("promise rejected because time taken is more than 5 second")
        }else{
            setTimeout(()=>{
                resolve(`setTimeout executed after ${second} seconds`);
            },second * 1000)
        }
    })
}
async function start(){
    // let response = await getData(2);
    try{
        let response = await getData(10);
        console.log(response);
        let response1 = await getData(3);
        console.log(response1);
    }catch(err){
        console.log(err);
    }   
}
start();






const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Akanksha:Maniyari@cluster0.0muw2.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
function getCollection(){
    return new Promise((reslove,reject)=>{
client.connect(async(err) => {
    if(!err){
        console.log("DB connection successful")
        const collection = client.db("test").collection("devices");
        reslove(collection)
    }else{
        reject(err)
    }
})
});
}
const express = require("express")
const app = express();
const port = 8080;
app.get("/getUser",async(req,res)=>{
    let collection = await getCollection()
    let userData = await collection.find().toArray()
    res.json(userData);
})
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})





const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Akanksha:Maniyari@cluster0.0muw2.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
function getCollection(){
    return new Promise((reslove,reject)=>{
client.connect(async(err) => {
    if(!err){
        console.log("DB connection successful")
        const collection = client.db("test").collection("devices");
        reslove(collection)
    }else{
        reject(err)
    }
})
});
}
const express = require("express")
const app = express();
const port = 8080;
app.use(express.json())
app.get("/getUser",async(req,res)=>{
    let collection = await getCollection()
    let userData = await collection.find().toArray()
    res.json(userData);
})

app.post("/registerUser",async(req,res)=>{
    let collection = await getCollection()
    let result = await collection.insertOne(req.body)
    res.json(result)
})
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})









const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
const uri = "mongodb+srv://Akanksha:Maniyari@cluster0.0muw2.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
function getCollection(){
    return new Promise((reslove,reject)=>{
client.connect(async(err) => {
    if(!err){
        console.log("DB connection successful")
        const collection = client.db("test").collection("devices");
        reslove(collection)
    }else{
        reject(err)
    }
})
});
}
const express = require("express")
const app = express();
const port = 8080;
app.use(express.json())
app.get("/getUser",async(req,res)=>{
    let collection = await getCollection()
    let userData = await collection.find().toArray()
    res.json(userData);
})

app.post("/registerUser",async(req,res)=>{
    let collection = await getCollection()
    let result = await collection.insertOne(req.body)
    res.json(result)
})

app.put("/updateUser/:userID",async(req,res)=>{
    let conllection = await getCollection()
    let result = await conllection.updateOne({_id : ObjectId(req.params.userID)},{$set : req.body})
    res.send(result);
})

app.delete("/deleteUser/:userId", async(req,res)=>{
    let collection = await getCollection()
    let result = await collection.deleteOne({_id : ObjectId(req.params.userId)})
    res.send(result);
})


app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})




