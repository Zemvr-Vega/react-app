import mongoose, { Schema } from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const PORT = 5000;
app.use(bodyParser.json());


(async () => {
    let options = {
        autoIndex: false,
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
        family: 4
    };
    const conn = await mongoose.createConnection("mongodb://localhost:27017/todo", options).asPromise();
    console.log(conn.readyState);

    const todoSchema = new mongoose.Schema({
        title: String,
        todo: Array
    });

    const todoModel = conn.model("todos", todoSchema);
    
    app.get('/todo', async(req, res) => {
        let todos = await todoModel.find();
        res.json(todos);
    });
    
    app.post('/todo', async(req, res) => {
        const {body} = req;
        let post = await todoModel.create(body);
        res.json(post);
    });
    
    app.delete('/todo', async(req, res) => {
        const {body: {_id}} = req;
        let del = await todoModel.findOneAndDelete({_id: _id});
        res.status(200).send(del);
    });
    
    app.put('/todo', async(req, res) => {
        const {_id, ...body} = req.body;
        let put = await todoModel.findOneAndUpdate({_id: _id}, body, {new: true});
        res.status(200).send(put);
    });
    
    
    app.listen(PORT, () => {
        console.log("Listening on port: ", PORT);
    });
})();