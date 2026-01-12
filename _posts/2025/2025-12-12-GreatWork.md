---
title: Reflections on doing great work
tags: Journey Optimization
---

This is my personal reflection on [how to do great work](https://paulgraham.com/greatwork.html) by [Paul Graham](https://paulgraham.com/index.html).
I read this essay after working on [DNLP](https://web.stanford.edu/~boyd/papers/dnlp.html)  during a visit in Stephen Boyd's group at Stanford.
I could relate to a lot of things that Paul highlights in his essay and wanted to share these reflections.

### What to work on
The essay begins with the first step: deciding what to work on.
Thankfully, as a graduate student, this task is mostly left to the advisor.
In my case, I was very fortunate to be advised by Stephen Boyd, who wanted someone to extend CVXPY to interface nonlinear programming (NLP) solvers.

> What are you excessively curious about — curious to a degree that would bore most other people? That's what you're looking for.

Although the project was proposed by Stephen, I'd like to take a bit of credit for being \"exceedingly curious\" in the first place.
Having contributed to CVXPY for almost two years prior to the visit, I was very invested in this idea of working on an extension for NLP, probably more so than most people.
In addition, after some discussions with Steven Diamond, I learned that this project was in demand for a long time, both from Stephen and other members of the community, which further motivated me to have another attempt at getting it done.

During the rest of the essay, Paul presents different \"themes\" that relate to doing great work.
I have selected a few which I think are worth highlighting.

### Unfashionable problems
The first thing that resonated with me was Paul's emphasis on working on unfashionable and overlooked problems.
> [...] the most common type of overlooked problem is not explicitly unfashionable in the sense of being out of fashion. It just doesn't seem to matter as much as it actually does.

He also adds that: 
> One of the most interesting kinds of unfashionable problem is the problem that people think has been fully explored, but hasn't. 

I think this was the case for DNLP.
Interfaces to NLP solvers have existed for decades, most people, including me, probably thought there wasn't anything interesting to explore. 
In fact, our project isn't even the first NLP interface written in Python, as Pyomo and PyOptInterface already existed for a long time.
The project is also fundamentally different than fashionable projects of our time: GPU acceleration, differentiable optimization and AI.

> Great work often takes something that already exists and shows its latent potential.

The difficulty of using non-differentiable functions with NLP solvers has created many interesting alternatives: some use boolean variables, others just ignore them completely, and the rest mostly restrain from using them in the first place.
With DNLP, we were able to explore the potential of a fourth option: a discipline that guarantees a lossless transformation to an equivalent smooth program.

### Outlier ideas
Paul then mentions outlier ideas as another possible factor for great work.
> Boldly chase outlier ideas, even if other people aren't interested in them — in fact, especially if they aren't. 

I don't think by any means DNLP was an outlier idea, but our first attempts at it could certainly fit in that category.
We tried many different reformulations which violated all sorts of constraint qualifications.
I think most people in the field, especially the experts, would have been completely disinterested in the things we tried initially.
Paul adds that:
> If you're excited about some possibility that everyone else ignores, and you have enough expertise to say precisely what they're all overlooking, that's as good a bet as you'll find.

And again, a lot of credit must go to Stephen; he was probably excited about this possibility for a couple of years by now.
I remember asking him early on about the motivation to do this project and he simply said: \"it should have been done a long time ago\".
Although, as the project shaped itself and our expertise developed, we were all definitely more aware of this possibility as well.

### Hard work
The next component of great work is something that's obvious: working hard and putting in the hours.
> Great work usually entails spending what would seem to most people an unreasonable amount of time on a problem.

I recall one critical point of our project which was about computing derivatives.
In an initial prototype, we used [cvxtorch](https://github.com/cvxpy/cvxtorch) which converts CVXPY expressions to PyTorch ones.
Then derivatives could be computed using the convenient `backward()` method.
However, during a meeting, Stephen pointed out that it wasn't necessary, with a clever reformulation of the problem, we could guarantee that derivatives could all be computed analytically.
This took us a tremendous amount of work, basically requiring us to write the Jacobian and Hessian of every atom from scratch, verify the canonicalization of all atoms, and write many many tests.
But we were absolutely happy to go through this process if it would help the final product (and it most certainly did.. in hindsight, maybe it was one of the best decisions we could have made).

> Great work happens by focusing consistently on something you're genuinely interested in. 

I think the combination of positive feedback from Stephen, and the software improving day by day, allowed us to stay genuinely interested in the project for a very long time. 
> When you pause to take stock, you're surprised how far you've come.

And it turns out, after months of making some small progress daily, we had test coverage for all important atoms, and also dozens of examples in various applications to showcase the usability of the new NLP interface.
### Novelty
Then Paul begins to talk about assessing the quality of your ideas.
>   When an idea seems simultaneously novel and obvious, it's probably a good one.

I felt something similar on the day we formalized the grammar behind DNLP.
At the time, it seemed like such a simple and elegant idea, and yet, it took us many different versions before getting it right.

> That's how new ideas can be both obvious and yet hard to discover: they're easy to see after you do something hard.

At the beginning we were slightly worried that people would comment on DNLP saying it is \"simply\" replacing affine with smooth in the DCP rules".
I am now confident to reply that \"yes, it literally is\", because in hindsight it is truly just that simple.
### Seeking colleagues
Finally, Paul highlights a critical aspect of doing great work:
> Seek out the best colleagues. 

I didn't explicitly do this, as I was focused on getting things working in the beginning.
But through some sheer luck it kind of happened naturally.
I met Daniel Cederberg as he was teaching 364a for the summer quarter, and after a few discussions, he joined our project.
It is without exaggeration that I say meeting and working with him is the best thing that could have happened to me during the visit.
> There are a lot of projects that can't be done alone, and even if you're working on one that can be, it's good to have other people to encourage you and to bounce ideas off.

This point was also particularly relatable for me.
Through the countless implementations of derivatives and canonicalization of atoms, it was absolutely crucial to have someone to debug issues and share ideas with.
Not only was Daniel extremely productive and efficient, he has great ideas and an even greater sense of humor.
It's been a tremendous pleasure to work (and continue working) with him.
> Colleagues don't just affect your work, though; they also affect you. 

I also got a chance to visit Daniel and his girlfriend Clara in Sweden for almost two weeks.
I got to see the many aspects of Daniel's life back home, and it was very exciting to meet all his family and friends over there.
> So work with people you want to become like, because you will.

Maybe that was the reason I enjoyed working with Daniel so much: in some way, I probably wanted to become more like him.
### Conclusions
Overall, I think we did truly great work for DNLP.
I hope we will be able to explore this new discipline to the fullest extent over the upcoming years.
I personally believe that many more fields will benefit from this work and I am greatly excited to see how it will turn out.

It was also very helpful to write this blogpost.
Paul's blogs in general are absolutely insightful, but \"how to do great work\" is an all-time classic; I definitely recommend you to have a read.
I will certainly look at it many more times in the future.

Naturally, some parts of this reflection will sound presumptuous.
But I think this is the price that must be paid in order to have such an introspection.
Apologies if it irritates anyone.
(Although, I doubt anyone truly reads these blogposts, except maybe myself in a few years)
