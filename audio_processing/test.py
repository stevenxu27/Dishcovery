# Get the database using the method we defined in pymongo_test_insert file
from audio_database import get_database
dbname = get_database()
# collection_name = dbname["audio_samples"]

# audio_sample_1= {
#   "item_name" : "Bread",
#   "quantity" : 2,
#   "ingredients" : "all-purpose flour",
#   "expiry_date" : 2
# }
# collection_name.insert_one(audio_sample_1)

import sounddevice as sd
import wavio

def record_audio(duration, filename, sample_rate=44100):
    """
    Records audio for a given duration and saves it to a WAV file.

    Parameters:
    - duration: Duration of the recording in seconds.
    - filename: Name of the output WAV file.
    - sample_rate: Sampling rate in Hz (default is 44100).
    """
    print(f"Recording for {duration} seconds...")

    # Record audio
    audio_data = sd.rec(int(duration * sample_rate), samplerate=sample_rate, channels=2)
    sd.wait()  # Wait until the recording is finished

    # Save the recorded audio to a WAV file
    wavio.write(filename, audio_data, sample_rate, sampwidth=2)
    print(f"Recording saved to {filename}")

if __name__ == "__main__":
    duration = 5  # Duration in seconds
    filename = "output.wav"  # Output file name
    record_audio(duration, filename)
