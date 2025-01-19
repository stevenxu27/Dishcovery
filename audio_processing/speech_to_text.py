from openai import OpenAI
from dotenv import load_dotenv
from audio_database import get_database
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

completion = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "user", "content": transcription.text},
    ]
)

print(transcription.text)
print(completion.choices[0].message.content)

dbname = get_database()

collection_name = dbname["audio_samples"]

audio_sample_1= {
  "transcribed_text" : transcription.text,
  "response" : completion.choices[0].message.content,
  "duration" : 5,
}
collection_name.insert_one(audio_sample_1)
