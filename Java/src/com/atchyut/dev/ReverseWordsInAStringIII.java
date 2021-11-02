package com.atchyut.dev;

import java.util.Arrays;

public class ReverseWordsInAStringIII {
    public static void main(String[] args) {
        System.out.println(reverseWords("Let's take LeetCode contest"));
    }
    public static String reverseWords(String s) {
         char[] characters = s.toCharArray();
         int i = 0, j = characters.length -1;
         while(i <= j){
             swap(characters, i, j);
             i++;
             j--;
         }
         String[] arr  = toString(characters).split(" ");
         i = 0; j = arr.length -1;
         while(i <= j){
             swap(arr, i, j);
             i++; j--;
         }
         return toString(arr);
    }

    public static void swap(char[] s, int i, int j){
        char temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    }

    public static void swap(String[] s, int i, int j){
        String temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    }

    public static String toString(char[] s){
        StringBuilder sb = new StringBuilder();
        for(char c : s ){
            sb.append(c);
        }
        return sb.toString();
    }

    public static String toString(String[] s){
        StringBuilder sb = new StringBuilder();
        for(String c : s ){
            sb.append(" ");
            sb.append(c);
        }
        return sb.toString();
    }
}
