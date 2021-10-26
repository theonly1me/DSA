package com.atchyut.dev;

public class GoodPairs {

    public static void main(String[] args) {
        numIdenticalPairs(new int[]{1,2,3,1,1,3});
    }
    public static int numIdenticalPairs(int[] nums) {
        int i, j, pairs;
        i = pairs = 0;
        j = 1;

        while(i < nums.length) {

            if(nums[i] == nums[j])
                pairs++;

            if(j != nums.length - 1)
                j++;
            else {
                i++;
                if(i != nums.length - 1)
                    j = i+1;
            }
        }
        return pairs;
    }
}
