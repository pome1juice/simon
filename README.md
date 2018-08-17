Simon Game
The online program is an online javascript simon game.
UX
The interface is simplistic. The user has only 4 large square button areas to click on, the buttons change color and make a sound to confirm the user's choice. There is also a wrong asnwer voice over which tells the user they have lost the game. 

Features
The user is presented with 4 buttons. At first the user is also presented with a sequence of size 1 of the buttons activating (flashing and making a noise). The user needs to copy this sequence after the sequence is finished playing. If the user reproduced the sequence perfectly, he will be presented with the same sequence plus a new button activating at the end. Each time the sequence grows in size, and the user needs to reproduce it. On a wrong attemp, the user needs to start from the beginning.

After creating a user, the game commences at the user page. We first display the username and score, and an image.
The user needs to guess the name of the company represented by this image. 

The user needs to submit the answer. On successful submission the user's score will increment by one and he will be
presented with a different question. Given a wrong answer, the user is prompted to try again.

JQuery
The comments in the code explain each function. At first the user hits the start button which activates the game. We add a new element to dealers array, and display it. Then we await user to click buttons. There are 4 functions corresponding to the listeners on each button. Each function adds an element to the user array. And constantly we compare the user array with dealer array. On a mismatch we empty both arrays and restart alongisde playing the wrong answer voice. Else we carry on adding a new elemetn to dealer.

Deployment
I created the project on cloud9 and ran it. I was able to access it from my browser. After I have completed my project
I cloned it to my github account. 

Credits
Content
To begin the coding I looked at similar projects such as:
https://medium.com/front-end-hacking/create-simon-game-in-javascript-d53b474a7416
https://codepen.io/BenLBlood/pen/LGLEoJ
and tried to build one from scratch for my self
Media
No images used
