# Front End Interacpedia Exercise
This is a simple repository to provide a template exercise to test front end skills
with the desired tech stack to work on Interacpedia.

## Technologies used
- VueJS Front End Javascript Framework (https://vuejs.org/)
- Tailwindcss Front End Css utility Framework (https://tailwindcss.com/)
- Plain HTML

## How to use
You should start by making a public `fork` of this repository, where you can 
make your changes, and share it with the Interacpedia team. You should report which tasks you have
developed, from the list of tasks at the end of this instructions.

> If you find any errors or suggestions for this template exercise, please help us make it better. :)

This is created a single HTML file that can be used directly in any browser or server deployment configuration.

## Current state
The game is currently only useful for displaying the users clicks. It alternates from `X` to `O`, starting with `X`, and checks if the 
clicked cell is empty to make the move.

# Tasks
> The following are the possible tasks and improvements required for the game, its not necessary to 
accomplish all of this, it depends on what you have established with the Interacpedia team. There are some easy 
tasks, and some more complicated.

What is going to be evaluated is the appropriate use of the corresponding tools, for example, if you
are creating a button, you should only use *tailwindcss* utility classes to make the button look ok, positioning, etc...
The same applies to any javascript code needed, you should embrace *VueJS* standards and recommendations.
You can also add external libraries and utilities to make your work easier, or to make advanced things.

1. Add a button to reset the game to start again.
2. Detect (add a method) when someone wins the game, or the game is over, and display a message, modal, or some kind of notification.
3. Change the `X` and `O` letters for some nice icons, could be *fontawesome*, or any other library, or you can use any nice image from the web.
4. Change the border lines to reflect the actual triqui game and not complete squares, for example, the first
square should not have top and left borders.
5. Create a method to make the system "play" a move. You can add a button to the interface that we can use 
at any time to make the computer play. It can be as dumb or as intelligent as you like.
6. Fix the responsive version (Mobile width of 375px) to display correctly.
7. Add some click sound when user plays.
8. Add the possibility to play against the computer. (Using the method of task #5)
9. Add the possibility to *undo* the last move. 
10. Add the possibility to undo *many* moves.

# Demo
https://kemirandad.github.io/front-vue-exercise/
