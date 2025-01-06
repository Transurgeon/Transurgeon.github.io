---
title: CVXPY's graph implementation explained
tags: OpenSource Optimization
---

This blogpost is a summary of the paper titled: [Graph Implementations for Nonsmooth Convex Programs](https://web.stanford.edu/~boyd/papers/pdf/graph_dcp.pdf). For a more detailed explanation I invite you to read the excellent original paper.


<h2 id="intro">Introduction</h2>

<h2 id="graph-impl">Graph Implementation</h2>

<h2 id="advanced-example">A more advanced example</h2>

<h2 id="code">A look into the codebase</h2>


When $$a \ne 0$$, there are two solutions to $$ax^2 + bx + c = 0$$ and they are
$$x_1 = {-b + \sqrt{b^2-4ac} \over 2a}$$
$$x_2 = {-b - \sqrt{b^2-4ac} \over 2a} \notag$$
