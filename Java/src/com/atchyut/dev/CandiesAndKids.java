package com.atchyut.dev;

import java.util.ArrayList;
import java.util.List;

public class CandiesAndKids {
    public static void main(String[] args) {
        System.out.println(kidsWithCandies(new int[]{2,3,5,1,3}, 3));
    }
    static List<Boolean> kidsWithCandies(int[] candies, int extraCandies){
        List<Boolean> result = new ArrayList<>();
        int max = 0;

        for(int i = 0; i < candies.length; i++){
            if(max < candies[i]) max = candies[i];
        }

        for (int i = 0; i < candies.length; i++)
            result.add(candies[i] +  extraCandies >= max);

        return result;
    }
}
