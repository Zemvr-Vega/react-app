import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const PORT = 5000;
app.use(bodyParser.json());

const dummy = [
    {title: "Learn ReactJS", todo: ["React Hooks", "Redux"]}
];

app.get('/todo', (req, res) => {
    res.json(dummy);
});

app.post('/todo', (req, res) => {
    const {body} = req;
    dummy.push(body);
    res.json(dummy);
});

app.delete('/todo', (req, res) => {
    const {body: {id}} = req;
    dummy.splice(id, 1);
    res.status(200).send(dummy);
});

app.put('/todo', (req, res) => {
    const {id, body} = req;
    console.log(id, body);
});


app.listen(PORT, () => {
    console.log("Listening on port: ", PORT);
});