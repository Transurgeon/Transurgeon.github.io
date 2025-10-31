---
title: Classes from Master's
tags: Optimization
---

This blogpost is a review of the 4 classes I took to satisfy the class requirements of my Master's degree. 


<h2 id="intro">Introduction</h2>

Although I am definitely enjoying the freedom of having less stressful deadlines, I believe I learned a lot from the classes I took during my Master's (Multivariable systems in Fall 2024, the other three in Winter 2025). I am writing this blogpost as a way to revisit important things I learned in the past two semesters and also share my thoughts on the classes. 

Before we begin, I wanted to say a quick word about the line of thought behind the class choices. My supervisor recommended many "modern" classes on theoretical machine learning or reinforcement learning. I definitely was interested in those topics, but felt more inclined towards optimization related classes because there was more to be gained (given my background and interests). 

<h2 id="multi-systems">Multivariable Systems</h2>

This class is taught by a new professor in the Department of Electrical Engineering, [Bowen Yi](https://bwyi.github.io/).

As the name implies, the class is about Multivariable Linear Dynamical Systems. We first talked about modeling and the classic control loop defined with the input, output and internal state variables. The next lecture talked about the discrete linear-time invariant state-space model and its analytic solution using the state-transition matrix. We conclude the first section by learning about the Laplace transform and the Jordan Canonical form to compute the exponential of a matrix (which appears in the analytic solution). 

The next part of the course was my favourite, as we began introducing key concepts from control theory: controllability, stability and observability. We first defined what these concepts meant in a mathematical sense for different types of control systems (time variant versus invariant). This required us to learn about the respective gramians and theorems on determining if a system is controllable (observable) or not. To conclude this part of the section, we talked about a very beautiful duality result between the controllability of a system and the observability of its adjoint. I hope to gain a better understanding of this result at some point.

Finally, we talked about the internal state of a control system, more specifically: feedback and observation. This led us to discuss about ways to design a state feedback controller such that the overall system has desired properties (i.e. closed-loop stability). We also talked about canonical forms for controllable systems which was interesting because the same term is used in optimization in a completely different context. For the state observer, a discussion about decompositions of observable and unobservables states led us to the famous Kalman filter (observer). I am certain that I will revisit this one day since I didn't completely grasp it. 

We also had bonus material on realization theory which seems to be a sort of inverse control problem where the goal is to find the control matrices given a proper transfer function (only works for linear time-invariant systems). There were some cool theorems on existence and minimal realizations but I already mostly forgot about them. 

Overall this course was truly interesting and allowed me to gain a very very basic understanding of control systems. There are so many cool extensions of this class that I can now explore one day: stochastic control, optimal control, adaptive control, etc. (most are taught at Polytechnique also!). I want to conclude this section for sincerely thanking Professor Bowen Yi, who took the time to explain basic concepts to me and also for having really interesting conversations about the class and existing connections to optimization. 

<h2 id="matrix-computations">Matrix Computations</h2>

I took this class because there was a conflict with getting credited for taking the class Convex Optimization at McGill as an undergrad. In summary, Polytechnique doesn't allow students from other universities to have a class credited if that class counted towards their own degree. Interesting rules... but it was a bit out of my control, and I was open on learning new material anyways, so here we are.

Last summer, as I was having a random discussion with [Parth](https://ptnobel.github.io/), he mentioned the importance of understanding matrix computations for optimization. This was later re-iterated by [Sarah](https://github.com/sarah-quinones) (the author of faer.rs), an expert numerical algebraist. 

I thus decided to enroll in this seemingly completely unrelated class and must admit that I didn't attend the in-person lectures much. However, I read most of the lecture notes by myself and also completed all the assignments with the occasional help of one classmate (and a lot of help from copilot).

The class covered many essential topics in numerical linear algebra and practical implementations of algorithms. We went through matrix norms, perturbation and stability analysis, cholesky and $LU$ factorization, blocking algorithms (three levels of BLAS), least squares, $QR$ factorization, singular value decomposition (SVD) and finally, some eigenvalue problems. 

There was a lot of material and I definitely didn't fully understand everything, in my opinion, the last two chapters on SVD and eigenvalue problems were particularly not too well understood. However, I feel like I gained a great appreciation of this field and its importance. I also noticed that many factorizations and algorithms would reappear throughout the class. For example, the SVD and least-squares problem can often be solved with a $QR$ factorization (it is also numerically stable!). 

After taking the class, I read some [paper](https://arxiv.org/pdf/2311.07710) on large-scale convex optimization and it was mentioned that the main bottleneck of second-order method came down to efficiently computing the cholesky factorization of the positive-semidefinite matrix that appears in these methods. It was fascinating to me that despite known (and simple) algorithms existing for these problems for more than 100 years, there is still a lot of work to do in practical manners (ex: exploiting sparsity, leveraging hardware, etc.). 

I didn't do so well on the final exam (which was worth 50%) and ended the class with a B. However, I think it doesn't really matter since, out of all my classes, I am likely going to revisit the lecture notes at some point in my optimization and programming career. (although I am probably saying that to try and comfort myself)

<h2 id="integer-programming">Integer Programming</h2>

This class was taught by a relatively new professor at the Computer Science department of Universite de Montreal, [Kimberly Yu](https://sites.google.com/view/kim-yu/home). 

I really enjoyed taking this class as we were a small group; professor Yu was quite involved and seemed to care about our learning experience. 

We began by talking about mixed-integer formulations for certain problems involving graphs and piece-wise linear functions. Note: this class only covered mixed-integer (linear) formulations. It was interesting to learn some modeling tricks involving binary variables and how it affects the underlying algorithm.

This led us to talk about strength of a formulation, how we should talk about comparing two formulations, etc. It turns out that the best formulation is the convex hull of the integer feasible points, since we can solve the relaxed problem (eliminating binary constraints) and get the optimal integer solution. 

We then continued with cover inequalities, a technique to generate good cuts which help the mixed-integer algorithm eliminate bad integer solutions. We also delved into some theory about a different viewpoint of a convex hull which involved extreme points and rays. This alternative representation allows us to construct a so-called *extended formulation* of the original set. My intuitive high-level understanding of this extended formulation is a sort-of lifting in higher dimensions which describes the convex hull of the original formulation. 

We concluded the class by learning a classic cutting method from Chvátal and Gomory, the branch-and-bound method, and also preparing a final presentation on anything that's related to integer optimization. I decided to do mine on the unit commitment problem since I had some prior interest through working at Gridmatic. It was a cool experience as I learned a lot more details about the problem, and how to clearly explain it. Unfortunately, I was a bit too lazy to implement the results in a real large network. 

Our last homework was to do some custom callback implementation in Gurobi, but I mostly used Copilot and the help of another classmate to complete the exercises. I don't feel confident to say I have learned anything from doing this (other than knowing what a callback in a solver does!). 

<h2 id="power-systems">Optimization and Machine Learning methods in Power Systems</h2>

This class is taught by my supervisor [Antoine Lesage-Landry](https://alesagelandry.github.io/), which used the book: [Convex Optimization of Power Systems](https://assets.cambridge.org/97811070/76877/frontmatter/9781107076877_frontmatter.pdf) by [Joshua Taylor](https://scholar.google.com/citations?user=-6ODrqoAAAAJ&hl=en).

I had quite mixed feelings about the class. On one hand, optimization is my favorite topic and I was super eager to learn about its applications in power systems. On the other hand, I found out that the methods presented are not quite applicable to the operation of real networks and they were extremely sophisticated.

It didn't help that the pace of the class was absolutely brutal. We would cover 3 different topics in one hour chunks every week, from chance-constrained optimization to SDP and SOCP relaxations of the AC-OPF to radial power networks. We even had a part of the class which talked about reinforcement learning algorithms such as Q-learning and gradient policy learning. I can safely say that I don't remember much of the content. 

On the bright side, I learned a lot through doing the homeworks (which were using CVXPY!), and collaborating with classmates from my lab. We also had a final project, where I did a presentation on differentiable optimization and its applications in power systems. However, I was once again too lazy to do any real implementation and didn't end up with a good grade. My hope was to learn more about this hot topic and maybe it could help me for the VSR stay with Parth and Boyd's group (things turned out rather different though). 

<h2 id="conclusion">Conclusion</h2>

Note: this paragraph and the content of two classes were added on a much later date (October 31, 2025). 

Looking back, I am glad I decided to take classes in 4 completely different topics. It allowed me to learn a lot of new things and, although they are not directly helping my research, I am sure it has helped me develop mathematical skills. 

For the time being, I will probably not be doing anymore classes since there are lots of open source and research tasks to do (and I need to write a thesis to graduate, at some point). However, if I ever end up doing a PhD, I would love to take more classes, maybe some stuff in statistics, optimal control and applications, and more CS stuff like advanced compilers and maybe even generative models?.

