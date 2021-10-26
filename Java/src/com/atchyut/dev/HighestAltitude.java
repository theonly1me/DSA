package com.atchyut.dev;

public class HighestAltitude {
    public static void main(String[] args) {
        System.out.println(largestAltitude(new int[]{-5, 1, 5, 0, -7}));
    }

    static int  largestAltitude(int[] gain){
        int max, current;
        max = current = 0;
        for (int j : gain) {
            current += j;
            max = Math.max(max, current);
        }
        return max;
    }
}
