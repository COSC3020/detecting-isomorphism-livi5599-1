# Graph Isomorphism

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

The worst case time complexity is big $\Theta(v^2 * v!)$, where v is the number of nodes in each given graph (if the graphs are not the same length, the algorithm ends very early on).  This comes from the getAllPermutations function and what is done with each permutation.  The getAllPermutations function has a runtime of big $\Theta(v!)$, and for each permutation, big $\Theta(v^2)$ work is done on it (look at lines 71-75).  Combining these complexities, this makes the overall time complexity big $\Theta(v^2 * v!)$.

-----

I got help from ChatGPT and Ali.  I asked ChatGPT for a description on what isomorphism was as a refresher, and I used other test code and got help from ChatGPT when writing the test code.  Ali helped me understand what needed to be changed when certain tests weren't passing, which guided me in what I needed to implement.  I also got the getAllPermutations function from my brute-force sorting implementation.

I started this assignment last semester.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
