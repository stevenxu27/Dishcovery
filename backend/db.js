import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import { EventEmitter } from 'events'; // Import EventEmitter

dotenv.config();

const uri = process.env.MONGODB_URI || 'mongodb+srv://mongo:mongo@audiosamples.oot7o.mongodb.net/';
const eventEmitter = new EventEmitter(); // Create an event emitter

async function connectToMongoDB() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('audio_samples');
    const collection = db.collection('audio_samples');

    const changeStream = collection.watch();
    console.log('Watching for changes...');

    changeStream.on('change', (change) => {
      console.log('Change detected:', change);

      if (change.operationType === 'insert') {
        console.log('New document inserted:', change.fullDocument);

        // Emit an event with the new document
        eventEmitter.emit('newDocument', change.fullDocument);
      }
    });

  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

// Start the MongoDB connection
connectToMongoDB();

export { eventEmitter }; // Export the event emitter
