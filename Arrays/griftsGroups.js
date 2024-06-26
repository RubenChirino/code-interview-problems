/* Gitting groups (example question)

At Audible, a subscriber can git an audiobook trom nis/ner library to any
otner non-suoscriber to kick stant tell aualovook ourney. Ine nirst ume
subscriber can receive un to a maximum of N audiobooks from their friends/relatives. When a non-subscriber receives an audiobook, we can
Inter that une to may de relatea. Similarly, I tne non-suoschloer receives gifted books from two other subscribers, we can infer that all of them are related and the three of them form a group. More formally, a group is
composed or all or the people who know one another. wnetner direcuv or transitively. Audible would like your help finding out the number of such
distinct groups from the input data

Example
Consider the following input matrix M:
110
110
001

<Image />

Every row corresponds to a subscriber and the value Man determines if / was gifted a book by i. In the above example, user o has gifted a book to user and so thev are connected 0l 1. while oerson < nas not received al book from anyone or gifted book to anyone. Therefore, there are 2 groups.
M[i][j] = 1 if i == j (Each of the people is known to self)

Determine the number of groups represented in a matrix.

Note: The method signatures may vary slightly depending on the requirements of the chosen language. For example, c language will have an argument that represents the number of rows and columns in the matrix. Also, Java will receive a list rather than an array.

Function Description
Complete the function countGroups in the editor below.

countGroups has the following parameter(s):
int related[n]: an array of strings of binary digits related[i] that represent
connections of people

Returns:
int: an integer that represents the number of groups of people

Constrains

* 1 < n < 300
* 0 < i < n
* |related| = n
* Each related[i] contains a binary string of n zeros and ones. Related is a square matrix.

Input Format for Custom Testing
Input from stdin will be processed as follows and passed to the function.

The first line contains an integer n, the size of the square association
matrix, related.
The next n lines each contain a binary string of length n that represents a
row in matrix, related[i] where 0 < i < n.

Sample Case 0

Sample Input

STDIN        Function
-----        --------
4       ->   size of related[] n = 4
1100    ->   related = ['1100', '1110', '0110', '0001']
1110
0110
0001

Sample Output
2

Explanation
Squares highlighting a connection between two people are highlighted in
green. Each of the people is known to self. so they are highlighted in
gray.

There are n = 4 people numbered related 0 through related 3).
There are 2 pairs who directly know each another: (related[0], related[1])
and related 17.related 2)). Because a relation is transitive, the set of
people related 0, related 1, related 2 is considered a single group.
The remaining person. related 3), does not know anv other people and is
a separate group: {related[3]}.
There are a total of groups.

Sample Input

STDIN        Function
-----        --------
5       ->   size of related[] n = 5
10000    ->   related = ['10000', '01000', '00100', '00010', '00001']
01000
00100
00010
00001

Sample Output
5

Explanation

1 0 0 0 0
0 1 0 0 0
0 0 1 0 0
0 0 0 1 0
0 0 0 0 1

No direct relationships are shown so there are 5 groups: (related[0]},
(related[1]}, (related[2]}, (related[3]} and (related[4]}.

*/

/*
*  Complete the 'countGroups' function below.
* 
*  The function is expected to return an INTEGER
*  The function accepts STRING_ARRAY related as parameter
*/ 

function countGroups(related) {
    // Write your code here
}