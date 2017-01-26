# Timestamp Microservice
Microservice that returns Unix timestamp and date in JSON format
[Visit App on Heroku](https://timestamp-microservice-gl.herokuapp.com/)

## User Stories

    * I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
    * If it does, it returns both the Unix timestamp and the natural language form of that date.
    * If it does not contain a date or Unix timestamp, it returns null for those properties.
## How to Use

### Add a date in either natural langauge or Unix timestamp at the end of the URL:

    /Jan 1, 2016
    /1451606400

### Results

    valid date results: {"unix":1451606400,"natural":"January 1, 2016"}
    invalid date results: {"unix":null,"natural":null}
