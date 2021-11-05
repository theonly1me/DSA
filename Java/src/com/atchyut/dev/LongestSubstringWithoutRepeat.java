package com.atchyut.dev;

import java.util.HashSet;

public class LongestSubstringWithoutRepeat {
    public static void main(String[] args) {
        lengthOfLongestSubstring("abcabcbb");
    }

    public static int lengthOfLongestSubstring(String s) {
        int left = 0, right = 1;
        int max = 0;
        HashSet<Character> hs = new HashSet<>();
        while(left < s.length()){
            if(right >= s.length() || !hs.add(s.charAt(right))){
                left++;
                right = left + 1;
            }

            int length = right - left;
            max = Math.max(length, max);
            right++;
        }
        return max;
    }
}
