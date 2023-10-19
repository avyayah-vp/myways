const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const messageSchema = new mongoose.Schema({
    text: String,
});

const Message = mongoose.model('Message', messageSchema);

app.get('/api/messages', async (req, res) => {
    const messages = await Message.find();
    res.send(messages);
});

app.post('/api/messages', async (req, res) => {
    const message = new Message(req.body);
    await message.save();
    res.status(201).send();
});

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));
