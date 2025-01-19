from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv() 

# Set the environment variable
os.environ["OPENAI_API_KEY"] = os.getenv("API_KEY")

client = OpenAI()

audio_file= open("output.wav", "rb")
transcription = client.audio.transcriptions.create(
    model="whisper-1", 
    file=audio_file
)

print(transcription.text)
