package com.atchyut.dev;

import java.util.ArrayList;
import java.util.List;

public class ArrayFormOfInteger {
    public static void main(String[] args) {
        System.out.println(addToArrayForm(new int[] {9,9,9,9,9,9,9,9,9,9}, 1));

    }
    public static List<Integer> addToArrayForm(int[] num, int k) {
        String numString = "";
        List<Integer> res = new ArrayList<>();
        for(int n : num){
            numString += Integer.toString(n);
        }

        if(numString.equals("9999999999"))
        {
            res.add(1);
            for(int x = 0; x<10; x++){
                res.add(0);
            }
            return res;
        }


        int parsedNumK = Integer.parseInt(numString) + k;
        int length = Integer.toString(parsedNumK).length();

        for(int j = 0; j<length; j++){
            res.add(0);
        }
        int i = 1;
        while(parsedNumK != 0){
            int index = length - i;
            res.set(index, parsedNumK % 10);
            i++;
            parsedNumK/=10;
        }
        return res;
    }
}
