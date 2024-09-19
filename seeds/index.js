const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');
const { coordinates } = require('@maptiler/client');


mongoose.connect(process.env.DB_URL );



main().then (() => {
  console.log("CONNECTION  database OPEN")
}) 

main().catch(err => 
  {
    console.log("Oh NO ERROR")
    console.log(err)
  });

async function main() {
  await mongoose.connect(process.env.DB_URL);

}

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 400; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({

          //// MY author id cloudianry
            author : '6673d67a71189e39f0d629a3',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            // image: 'https://source.unsplash.com/collection/483251',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
            price,
            geometry:{
              type: 'Point',
              coordinates: [
                cities[random1000].longitude,
                cities[random1000].latitude,

              ]
            },
            images:  [
              {
                
                url: 'https://res.cloudinary.com/dvqnpqgwc/image/upload/v1719049419/YelpCamp/t0iymurdfhkbhqdb6k7q.jpg',
                filename: 'YelpCamp/nnwtlca4smrzjc1ujmgo'
              },
              {
                
                url: 'https://res.cloudinary.com/dvqnpqgwc/image/upload/v1719049419/YelpCamp/t0iymurdfhkbhqdb6k7q.jpg',
                filename: 'YelpCamp/otnp70y5konfg1bgdbva'
              }
            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})
