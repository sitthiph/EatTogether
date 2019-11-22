![Eat Together](https://i.ibb.co/cJKF2jv/Untitled.png)

# Eat Together
Eat Together currently in its development phrase and is currently not working.
It is deployed on Firebase. Please check it out [here](https://eattogether-aa042.firebaseapp.com).

## Overview
Using the EatStreet.com API, we created an easy way to order within a group setting without everyone needing to be in the same place and share the same device to place the order. All you have to do is to visit the website to create a new order, which will generate a grub-key that you can distribute to anyone who wants to go into the order. For example, if your coworker were to create an order and the key generate is "jah82n5-o891023", all You would need to do is go onto the website using the grub-key and select the food I would like to purchase. This will be added to the group order which is displayed on the dashboard of the website. 

## How we built it
We built this project using FERN Stack (Firebase, Express, React/Redux, NodeJS). By using Firebase, we have access to the instant response of the changes in the database, therefore making the state management more fluent and more efficient. We've also implemented GraphQL instead of RESTful due to the perfect combination in keeping HTTP request packages small, resulting in a more fluent and faster front-end response.

## Challenges we ran into
Connecting the backend to the frontend was dificult to do because of the limitations of our API.

## What's next for Eat Together
In the future, we want to utilize an account feature to only allow one person to checkout, and give easier access to creating group orders. We want to implement saved groups that could log in and ping to create a new order and allow everyone to join in without using the code each time.

### Technology Used

* React/Redux
* Firebase
* GraphQL
* NodeJS
* Bootstrap
* NodeJS
* PassportJS
