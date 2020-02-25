# GLITTER

## Description/Elevator Pitch
GLITTER is a lifestyle application and notetaking dashboard. It utilizes React.js for the user-end, Mongo DB for the server-end, Express.js for routing, and numerous Node.js packages throughout. The utiility of GLITTER lays in its simplicity of being a "chillout" zone for users. Its primary purpose is to provide users a space to type out their fondest ideas pertaining to travel, irrespective of how close to or far from reality those ideas are. Additionally, it has two "random-array" features aimed towards providing users with additional ideas, should they want new ideas for where to travel or ways to change up their day-to-day routines.

## Motivation/User Story:
AS A person with hopes for a fun life,

I WANT TO have a platform where I can daydream "out loud",

SO I CAN have my own, private outlet to edify "what could be".

----

"Never quit your day dream." - Anon.

"Nothing is impossible, the word itself says 'I'm possible'!" - Audrey Hepburn

"The future belongs to those who believe in the beauty of their dreams." - Elanor Roosevelt

## Responsibiliites

Server-End:
The server-end of GLITTER needed to consist of a database which stored user-created notes; I accomplished this through the use of Mongo DB (https://www.mongodb.com). I set up routing in my application which allows users to (1) create new notes (and post them to a specific section on the front-end of the application), (2) get existing notes from the database associated with their username (which are automatically loaded on the front-end upon their logging in), and (3) delete notes from the database collection associated with their username. Through the use of vanilla Javascript functions as well as React.js componentizing, I was able to create onClick events for note-loading, note-writing, and note-deleting which connected the server-side functionality to the user-end functionality.

User-End:
The front-end of my application needed first-and-foremost to match the aesthetic and vibe of the space I was trying to create. I began by finding a desirable, open-source image to use as my page's background. After having selected my app's background image as well as a CSS library (https://bulma.io), I decided to utilize the proportional-column feature that Bulma offers. Applying the class name "column is-one-third" to each of the three main columns on the note page, I was able to have the three distinct columns currently being displayed on the main webpage. Through the use of color-pickers, I selected hexcode-specific shades to use for my column colors (and text colors) which compliment colors from the background image. In addition to my color and layout choices, I utilized open-source gifs from GIPHY (https://www.giphy.com) and 

New Technologies:
- 

Databases:
- Mongo DB <linkhere>

Database workbench:
- Robo 3T

## Challenges

## Directions for Future Development


## Screenshots

![App Screenshot](./public/assets/1.jpg "Picture of Website")
![App Screenshot](./public/assets/1.jpg "Picture of Website")
![App Screenshot](./public/assets/1.jpg "Picture of Website")


## Links

GH pages: <https://pmahalan.github.io/GLITTER/>

GH repository: <https://github.com/pmahalan/GLITTER>