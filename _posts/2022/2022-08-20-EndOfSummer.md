---
title: Vacation time
tags: Internship
---

<h1 align="center">
Bye Bye Deloitte
</h1>

Yesterday was my last day at Deloitte for this summer.

For the last month and a half, I joined a project as a non-billable support for the Consulting team. I was mostly using Powerpoint and Word.

### WCB AB project

The client was Workers Compensation Board Alberta, a provincial workplace injury insurance provider. The project involved two major use cases:
1. Migration from on-premise to cloud for the data infrastructure
2. Improve the current job matching model

Prior to this partnership with Deloitte, WCB had created a pipeline to process claimant forms into tabular data. Then they would use a deep learning model on the tabular data to match new claimants with previous ones. 

However, there are a couple issues with this workflow... 

For example, the pdf extraction was not accurate, claimants sometimes had missing forms or even multiple copies of the same form. This led to inconsistencies in the tabular data representing the claimants. 

Secondly, the feature extraction method was not standardized. This made it very difficult for the neural network (using a classification method called [Cosine Similarity](https://en.wikipedia.org/wiki/Cosine_similarity)) to properly assess which features were most important to compare. Some examples of important features include:

- age
- previous job
- area of injury
- severity of injury
- other

Finally, WCB's current workflow neglects a very important aspect of any machine learning project: the feedback loop. It simply refers to the process of reusing the output of the model to train a newer, (hopefully) improved version.
This will allow a successful job match to contribute to every succeeding search. At first glance, this doesn't seem too hard to implement. However, the process can take some time since the output needs to be validated by a Re-employment specialist. 

During my stay in this project, I was involved in the writing of the official proposal and presentation. My tasks were to define very clearly both use cases mentioned above, and update the document as newer information arrived. 

There was a lot of back and forth between our team and WCB's; most of the time it was us asking questions about their current model, information about their data (schema, dictionary, relational entities, etc.), and proposing possible solution ideas. 

To put things into perspective, it took more than 3 months for WCB to get clearance and sign the contract to share their data.

And I have yet to write a single line of code or get access to the codebase of their model...
 
### Brief and Final thoughts

I have already told many people around me the same thing. The environment, people and benefits at Deloitte are all absolutely incredible. I will definitely keep this in mind during my next job search. 

I will also definitely miss my fellow interns, especially Devan (going back to Toronto) whom I communicated with a lot. 

I learned so much and had a lot of amazing experiences this summer, 

With that being said, it is time to move on.

Thank you everybody in my life, we have come a long way. 

### What's next? 

Nothing much.

I will enjoy some time off to go see movies and concerts. 

I will also hopefully pickup playing music again (more seriously...)

And we will be back working on a personal project very soon!

Oh yeah, I also have school starting in 3 weeks...
