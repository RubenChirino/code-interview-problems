// Question
// Assume you have a method isSubstring which checks if one word is a substring of another.
// Given two strings, s1 and s2, write a code to check if s2 is a rotation of s1 using only one call to isSubstring.
// E.G, "waterbottle" is a rotation of "erbottlewat"

class Solution {
    public Boolean stringRotation(String s1, String s2) {
        if (s1.length() != s2.length()) {
            return false;
        }

        // You can use just a String (String combined = s1 + s1), but for big data it will be better to use a StringBuilder
        StringBuilder combined = new StringBuilder(s1.length() * 2);
        combined.append(s1).append(s1);
    
        return isSubstring(combined, s2);
    }

    public Boolean isSubstring(StringBuilder s1, String s2) {
        return s1.indexOf(s2) != -1;
    }
}

System.out.println(stringRotation("waterbottle", "erbottlewat")); // true

System.out.println(stringRotation("abcde", "cdeab")); // true

System.out.println(stringRotation("abcde", "abced")); // false
