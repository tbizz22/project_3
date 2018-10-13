const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/loopfeed", {
        useNewUrlParser: true
    }
);

const featureSeed = [{
        title: 'Search',
        team: 'Alpha',
        status: 'going great',
        image: 'image1.png',
        createdAt: new Date(Date.now()),
        description: 'This is the description for this feature'
    },
    {
        title: 'CFL',
        team: 'Bravo',
        status: 'going Really great',
        image: 'image2.png',
        createdAt: new Date(Date.now()),
        description: 'This is the description for this feature'
    }

];

db.Feature
    .remove({})
    .then(() => db.Feature.collection.insertMany(featureSeed))
    .then(data => {
        console.log(data)
        console.log(data.insertedCount + " records inserted!");
        seedUser()
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });


const userSeed = [{
        userName: 'Tyler',
        password: '123456',
        firstName: 'Tyler',
        lastName: 'Bisbee',
        email: 'tyler.bisbee@gmail.com',
        role: 'Admin',
        createdAt: new Date(Date.now())
    },
    {
        userName: 'Lucy',
        password: '123456',
        firstName: 'Lucy',
        lastName: 'Bisbee',
        email: 'Doggio@gmail.com',
        role: 'User',
        createdAt: new Date(Date.now())
    }
]

seedUser = () => {
    db.User
        .remove({})
        .then(() => db.User.collection.insertMany(userSeed))
        .then(data => {
            console.log(data)
            console.log(data.insertedCount + " records inserted!");
            process.exit(0);
        })
        .catch(err => {
            console.error(err);
            process.exit(1);
        });
}