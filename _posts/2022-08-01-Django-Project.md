---
layout: page
title: Starting a Django Project
---

<h1 align="center">
Bibliomathica
</h1>

Today I will be discussing about my new personal project that I started a month ago with my fellow intern and friend
**[Devan](https://github.com/devan-srinivasan)**. 

You can find the source code under this **[respository](https://github.com/devan-srinivasan/bibliomathica)**.

The details pertaining to the project will be displayed in the **README** of the code. This blog serves more as an overview of the process of building the site and the difficulties we have encountered.

### Back Story

Due to the immense boredom of sitting on the bench at Deloitte, Devan and I started brainstorming about interesting projects we could tackle in a short amount of time.

We pondered a few days on making a responsive VST using the spotify API. However, there were too many unfamiliarities concerning the topic; we had to learn about audio syncing, sound wave patterns, rhytmic analysis, etc. Not to mention the spotify API which would take a few weeks of dabbling around by itself.

We finally settled on building a full-stack application since Web Development was very popular amongst software engineers. Devan had already learned React during his first project. So the frontend was quickly decided. We both were familiar with Python, so naturally we chose Django for our backend.

### Learning by doing

I decided to follow this amazing **[tutorial](https://www.youtube.com/playlist?list=PL-osiE80TeTtoQCKZ03TU5fNfx2UY6U4p)** to startoff the project. My approach was to try to replicate the examples after each video and adapt them for our project. Although I ended up spending much more time debugging at the beginning, it was definitely worth it in the long run.

It is still mind-boggling to me how complete and robust Django is. It has built in models, forms and data encryption that take care of a lot of manual boilerplate tasks. The MVC architecture through url mapping, views and templates was cumbersome to learn at first but was instrumental to the overall structure of our project.

Django’s default admin page also helped tremendously at the beginning when we were getting database errors. To cap it off, Django’s Queryset was a fun way to manipulate objects and our site’s data in preparation for display.

You can learn more about Django and follow additional tutorials on testing and customization through their official **[documentation](https://docs.djangoproject.com/en/4.1/)**.

### Explanation and reasoning of the tech stack

After layering the foundation of our web app, it was time to upgrade our tech stack. At this point in time, I had completed a few videos from the tutorial and did some substantial work on the **backend**. We had a login and profile system along with many more features including user owned models and custom templates for displaying.

The first step in our upgrade was to choose a different database from the default **MySQL/SQLite** provided by django. We chose **MongoDB** because of it's document-oriented storage which could provide scaling and fast retrieval of information. You can sign up for a free cloud Mongo account at **[MongoDB Atlas](https://www.mongodb.com/atlas/database)**.

However, this led to some drastic errors. In traditional SQL, there is an automatic primary key that Django takes care of automatically, in Mongo the main source of identificaton is a **12-byte BSON** Object ID. This made our queries break since there was no way to retrieve our data from the Mongo **cloud** database. Then came in **[Djongo](https://www.djongomapper.com/integrating-django-with-mongodb/)**, a connector between Mongo and Django that allowed models to convert their default primary key to an **ObjectId** key. Everything in the **backend** was working smoothly, life was good.

The website still felt very *amateurish* (it still does...) It was time to level up the display through some **frontend** packages. 

We used **[Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/)** as a styling package that allowed us to improve the look of our forms and buttons. 

Finally, Devan used a javascript bundling tool called **[Webpack](https://webpack.js.org/)** for the React component of our site. This allowed us to compile and bundle all the javascript files into a static file (bundle.js), thereby drastically reducing the amount of files needed to display the app. 

### Debugging, Testing features and Deploying with Heroku

When the app was mostly completed, it was time to deploy everything for the world to see. **[Heroku](https://www.heroku.com/dynos)** is an excellent (and free!) Platform as a Service that takes care of the deployment of your applications. There are some additional configurations required such as a **Procfile** and updating uWSGi.py but they are trivial if you follow a decent tutorial.

The *bibliomathica.com* domain name was bought on a provider called **[NameCheap](https://www.namecheap.com/)** for 10$ CAD...

An absolute bargain if you ask me :).

You can find our project under this link: **[Bibliomathica](http://www.bibliomathica.com/)**. Feel free to create an account and start contributing to our Library of Fun Mathematics.

### Final touches and moving forward

I had an absolute blast building a niche application from scratch with Devan. We both employed good software practices almost daily: making issues, doing code review and pull requests. The organisation, the teamwork and the final product are all things I am extremely proud of. 

As with any good things though, it didn't last. Our time at Deloitte is soon coming to an end, and our initial idea for the website was essentially complete. 

It is time to close this fun Django chapter of my programming journey. On to the next! Stay Tuned!
