# Spelling BusyBees

My app is called Spelling BusyBees. It’s a dictionary app for kids to look up their spelling words of the week and to keep track of their previous defined words in a list format. I chose this dictionary API because it provides definitions and pronunciations for Intermediate level. In the future, I’d like to add a feature so that users can also find the synonym of the word and store previous words searches on a spelling list to review again when needed.

## Table of Contents:
- [User Stories](https://github.com/daisyy125/ga-project-2-spelling#user-stories)
- [Wireframes](https://github.com/daisyy125/ga-project-2-spelling#wireframes)
- [Planning](https://github.com/daisyy125/ga-project-2-spelling#planning-checklist)
- [Technologies](https://github.com/daisyy125/ga-project-2-spelling#technologies)
- [Installation](https://github.com/daisyy125/ga-project-2-spelling#installation)
- [Usage](https://github.com/daisyy125/ga-project-2-spelling#usage)
- [Testing](https://github.com/daisyy125/ga-project-2-spelling#testing)
- [UX Modifications/Hurdles/Unsolved problems](https://github.com/daisyy125/ga-project-2-spelling#modificationshurdlesunsolved-problems)
- [Future Add-ons](https://github.com/daisyy125/ga-project-2-spelling#future-add-ons)
- [Contribution Guidelines](https://github.com/daisyy125/ga-project-2-spelling#contribution-guidelines)
- [Credits](https://github.com/daisyy125/ga-project-2-spelling#credits)

## User Stories:

(1) Who are the users?

*Children around grades 6-8.*

(2) Why are they using the product/service?

*To define their spelling words for homework and help them study.*

(3) What are they going to do?

*Use this app as a main go-to source to define their spelling words in terminologies they understand with pronunciation help. It will also be an app that can store their previous searched words in a list form to refer back to.*

## Wireframes:
I used a free program Wireframe.cc to create my wireframes. This is to get an idea of how I want my layout to be for the main page with search bar and the definition results page.

**Main page with search bar:** https://wireframe.cc/DURNAo

![](https://github.com/daisyy125/ga-project-2-spelling/blob/master/wireframes/main_page.png)

**Definition results page:** https://wireframe.cc/4qb7oH

![](https://github.com/daisyy125/ga-project-2-spelling/blob/master/wireframes/word_page.png)

## Planning checklist:

I created a [Trello Board](https://trello.com/b/3RcbX0Ee/ga-project-2-react-app) to keep my planning organized with the project tasks, reference links, and due dates. Thanks to my Instructor Assistant for the suggestion, Esin Saribudak :purple_heart:

**Bronze version**
- [X] Search input and button to retrieve correct data from API
- [X] Display word definition correctly on results page

**Silver version**
- [ ] Add additional API for thesaurus
- [X] Mobile version
- [ ] Store previous searches

**Gold version**
- [ ] Allow user to create spelling list from previous searches
- [ ] Add sound for pronunciation
- [X] Add Jest unit tests

## Technologies:
- CSS (passed CSS Validator)
- React
- Jest & Enzyme (passed test)
- Flexbox
- API

## Installation:
- Fork repository at upper right.
- Clone/download using SSH or URL link.
- Folder ga-project-2-spelling will include the following folders/files:
    - app css file
    - public folder
        - index.html
    - src folder
        - components folder
            - nav
            - results
            - search
    - wireframes folder (images)
- Open ga-project-2-spelling folder in terminal with npm start.
- Please note that there are two different branches and that you are viewing the Master branch.

*Deployed url is listed below under "Usage".

## Usage:

https://spellingbusybees.herokuapp.com/

![](https://github.com/daisyy125/ga-project-2-spelling/blob/master/wireframes/spellingbusybee.png)

- Upon page load, the search word input field and button (labeled 'BeeFind') is available for users.
- Type in a word and click on 'BeeFind' to define the word.
- Definition will appear below the search field in a box.
- This page is also responsive, therefore the functionality on mobile devices are the same as desktop.

## Testing:

- Jest and Enzyme testing on Nav.js. Testing js is included in the component folder.
- Jest and Enzyme testing on Search.js. Testing js is included in the component folder.

## Modifications/Hurdles/Unsolved Problems

**Modifications:**
- UX: I changed the layout of the design so its a better user experience. The mocks originally had the search field near the bottom of the page but I shifted it to the top so users are able to update their search easily instead of having to scroll down if their screens are small.

**Hurdles:**

- API: I was having issues retrieving the data from arrays nested few layers within. I've tried multiple ways but no data would return in display. Eventually I asked for an extra few sets of eyes to help me, GA peers (Mindy, Dan, Sage and Peter) and GA Instructor (Hou) that I finally got the data to pass through properly. Who knew that you would need to set a condition to verify there is data to pass through and THEN display. Everyday you learn something new!

- Jest unit testing: I overanalyzed my test and would run into multiple errors. GA Instructor (Hou) was able to walk me through it and helped me narrow down the major areas to test.

**Unsolved problems:**

- Jest unit testing: I was able to complete two component testing and in progress with the final component testing.

## Future Add-ons

- Add additional API for thesaurus and users are able to toggle between definition and synonym of their searched word.
- Add sound for pronunciation of the word.
- Store previous word searches and allow users to created spelling list from that.

## Contribution Guidelines

I would love improvement feedbacks or advice on how to tackle my unsolved problems. In addition, if there are any bugs you've come across, you can:
- Create an issue on the repo.
- Submit a pull request with your proposed improvements.
- There are two branches (Master and Thesaurus-branch). I'm currently testing a new Thesaurus feature that is being worked on under Thesaurus-branch.

Thank you in advance!

## Credits
Thank you to my wonderful GA Instructors (Hou and Jen) and GA peers for providing technical and moral support throughout!

Credits to amazing sources that I'm thankful for! Sending them many many thanks!

- Dictionary API: https://dictionaryapi.com/
- Bee Image by yabayee from Pixabay
- Favicon for the bee icon: https://favicon.io/
- Color palette generator (suggestion from MyShawne and Jade):https://coolors.co/