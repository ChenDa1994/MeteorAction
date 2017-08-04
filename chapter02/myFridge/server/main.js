import { Meteor } from 'meteor/meteor';
import '../lib/collection/Products.js';
// Products = new Mongo.Collection("products");

Meteor.startup(function () {
    Products.remove({});

    // fill the database with some products
    Products.insert({
      name: 'Milk',
      img: '/milk.png',
      place: 'fridge'
    });

    Products.insert({
      name: 'Juice',
      img: '/juice.png',
      place: 'fridge'
    });

    Products.insert({
      name: 'Bread',
      img: '/bread.png',
      place: 'supermarket'
    });

    Products.insert({
      name: 'Banana',
      img: '/banana.png',
      place: 'supermarket'
    });
  });
