
<p align="center"> 
  <img src="https://i.ibb.co/T0Gw27V/coollogo-com-7539143.png">
</p>

-------------
# Overview

Star Tours is a single-page application designed to intake all your favorite Star Wars characters using the Star Wars API (SWAPI). 

<p align="center"> 
  <img src="https://media.giphy.com/media/phMHahfz4jrgYvKqRO/giphy.gif" width="480" height="246" frameBorder="0" allowFullScreen>
</p>

 Star Tours utilizes Ruby on Rails in the backend and React, Redux, and NodeJS in the frontend. 
-------------

# Standout Features

## User authorization 

Users can sign in using Google OAuth, which is implemented using auth0 and knock. However, please note that for the time being, Google has blocked this app for security reasons.
In the meantime while verification is in process, users can test out the Demo login which has an account ready to use. 

## User Dashboard

Upon logging in, the user can view their profile picture, name, email, and favorite character ids. Along side this fixed sidebar, there is a list of characters fetched from the Star Wars API.


## Character Page

Clicking on the `+` allows users to add the character to their favorites, while clicking on the character name leads to an individual show page for the Star Wars character.

# Future features

## Favorite Names

Rather than saving the user's favorites characters as `ids`, favorite characters will be saved as names.

## Unblocked Google Oauth
After verfication is completed, Google Oauth should no longer be blocked.
