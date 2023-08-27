/* URLify (Write a method to replace all spaces in a string with '%20').
You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.
(Note: if implementing in java, please use a character array so that you can perform this operation in place.) */

// Time Complexity: O(n) & Space Complexity: O(n)
Class Solution {
    public static String urlify(String input, int trueLength) {
        StringBuilder ans = new StringBuilder();
        for(int i = 0; i < trueLength; i++) {
            char c = input.charAt(i);
            if (c == ' ') {
                ans.append("%20");
            } else {
                ans.append(c);
            }
        }
        return ans.toString();
    }
}

// Test
public static void main(String[] args) {
	String str = "Mr John Smith";
    String spaces = "    ";
	int trueLength = str.length();
	String res = urlify(new String(str + spaces), trueLength);	
	System.out.println(res);
}

// Transforming the input
// Time Complexity: O(n) & Space Complexity: O(1)
Class Solution {
    public static void urlify(char[] toBeTransformed, int trueLength) {
        int j = toBeTransformed.length - 1;

        for (int i = currLength - 1; i >= 0 && i < j; --i) {
            if (toBeTransformed[i] == ' ') {
                toBeTransformed[j--] = '0';
                toBeTransformed[j--] = '2';
                toBeTransformed[j--] = '%';
            } else {
                toBeTransformed[j--] = toBeTransformed[i];
            }
        }
    }
}

// Test
public static void main(String[] args) {
	String str = "Mr John Smith    ";
	char[] arr = str.toCharArray();
	int trueLength = findLastCharacter(arr) + 1;
	urlify(arr, trueLength);	
	System.out.println("\"" + AssortedMethods.charArrayToString(arr) + "\"");
}
