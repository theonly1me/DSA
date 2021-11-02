package com.atchyut.dev;

import java.util.Arrays;

public class TwoSumTwo {
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[] {3,24,50,79,88,150,345}, 200)));
    }
    public static int[] twoSum(int[] nums, int target) {
        int i = 0, j = i+1;
        while(i != nums.length){
            if(nums[i] + nums[j] == target){
                return new int[]{i+1,j+1};
            } else if(nums[i] + nums[j] < target){
                if(j != nums.length -1)
                    j++;
                else {
                    i++;
                    j = i+1;
                }
            } else {
                i++;
                j = i+1;
            }
        }
        return new int[] {0,0};
    }
}
