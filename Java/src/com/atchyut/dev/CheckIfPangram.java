package com.atchyut.dev;

import java.util.HashMap;
import java.util.Map;

public class CheckIfPangram {
    public static void main(String[] args) {
        System.out.println(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
    }

    public static boolean checkIfPangram(String sentence) {
        if(sentence.length() < 26) return false;
        char[] alphabet = new char[]{'a','b','c','d','e','f',
                'g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};
        int i=0, j=0;
        while(i < alphabet.length){
            char c = sentence.charAt(j);
            if(c != alphabet[i]){
                if(j == sentence.length() - 1) {
                    return false;
                }
                j++;
            } else {
              j=0;
              i++;
            }
        }
        return true;
    }
}
