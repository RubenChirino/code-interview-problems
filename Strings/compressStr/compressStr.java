// Implement a method to perform basic string compression using the counts of the repeated characters.
// For example, the string 'aabcccccaaa' would become 'a2b1c5a3'.
// If the "compressed" string would not become smaller than the original string, your method should return the original string.
// You can assume the string has only uppercase and lowercase letter (a-z). 

class Solution {
    public String compress(String str) {
        if (str == null || str.length() <= 1) {
            return str;
        }
        StringBuilder compressed = new StringBuilder(str.length());
        int counter = 1;
        char pointer = str.charAt(0);
        for (int i = 1; i < str.length(); i++) {
            char letter = str.charAt(i);
            if (pointer == letter) {
                counter++;
            } else {
                compressed.append(pointer).append(counter);
                pointer = letter;
                counter = 1;
            }
        }
        // Handle the last character
        compressed.append(pointer).append(counter);
        // Getting the result
        return (compressed.length() < str.length()) ? compressed.toString() : str;
    }
}

System.out.println(compress("aabcccccaaa")); // a2b1c5a3

System.out.println(compress("aaaaaa")); // a6

System.out.println(compress("z")); // z

System.out.println(compress("abcdefghijk")); // abcdefghijk
