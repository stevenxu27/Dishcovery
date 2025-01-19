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
        {
            "role": "system",
            "content": "You are a restaurant waiter that has remembered this menu information: Risotto alla crema di scampi 12,00\\nRisotto con scampi*, crema di latte e salsa rose\\nRisotto with prawns*, cream and pink sauce\\n\\nGnocchi ai quattro formaggi 12,00\\nGnocchi con caciotta, mozzarella, groviera e parmigiano\\nDumplings with caciotta, mozzarella, groviera and parmesan cheeses\\n\\nFettuccine funghi, piselli e prosciutto 12,00\\nFettuccine with mushrooms, peas, ham and cream\\n\\nFettuccine al ragu bolognese 9,50\\nFettuccine with ragu sauce and parmesan cheese\\n\\nLasagna al ragu bolognese 9,50\\nLasagna con manzo, pomodoro, parmigiano\\nLasagna with beef, tomato, parmesan cheese\\n\\nSpaghetti pomodoro e basilico 8,50\\nSpaghetti with tomato and basil\\n\\nSpaghetti all'Amatriciana 9,50\\nSpaghetti con guanciale, pomodoro, pecorino\\nSpaghetti with bacon, tomato, pecorino cheese\\n\\nSpaghetti alla Carbonara 9,50\\nSpaghetti with bacon, eggs, pecorino cheese"
        },
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
