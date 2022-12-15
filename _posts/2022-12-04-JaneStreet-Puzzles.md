---
layout: page
title: Jane Street Puzzle
---

<h1 align="center">
  Explanation of my solution
</h1>

<div align="center">
  <img width="300" alt="Jane-Street" src="https://user-images.githubusercontent.com/89562186/205675987-26634900-8be3-4c1f-94b3-bb04cbede0e6.png">
</div>

<h2 align="center">
  Die Agony - December 2022
</h2>

<p align="center">
  <a href="https://www.janestreet.com/puzzles/current-puzzle/">See the puzzle here</a> 
</p>

<h2 id="table-of-contents">Table of contents</h2>

- <a href="#brainstorming">Initial Brainstorming</a>
- <a href="#breakthrough">Potential Breakthrough</a>
- <a href="#DFS">Depth First Search</a>
- <a href="#block">Roadblocks</a>
- <a href="#persistence">Persistence</a>
- <a href="#sources">Resources</a>

<h2 id="brainstorming">Initial Brainstorming</h2>

<p align="center">
  Here is a copy of the grid from the puzzle: 
</p>

<div align="center">
  <img width="200" alt="Grid" src="https://user-images.githubusercontent.com/89562186/205823017-7d94fe9f-42b6-4d20-a8a6-a45493a639ab.png">
</div>

<p>
My first assumption was that the die was numbered from 1 to 6.

However, after the first move, landing on '5', we are already unable to move anymore.
</p>

<p>
Then I considered allowing decreases in values to reach the '-7' square. 
 
However, after a few other moves, we also get stuck. 
</p>

<p>
Then I quickly realised the complexity of this puzzle.

In addition to finding a path that could lead to the blue square, the main idea was that all six die values were unknown.

And we had to find them.
</p>

<h2 id="breakthrough">Potential Breakthrough</h2>

Without knowing the real die values, we had to resort to verifying divisibility. 

We needed to make sure that the difference of the square we would land on would be a multiple of N (where N represents the number of moves).

An elegant way to do this was to verify the congruence on N between the current value and the next value.

(I stole this idea from a fellow puzzle solver at Concordia).

For example to check if we could move from '-7' to '2' on move 3, we would simply verify that -7%3 == 2%3. 

<h2 id="DFS">Depth First Search</h2>

Given that we are trying to find an optimal path from one vertex to another,

It only feels right to use Depth First Search to iterate through the squares of the grid. 

I began by copying the general implementation of DFS. 

Then I adjusted the constraints on when a square would be added to the stack. 

After some additional system outputs and debugging, I quickly had some code running.

<h2 id="block">Roadblocks</h2>

However, there were many issues with my implementation.

First of all, I did not know whether I should allow squares to be revisited or not.

Secondly, my implementation did not consider different possible paths of the die, 

it was totally unable to backtrack from a dead-end and resume from the last junction.

Finally, and most importantly, the path never managed to reach the blue square.

<h2 id="persistence">Persistence</h2>

I kept trying many variations of my initial program.

I began by allowing repetitions. Then I tried to implement the solution backwards. 

Finally, I managed to make backtracking to a previous state work smoothly. 

The outputs were promising, there seemed to be a sequence that could lead from N = 32 to N = 11. 

I also kept track of die values, to make sure that they made sense.

I was also using a real die to have a visual understanding of moves in a grid. 

To finally solve the puzzle, I ended up having to manually iterate the first 10 moves in my backward solution.

There weren't that many possible paths since all six die values were already determined by this point. 

Overall, it took me almost 2 complete days to solve this puzzle. It was a lot of pain and persistence.

But the joy of seeing my team's name on the leaderboard made it quite worth it. 

<h2 id="sources"> Resources </h2>

Here is a collection of resources that were helpful to me:
- [DFS traversal of an array](https://www.geeksforgeeks.org/depth-first-traversal-dfs-on-a-2d-array/)
- [Congruence and Modularity](https://en.wikipedia.org/wiki/Modular_arithmetic)
- [BackTracking](https://crackfaang.medium.com/backtracking-with-c-91e3bfc56a21)
- [CPP documentation](https://en.cppreference.com/w/)

Finally, you can find the source code of my solution [here](https://github.com/Transurgeon/Euler-JaneStreet/tree/master/Jane-Street/Dec-2022).
