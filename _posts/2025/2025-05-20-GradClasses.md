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

<h2 id="power-systems">Optimization and Machine Learning methods in Power Systems</h2>

This class is taught by my supervisor [Antoine Lesage-Landry](https://alesagelandry.github.io/).



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

