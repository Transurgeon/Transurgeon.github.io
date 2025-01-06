---
title: My experience as a CVXPY core developer
tags: OpenSource Journey
---

A few weeks ago, the CVXPY team has released [version 1.6](https://pypi.org/project/cvxpy/1.6.0/) with a lot of new features and bug fixes. This blogpost details my contributions in the release and my experience through the past year of open source.

<h2 id="started">How it started</h2>

After my [summer project]({% link documents/WilliamZ_GSoC_2023_report.pdf %}) for Google Summer of Code (GSoC), I expressed my interest to continue making contributions to the CVXPY team. I thus got the opportunity to work on improving CVXPY's webpage and documentation, more details about this small project can be found [here](https://github.com/cvxpy/org/blob/main/website_plan.md). While working on this project, I remained actively interested in the other issues that popped up on GitHub and made several other unrelated contributions.

Fast forward a few months, I somehow got an opportunity of a lifetime to do an internship at a startup in California. After obtaining a work visa (J1) and getting the other paperwork sorted out, I moved to Palo Alto for three months.  

<h2 id="gridmatic">Summer at Gridmatic</h2>

I will keep this section short because it is only slightly relevant to the post. 

The startup in question is called [Gridmatic](https://www.gridmatic.com/) and it uses optimization and machine learning to operate batteries and participate in [convergence bidding](https://www.youtube.com/watch?v=Kove7wIKjec). I was extremely fortunate to not only continue contributing to CVXPY, but was actually encouraged to tackle long-lasting [open issues](https://github.com/cvxpy/cvxpy/issues/198) which would see internal usage at the company. Many contributions in the 1.6 release were effectively funded by Gridmatic, and I am very thankful for that. 

As an ode to the original [GSoC](https://summerofcode.withgoogle.com/), I am now calling this summer of open-source contributions: Gridmatic Summer of Code. I also wanted to quickly thank the amazing researchers and engineers at Gridmatic for an unforgettable summer filled with interesting discussions and fun social activities.

<h2 id="contributions">My contributions</h2>

I will now talk a bit more about my contributions in the release. 

Although I have made a lot of PRs in the past few months (as evidenced by the [release notes](https://github.com/cvxpy/cvxpy/releases/tag/v1.6.0)), the bulk of my work can be summarized in three main features: [N-dimensional expressions](https://github.com/cvxpy/cvxpy/pull/2473), [sparsity attribute](https://github.com/cvxpy/cvxpy/pull/2532), and other [performance](https://github.com/cvxpy/cvxpy/pull/2562) [improvements](https://github.com/cvxpy/cvxpy/pull/2457). The rest of the pull requests mostly involved fixing/improving the CI, documentation and [adding](https://github.com/cvxpy/cvxpy/pull/2496)/[dropping](https://github.com/cvxpy/cvxpy/pull/2577) support for Python versions.

I was going to go a bit more in detail about these new features, but I feel like they could each warrant a deepdive blogpost of their own (not to mention I have been somewhat lazy in terms of writing). Instead, I included hyperlinks to the pull requests in question above. 

For my own future reference, I will still say a quick word on these new features. Both the N-dimensional exressions and sparsity attribute have similar flavors, they greatly improve the representation of optimization problems and can also improve their performance (solve and canonicalization time). Due to the symbolic representation of expressions in CVXPY's backend, the implementation of these two features involves coming up with a sparse coefficient matrix that performs the desired operation on any general expression.

The difficulty mostly lies in being able to cover all types of inputs, shapes and other given function data (i.e. axis, keepdims, parameters, etc). I have to give a lot of credit to people from the CVXPY team whom were often the ones figuring out the clever details. I was mostly there to implement, test and validate if their ideas would turn out correct or not.

<h2 id="new-contributors">New contributors</h2>

One of my happiest moments this release was seeing new contributors tackling important missing features. In this section I wanted to give a special shout-out to the following contributions as well as the issue they resolved:
- [andresliszt](https://github.com/andresliszt) who added the [concatenate atom](https://github.com/cvxpy/cvxpy/pull/2597) to the backend (related [issue](https://github.com/cvxpy/cvxpy/issues/2567))
- [bkurtz](https://github.com/bkurtz) who fixed the standard distribution and [cleaned up the CI workflows](https://github.com/cvxpy/cvxpy/pull/2585) (related [issue](https://github.com/cvxpy/cvxpy/issues/2584))
- [UweGensheimer](https://github.com/UweGensheimer) who [added a solver interface](https://github.com/cvxpy/cvxpy/pull/2580) for the open-source MIP solver [HiGHS](https://highs.dev/) (related [issue](https://github.com/cvxpy/cvxpy/issues/2568))

If you look at those contributions you will notice that I did code reviews on all of them. Even though I wasn't familiar with parts of the codebase that was affected, I wanted to make sure that the changes were adequate and that I somewhat understood them. While doing these reviews, I remarked that I had gained some shared responbility; I would be (atleast partially) held accountable if things went awry because of the newly merged pull request. This reinforced in me the saying that writing code is not the only way to contribute to open-source.

I will end this section with a quote I first heard from [Steven](https://github.com/SteveDiamond) that I wholly believe in, it goes something like: "what's always really important in open source are not the users but actually the contributors".

<h2 id="current-state">What's next?</h2>

Although I recently took a break from writing code to focus on my master's, I am still looking forward to contribute once again.

The following things are on our agenda:
- reformatting the [GraphBLAS backend](https://github.com/cvxpy/cvxpy/pull/2453) and add it to CVXPY as an optional dependency
- porting the examples library to use Marimo and add some interactivity
- applying to one of the [NASA ROSES open source grant](https://science.nasa.gov/open-science/nasa-open-science-funding-opportunities/)
- adding a searchable atomic function to the docs (this is actually unfinished work from the website revamp project)
- refactoring the current SciPy backend (thanks to some recent incredible work by SciPy to add [ND sparse support](https://github.com/scipy/scipy/issues/21923))

I am also taking a graduate class on [optimization and machine learning in power systems](https://www.polymtl.ca/programmes/cours/meth-opt-et-apprentissage-pour-reseaux-elec) next semester and am hoping to add some (or write my own) examples to the library.

To end this blogpost, I just wanted to say thank you to the amazing CVXPY team, namely [Steven](https://github.com/SteveDiamond), [Parth](https://github.com/PTNobel), [Philipp](https://github.com/phschiele) and [Riley](https://github.com/rileyjmurray). I have learned a tremendous amount through your code reviews, discussions and mentorship. In the off-chance that one of you read this, please know you have inspired me a lot and it is an absolute honor to work with you.
