---
layout: page
title: Back to School
---

# Scraping the SEC

In the past few weeks, I have been exploring financial data made public by the [SEC](https://www.sec.gov/about/what-we-do). 

The process is actually quite simple, using Python you can make requests to the already well-defined [SEC REST API](https://www.sec.gov/edgar/sec-api-documentation). Then using a parser such as [BeautifulSoup](https://beautiful-soup-4.readthedocs.io/en/latest/) you can extract any kind of data you wish from the endpoints. Finally, using a dataframe tool such as [Pandas](https://pandas.pydata.org/) you can refine, aggregate and visualize your data. 

Here is how you can also [access SEC data](https://www.sec.gov/os/accessing-edgar-data)

And here is a [youtube series](https://www.youtube.com/playlist?list=PLcFcktZ0wnNl5X7Qn1JM4jhrIOBsNj1qa) where you can follow along. 

### Why Scrape the SEC?

The first question that came to mind when discovering the SEC API, was why would anyone use that? 

I mean, the search function is quick and easy. In less than a minute you can find the company you are looking for and start reading their filings. Why would any average Joe go through the pain of understanding directory structure, XML tags, and basic programming syntax just to do the exact same thing as before (maybe perhaps a few seconds quicker)?.

So I did some digging and found this [article](https://www.sec.gov/news/speech/bauguess-big-data-ai) along with this [paper on FinBERT](https://www.researchgate.net/publication/334974348_FinBERT_pre-trained_model_on_SEC_filings_for_financial_natural_language_tasks). 

Both demonstrate scenarios where, using the SEC API, someone was able to parse Financial Information at an unprecedented scale and prepare this data for machine learning projects. 

The SEC article shows an example of the Commission itself trying to predict risks and fraud using the language sections of a filing. This is also commonly known as Natural Language Processing or "NLP" for short. 

The author, Scott W. Bauguess, makes an important distinction: "Fraud, for example, is what social scientists call a latent variable. You don't see it until it's found". With the issue of Big Data being solved by parrallel processing and automated SEC requests, there was still many steps to take before reaching a solid Machine Learning Model. 

This brings me back to my initial question... And I think I know the answer

You would only use the SEC API for two important reasons:
- You don't know what you are looking for
- You want to process a lot (I mean a lot!) of data

I do realise, looking back, that these two criterias fit me perfectly

### Value Investing using historical data

I have now found a general direction when it comes to using this beautiful tool. 

I want to apply some important concepts from the branch of economics called [value investing](https://en.wikipedia.org/wiki/Value_investing). This term was first defined by Benjamin Graham and is now famously used by Warren Buffet, CEO of Berkshire Hathaway. 

Value investing essentially involves a very-long term approach to investing into high-quality, low attention and emerging companies in order to see them become fruitful in the future. It is the absolute polar opposite of quant trading and making margins off of the spreads over options and derivatives. 

Value investing is about believing in a company and its vision. It is about true ownership of a company. It is about ignoring the short term trends and looking for the long term ones. It is about not caring about the daily prices... etc. 

Value investing involves a lot of research and understanding of different markets and financial sectors. That is why I am working towards solutions that can speed up the information gathering process and centralize the data. 

Here is a [paper](https://www.ivey.uwo.ca/media/3775523/value_investing_the_use_of_historical_financial_statement_information.pdf) that attempts to use historical information to improve the accuracy of value investments. 

### Future Aspirations for this project

My long term goal with this project is simple: Discuss and work with individuals from the Finance industry to build a tool/develop important skills. 

Eventually, I want to use my knowledge of the SEC and the solutions I built to fuel my investing and perhaps business career. My vision is that automated SEC data scraping will have an important impact on analyses, reports and the industry as a whole. 

### My Fall 2022 courses

This Fall I will be taking **5 courses** for a total of **16 credits** at Concordia University. 

As I am almost done with my Degree's core courses, I will be taking a lot of Math and Stats this semester. 

Here is the exhaustive list of my courses:
- Operating Systems
- Elementary Numerical Methods
- Combinatorics
- Linear Algebra I
- Jazz Harmony

This is quite a heavy load of material, I would suggest most people to only take 5 courses if you can manage your time well. 

Combinatorics involves a lot of proofs and problem solving, I expect it to be the most time consuming and fun course. 

Elementary Numerical Methods and Linear Algebra deal with a more applied version of mathematics and should be quite straight-forward once the concepts are understood. 

Operating Systems is a very interesting core courses that dives into the heart of every computer. I will hopefully manage to keep myself interested in the topic until the final exam. 

Finally, I took a Jazz course for an elective.. However, my music knowledge isn't that great and this course will probably also end up being very time-consuming. Regardless, I am willing to explore this interesting field of music and perhaps play it myself. 

My next blog post will most likely be an update about how my semester is going. Did I end up going to class? Will I be struggling in a particular course or topic? Will I be procrastinating as usual? 

Anyways, for now.. It's time to get studying!
