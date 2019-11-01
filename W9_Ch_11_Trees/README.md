# Exam Prep Algo Mid Week
- c#: Extras/exam_prep/csharp/dateOverlapChecker.js

- [Algo Book - Ch 11](http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2135)
- [Binary Search Tree Drawing](https://cdn-media-1.freecodecamp.org/images/2rTqYlcrnWtICedt131tDft0CmkzZaViExJX)

# Easier Schedule Than The Sheet
1. Mon: BST Add, BST Min
2. Tue: BST Contains, BST Remove
3. Wed: BST Height
4. Thur: BST Size (total number of nodes)
5. Fri: BST Full (every node other than the leaves has two children)

# Description
- is an ordered data structure
- like a linked list but has a left and a right instead of a next

## left
- less than parent
## right
- greater than parent

## left 'subtree'
- all less than root
## right 'subtree'
- all greater than root

## Leaf Nodes
- no children

## Duplicates
- child that is same value of parent is chosen to be either right or left, just be consistent
  - however, this increases height of tree which increases time complexity
  - a solution is to add a count key to node and increment it for dupes
    - [Geeks for geeks BST Dupes](https://www.geeksforgeeks.org/how-to-handle-duplicates-in-binary-search-tree/)