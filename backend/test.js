import { useEffect } from "react";
import { eventEmitter, connectToMongoDB } from "../pages/api/db.js"; // Adjust the path if needed

function LogChangesComponent() {
  useEffect(() => {
    connectToMongoDB(); // Ensure connection is established if not already done

    // Listen for the new document event and print to console
    eventEmitter.on('newDocument', (document) => {
      console.log('New document received:', document); // Print the output
    });

    return () => {
      eventEmitter.off('newDocument'); // Clean up the event listener
    };
  }, []);

}

LogChangesComponent;
