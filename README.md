# away_from_home

[Design layout preview](//www.figma.com/file/k2b6pjDAjA77rf7eumj3Ta/Away-from-Home?node-id=0%3A1)

Away from home is a React Native project that I'm making for my mom specifically. Ever since I was a little child I helped out with doing various chores around the house but also at my mom's restaurant. But since I'm a college student, there's a lot less that I'm able to do since I'm not physically there, and my schedule only keeps me busier and busier so it's also harder for me to just video call about an issue.

So this app is meant to contain a collection of tutorials of things I've learned to work with/fix while I'm not back home. Especially since my mother isn't super fluent with English, I basically end up translating all the instruction manuals into pictures and videos in Chinese so that she and the rest of my family can understand my tutorials.

Examples include doing things like re-programming the garage door opener in our house or resetting the padlock passwords and whatnot. Other tutorials may also include things like paying bills online or troubleshooting wifi issues. So this is essentially like a private wiki-how custom tailored for my family.

## Todo List

* Setup an external storage solution to store images/videos.
* Start creating tutorials using JSON files. I just need one tutorial for each section for the first release.
* Update the CSS to better match the intended design.
* Think of a better/more efficient ways to create/store/load content for the tutorials.
* Add basic authentication and a database/external storage solution for the tutorials themselves.
* STRETCH GOAL: Create a website that can make tutorials that can be pushed to the database.

## Future Features

The first release will have all content stored within the app files themselves. This is not an ideal solution, so the next step is to move all media (videos and images) into an external server instead to reduce the apps size.

The second release will include a more modular way of making tutorials through JSONs rather than hard-coded React Components for each type of tutorial.

The third release will see that all content be moved out of the app and into an external system to be accessed with requests to the backend. At this point I'll make an authentication system for certain tutorials and greatly increase the content I have on there.

And as a stretch goal, I'd like to launch a webapp to customize and add your own tutorials to be accessed within the app, and greatly increase the function of it.
