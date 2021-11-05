package com.atchyut.dev;

import java.util.HashMap;
import java.util.Map;

public class Anagrams {
    public static void main(String[] args) {
        canConstruct("aa","aab");
    }
    public static boolean canConstruct(String ransomNote, String magazine) {
        Map<Character, Integer> ransomMap = buildCharMap(ransomNote);
        Map<Character, Integer> magMap = buildCharMap(magazine);
        for(Map.Entry<Character, Integer> e : ransomMap.entrySet()){
            Character key = e.getKey();
            Integer available = magMap.get(key);
            if(available == null || e.getValue() > available)
                return false;
        }
        return true;
    }

    public static Map<Character, Integer> buildCharMap(String s){
        Map<Character, Integer> charMap = new HashMap<>();
        for(int i = 0; i<s.length(); i++){
            charMap.put(s.charAt(i), charMap.get(s.charAt(i)) == null ? 1 : charMap.get(s.charAt(i)) + 1);
        }
        return charMap;
    }
}
