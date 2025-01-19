import sounddevice as sd
import wavio
import os   

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

    current_directory = os.path.dirname(os.path.abspath(__file__))

    # Define the filename
    filename = "output.wav"

    # Combine the current directory with the filename to get the full path
    
    full_path = os.path.join(current_directory, filename)
    record_audio(duration, full_path)
        
