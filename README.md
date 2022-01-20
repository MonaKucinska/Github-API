# Github-API

> Live demo (https://condescending-hoover-90dfe1.netlify.app/)

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Room for Improvement](#room-for-improvement)

## General Information

The aim of this project is to build a simple web app. The app displays sorted repositories of a given GitHub user. The GitHub user is selected by the user of this app.

## Technologies Used

- HTML5
- CSS
- JavaScript

## Setup

The project doesn't require installing or providing any additional dependencies. The easiest way to run the project is by opening the Live Demo link provided at the top of the file.

## Usage

The usage of the app is very straightforward. The user enters the GitHub username in the text field located on top of the page. The app assumes that the user entered a valid username (one that exists on GitHub). Clicking the "search" button makes the app connect with the GitHub API and returns basic information about the profile and their public repositories. Returned repositories are sorted by the number of stars they have (from the highest amount to the lowest). Each repository is displayed on a separate card. The card contains the name of the repository, the date on which the repository was created, the main language used in the repository, and the number of stars.

The user doesn't have to clear the text field to enter a new username (the app clears the field automatically after clicking on it).

If the user enters a username as separate words (eg. "Mona Kucinska"), the program will automatically link them together and return the correct output.

GitHub allows its users to have usernames with different characters (upper and lower case letters, numbers etc.). Therefore, the app allows all kinds of input to be entered into the search bar.

## Room for Improvement

Room for improvement:

- Testing the code on browsers other than Chrome and Mozilla to ensure it works properly
