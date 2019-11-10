# EatTogether
Using the EatStreet.com API, we created an easy way to order within a group setting without everyone having to be in the same place and all share the same device to place the order. All you have to do is to visit the website to create a new order, which will generate a grub-key that you can distribute to anyone who wants to go into the order. For example, if someone were to create an order and the key generate is "ja82n5-o891023", all I would have to do is go into the website, log in with the grub-key and select the food I would like to purchase. This will be added to the group order which is displayed on the dashboard of the website. 

## Implementation
We built this project using FERN Stack (Firebase, Express, React/Redux, NodeJS). By using Firebase, we have access to the instant response of the changes in the database, therefore making the state management more fluent and more efficiently. We've also implemented GraphQL instead of RESTful due to the perfect combination in keeping HTTP request packages small, resulting in a more fluent and faster front-end response.

## To-do
[x] - Live dashboard update with current order list and cost 

[] - Implement account based login and group accounts

[] - Secure API transactions online
