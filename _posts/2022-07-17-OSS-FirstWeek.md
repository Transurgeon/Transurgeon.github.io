---
layout: page
title: First weeks of Open Source
---

<h1 align="center">
Getting started
</h1>

This is my story on how I got started contributing to Open Source projects such as Spark and Pandas.

### Initial Interest

My first encounter with Open Source was finding out about popular frameworks and tools such as [React](https://github.com/facebook/react), [Kubernetes](https://github.com/kubernetes/kubernetes), and [Tensorflow](https://github.com/tensorflow/tensorflow).

Initially it did not make any sense to me. Why would big tech companies such as Facebook and Google, share the source code of their creations to the public?

So I did some research.. and I found out that:

Although each open source project has it's own unique and intriguing story, they all share a common vision: Allowing the community to provide instant feedback, develop new features on their own and help each other grow. 

However, on the business side of things, open sourcing a project can also have intentions of pushing down competitors by making a tool ubiquitous in the current state of the market.

I would absolutely recommend these [Honeypot Documentaries](https://www.youtube.com/watch?v=BE77h7dmoQU&list=PLtEPUaeDclku1ECmuN3IsUimHApukWIOf) for those interested to learn more.

### Understanding the workflow

This is the path I took to actually get started on contributing (I had been watching videos and procrastinating atleast 2 weeks prior).

Having watched tons of articles, documentaries and videos, I was in desperate need of an easy way to get started. 

I cannot recommend these two repositories enough: [first-contributions](https://github.com/firstcontributions/first-contributions) and [contribute-to-open-source](https://github.com/danthareja/contribute-to-open-source). They have well-detailed guides, and open issues for any beginner who wants to learn the open source workflow. One of the repository even has a bot that automatically does a code review on your pull request. 

As a side note, I want to add that working on public repositories greatly helped me reinforce my version control skills. I am now much more familiar with branches, commands, code reviews and much more. 

### Contributing to Spark

After making my first few pull requests, it was time to try and contribute to the newest addition to my arsenal: Apache Spark.

As always, it is good to read about community guidelines and best practices. I found a very good [video](https://www.youtube.com/watch?v=TkomuEmGqVU) detailing the open source process at Spark.

It took me a few days to understand how the code was structured on Github and how to actually install/build all the required dependencies to get started.

This is where I noticed a little bug in the README of the Spark docs. My pull request: [SPARK-37066](https://github.com/apache/spark/pull/37066), tried to redirect the user to install python packages through the requirements.txt file rather than a command listing all the packages.

And... It got merged to master! (dopamine hit!) 

### Contributing to Pandas

Next up was Pandas, a library I have used before in some Jupyter Notebook attempt at creating ML models.

This time, I was a bit lazier and did not bother with learning as much about the structure and setup. Repercussions ensued.

My pull request: [PANDAS-47362](https://github.com/pandas-dev/pandas/pull/47632), attempted to resolve an issue related to the Pandas documentation. However, I was a few minutes late and ended up producing a duplicate PR to the original issuer. 

Stubborn me decided to scroll through various areas of the documentation to find other errors and #Differentiate. I ended up settling on changing various occurences of an interpretation preference of mine.

As you could have guessed, it got rejected..

### Final Thoughts

I had a blast learning about Open Source Software and "working" with lead developers of highly acclaimed projects.

I will keep trying to help and contribute, many more 'merged to master' and rejections to come!