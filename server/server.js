const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());



mongoose.connect('mongodb+srv://jenya:12111987@cluster0-mtwas.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (err) throw err;
    console.log('DB is connected');
});

const messagesSchema = mongoose.Schema({
    name: {
        type: String
    },
    message: {
        type: String,
        require: true
    }
})
const Message = mongoose.model('Message', messagesSchema);



app.get('/', (req, res) => {
    res.send(`server running Port:3001`);
});

app.post('/message', (req, res) => {
    const messageItem = new Message(req.body);
    messageItem.save((err, data) => {
        if (err) return res.status(400).send('failed to save data');
        res.status(200);
        res.end();
    })
});

app.get('/messages', (req, res) => {
    Message.find({}, (err, messages) => {
        if (err) return res.status(400).send('failed to get data');
        res.json(messages);
    })

})

app.listen(3001, () => console.log(`server running Port:${3001}`));