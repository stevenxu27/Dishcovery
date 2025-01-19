import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();
  
const uri = process.env.MONGODB_URI || 'mongodb+srv://mongo:mongo@audiosamples.oot7o.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export default async function handler(req, res) {
  try {
    await client.connect();
    const db = client.db('audio_samples');
    const collection = db.collection('audio_samples');

    // Find the most recent document, sorting by _id in descending order (newest first)
    const mostRecentDocument = await collection.find().sort({ _id: -1 }).limit(1).toArray();

    // Check if a document was found
    if (mostRecentDocument.length > 0) {
      res.status(200).json(mostRecentDocument[0]); // Send the most recent document as JSON response
    } else {
      res.status(404).json({ error: 'No documents found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to connect to MongoDB' });
  } finally {
    await client.close();
  }
}

// import dotenv from 'dotenv';
// import { MongoClient } from 'mongodb';
// import { EventEmitter } from 'events'; // Import EventEmitter

// dotenv.config();

// const uri = process.env.MONGODB_URI || 'mongodb+srv://mongo:mongo@audiosamples.oot7o.mongodb.net/';
// const eventEmitter = new EventEmitter(); // Create an event emitter

// async function connectToMongoDB() {
//   const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB');

//     const db = client.db('audio_samples');
//     const collection = db.collection('audio_samples');

//     const changeStream = collection.watch();
//     console.log('Watching for changes...');

//     changeStream.on('change', (change) => {
//       console.log('Change detected:', change);

//       if (change.operationType === 'insert') {
//         console.log('New document inserted:', change.fullDocument);

//         // Emit an event with the new document
//         eventEmitter.emit('newDocument', change.fullDocument);
//       }
//     });

//   } catch (err) {
//     console.error('Error connecting to MongoDB:', err);
//   }
// }

// // Start the MongoDB connection
// connectToMongoDB();

// export { eventEmitter, connectToMongoDB }; // Export the event emitter
