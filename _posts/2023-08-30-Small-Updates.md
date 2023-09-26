---
title: Last Year of Undergrad
tags: Programming 
---

<h1 align="center">
Life after GSoC
</h1>

A few days ago, I submitted my [final report](/documents/WilliamZ_GSoC_2023_report.pdf) for the Google Summer of Code program. 

It marks a big milestone in my life, and perhaps my proudest achievement to date, but it is also only the beginning of many more interesting things to come.

<h2 id="graphblas">CVXPY updates</h2>

The core contribution of the GSoC project, the stacked-slices [backend PR](https://github.com/cvxpy/cvxpy/pull/2215), is currently ongoing its final review stages. 

My mentor and I have added many more backend unit-tests and further detailed some complex operations in the docstrings. 

The next task will be to implement a backend using [python-graphBLAS](https://github.com/python-graphblas/python-graphblas). This idea was initiated by meeting some wonderful people at the <b>SciPy 2023</b> conference. 

Overall, the tensor operations will remain intact, we simply need to change the sparse data type and make a few adjustments. I believe this backend could see major improvements due to how it optimizes sparse operations with [delayed objects](https://python-graphblas.readthedocs.io/en/stable/user_guide/fundamentals.html?highlight=delayed%20object#delayed-objects).

<h2 id="broadcasting">Broadcasting Algorithms and NetworkX</h2>

For my undergraduate project, I decided to work with my <b>Combinatorics & Graph Theory</b> teacher on exploring implementations of his research in Open Source. You can find a copy of my proposal [here](/documents/WilliamZ_COMP_490_proposal.pdf). 

The main objective is to define a set of heuristics for broadcasting in general graphs and add these implementations to NetworkX's graph algorithm suite. 
I will be collaborating with [Cédric Paradis](https://github.com/cedparadis), a good friend of mine who is going to work at <b>Morgan Stanley</b>. If time allows it, we will also add comprehensive notebooks on applications of broadcasting and give examples of how to use the new APIs.

Surprisingly, this idea was also inspired by attending a talk at the SciPy 2023 conference. Perhaps attending conferences is worth it after all... (this one definitely was!)

In fact, the people from NetworkX are actually working closely with the core developers of python-graphBLAS to integrate a new "official" backend for graphs in Python. You can read an excellent summary of this partnership [here](https://speakerdeck.com/leriomaggio/the-hitchhikers-guide-to-d-and-d).

<h2 id="classes">Other Classes</h2>

In addition to the never-ending Open Source development and the undergraduate project, I will also be completing four other courses at Concordia. Here is the list:
- Linear Algebra 2
- Abstract Algebra 1
- Intro to Software Engineering
- Social and Ethical Writing

I am clearly most excited about Abstract Algebra since I get a chance to formalize a lot of concepts I am sort of familiar with such as: groups, rings and homomorphism.

In Linear Algebra 2, I will get a chance to solidify some concepts I have learned in the previous version of the course. In addition, many concepts in the outline seem to be highly relevant to optimization theory. It never hurts to learn more math, as they say (I don't think anyone actually said that).

As for the last two courses, I can't lie, I wouldn't have taken them if they were not mandatory. That's all I will say about them. 
