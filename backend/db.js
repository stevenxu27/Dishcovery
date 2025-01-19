import dotenv from 'dotenv'; // ES Module syntax for dotenv
import { MongoClient } from 'mongodb'; // ES Module syntax for MongoDB client

dotenv.config(); // Load environment variables from .env (no change here)

// Replace with your MongoDB URI
const uri = process.env.MONGODB_URI || 'mongodb+srv://mongo:mongo@audiosamples.oot7o.mongodb.net/';

// MongoDB client initialization
async function connectToMongoDB() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected to MongoDB');

    // Access your database and collection
    const db = client.db('your_database_name');
    const collection = db.collection('your_collection_name');

    // Set up a change stream to listen for changes
    const changeStream = collection.watch();

    console.log('Watching for changes...');

    // Event listener for change events
    changeStream.on('change', (change) => {
      console.log('Change detected:', change);
      // Add your custom logic here to handle the change
      // For example, pulling new data and processing it
      if (change.operationType === 'insert') {
        console.log('New document inserted:', change.fullDocument);
        // You can process the newly inserted data here
      }
    });

  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

// Start the script
connectToMongoDB();