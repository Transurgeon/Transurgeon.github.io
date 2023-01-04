---
layout: page
title: Code to Give Hackathon
---

<h1 align="center">
MoreGlean
</h1>

This past weekend I attended the Morgan Stanley's Code to Give Hackathon in Montreal. 

The main idea was to build a web application that could connect farmers, gleaners and food banks. 

Gleaners refers to a group of people who are willing to collect additional crops from the farmers to avoid food waste.

The winning team would receive **500 USD** for each member, and some potential internships at Morgan Stanley. 

In addition, Earth Day Canada, a non-profit owned by Morgan Stanley, will also probably be implementing your web app or atleast parts of it. 

It is for a good cause after all, why not give it your best shot?

Here is a link to our submission: [MoreGlean](https://github.com/diegodofe/MoreGlean)

Yes, we did try to integrate the word "glean" into Morgan Stanley... 

It didn't turn out to be as funny as we initially expected. 

### Meeting the team and initial brainstorming

I joined the first day of the event with my friends Thomas, Gabriel and his older brother Talih.

The venue was located at Palais des Congres, near Chinatown. Food and Drinks were also included. 

The event started out with a 45 minute talk about the purpose and roadmap of the hackathon. 

We were then separated into breakout rooms in order to meet our team members and start brainstorming for our web application.

Our team (no.14) had a total of 11 members. We first discussed about potential features we could implement, then everybody chimed in on their skills and what technologies they were comfortable with. 

Thankfully, our team had a prepared hackathon veteran: [Diego](https://github.com/diegodofe)

Because to be really honest, I had absolutely no idea what I was getting myself into. 

And so it began...

After the venue closed, some dedicated members of our team walked to Concordia's Hall building to get started on the web app.

Diego showed us a quick demo on the crash app he designed. It essentially served as a way to get started on development without worrying about deployment, linting, and testing. 

### Explanation of the Tech Stack

The tech stack Diego recommended us was quite simple. The frontend consisted of Next.js with Typescript, and the backend would be Firebase/Firestore. 

Actually, there was no real backend. Firestore is actually a Backend as a Service, which is part of the Google Cloud Suite. 

It allowed us to deploy a working app very rapidly. We were now able to split tasks into two roles: Frontend Design and Frontend Data Display

No need to design an API, make endpoints, and deal with all the hassle of communicating between frontend and backend. 

We also had:
- Vercel for deployment, hosting and production. 
- NameCheap for the domain name
- Husky for improved version control
- Evergreen for the UI Library 

### My Role

Given my prior experience with designing Data Models for Bibliomathica, I gave myself the task to do so again. 

I obviously had to get approval from our team lead Diego, to make sure everything would be working smoothly. 

You can check how we designed our data, under the "/types" directory of our project. 

Apart from that I wasn't that familiar with Typescript, so I stepped down from the majority of the coding tasks. 

I did manage to get the Google Online Authentication working though, which I am quite proud of. 

Most of my contributions came in the form of code reviews and preparing good data for the presentation. 

### Results

We didn't end up winning...

Although our team had the most functional and best-looking application, we were missing a few things that could secure us a first prize.

1. We didn't implement a global statistics page
2. We might have focused too much on UI and user functionality, instead of adding more (incomplete) features
3. Our presentation didn't talk much about future implementations and moving forward

All in all, I do feel like we got robbed, but one can never know for sure what the judges will value more.

But honestly, winning didn't matter as much as I used to think. 

I feel like getting together with random people and having a blast building things together is worth more than anything. 

Here is a [link](https://www.moreglean.com/) to our deployed web app.

Finally, I just wanted to congratulate the winners and thank Earth Day Canada, Morgan Stanley and the beautiful members of team MoreGlean for this awesome experience.