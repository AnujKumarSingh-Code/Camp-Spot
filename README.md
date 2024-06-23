# Camp-Spot
A Web-Application for Adding places that can be used a camp grounds,resting points,adventure location . This website is designed to provide users with a platform to discover, add, edit, and delete campgrounds around the world. With an interactive map and authentication system, users can leave reviews and ratings for different campgrounds, helping others make informed decisions about their travel plans.

The map feature allows users to visualize the location of each campground and get a sense of its proximity to other points of interest. They can zoom in and out of the map to get a better view of the surrounding area and use filters to narrow down their search based on specific criteria.

One of the unique features of this website is its focus on user-generated content. By allowing users to add and review campgrounds, the site fosters a sense of community and encourages people to share their experiences with others. This creates a valuable resource for travelers, helping them find the best camping spots around the world.


# Run Locally
Clone the project

npm init -y

node seeds/index.js

node app.js

Database : MongoDB 6.0.4

# Tech Stack ⚒️
Client: HTML/CSS/BootStrap, EJS for templating

Server: Node, Express, MongoDB , mongoose, Passport library, JOI library, MapTiler

Development: Nodemon, Postman, MongoDB Compass, VS Code, Git, GitHub

# Features 🔅💎🔅
Authentication 🔐.
Used Passport library for secure authentication.
Password is not 🚫 stored as plain text.
Hashed Password 🔑 is stored in DataBase along with Salt 🧂
Before Performing any data manipulation, the user needs to be logged in 🪪
Three 3️⃣ Layer Data Validation
Client Side 👤 : Bootstrap Validation
Server Side ⚙️ : MongoDB DataValidatio + JOI library
Interactive Map 🗺️
Cluster Map 🌍 on Front Page
Location Preview 📌 on Individual Display Page
Forword Geocoding ➡️ 🌏 ⬅️
Coordinate 📌 are been geocoded by the simple text location input, Easy to use by the user

Forwrod Geocoding : Forward geocoding is the process of converting a location description, such as a street address or city name, into geographic coordinates that can be used to plot the location on a map. In the Camp Spot web development project, I implemented forward geocoding to make it easier for users to add campground locations to the database.

Here are the images of the project-
![Screenshot 2024-06-23 21 28 22](https://github.com/AnujKumarSingh-Code/Camp-Spot/assets/133045218/d5e46311-deb6-418a-bce4-82932b2a8296)


![Screenshot 2024-06-23 21 28 43](https://github.com/AnujKumarSingh-Code/Camp-Spot/assets/133045218/2f5d4418-bc5f-4e85-932a-5db43837ee7b)


![Screenshot 2024-06-23 21 30 05](https://github.com/AnujKumarSingh-Code/Camp-Spot/assets/133045218/b4230aaa-f25f-404a-86a2-bb5bb5d87e0a)


![Screenshot 2024-06-23 21 30 17](https://github.com/AnujKumarSingh-Code/Camp-Spot/assets/133045218/c872a042-d12e-44e5-8d7a-fba0c6d6abae)


![Screenshot 2024-06-23 21 30 29](https://github.com/AnujKumarSingh-Code/Camp-Spot/assets/133045218/641910d2-5aa1-4211-9236-8e2df175efba)







Enjoy Camping!






