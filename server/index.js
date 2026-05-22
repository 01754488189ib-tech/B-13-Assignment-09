const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require('express');
const dontenv = require('dotenv');
const cors = require('cors');
dontenv.config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = process.env.MONGO_URI;

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        const db = client.db("Pet-Adoption-Platform");
        const petCollection = db.collection("pets");

        app.get('/pets', async (req, res) => {
            const result = await petCollection.find().toArray();
            res.json(result);
        });

        app.post('/pets', async (req, res) => {
            const petData = req.body;
            console.log(petData);
            const result = await petCollection.insertOne(petData);
            res.json(result);
        });

        app.get('/pets/:id', async (req, res) => {
            const id = req.params.id;
            const result = await petCollection.findOne({ _id: new ObjectId(id) });
            res.json(result);
        });


        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Server is running fine!');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});