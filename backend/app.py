import json
import requests
from flask import Flask, jsonify

app = Flask(__name__)

# Bring in api key
with open('../backend/config.json', 'r') as f:
    config = json.load(f)

api_key = config['api_key']

#@app.route('/api/weather')
#def get_weather():
    # Code to fetch weather data goes here
print('We are in!')
url = "https://www.ncdc.noaa.gov/cdo-web/api/v2/stations"

headers = {
    "token": api_key,
    "Accept": "application/json"
}

params = {
    "locationid": "FIPS:37",  # Location ID for North Carolina
    "startdate": "2023-04-17",
    "enddate": "2023-04-18"
}

response = requests.get(url, headers=headers, params=params)
print(response.status_code)
if response.status_code == 200:
    weather_data = response.json()
    print(weather_data)
else:
    print("Request failed with status code", response.status_code)

#weather_data = {"temperature": 20, "condition": "Sunny"}
#return jsonify(weather_data)
