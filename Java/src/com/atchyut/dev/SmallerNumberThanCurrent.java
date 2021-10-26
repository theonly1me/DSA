package com.atchyut.dev;

public class SmallerNumberThanCurrent {
    public static void main(String[] args) {
        smallerNumbersThanCurrent(new int[]{6,5,4,8});
    }

    public static int[] smallerNumbersThanCurrent(int[] nums) {
        int i, j, count;
        i = j = count = 0;
        int[] smallerNums = new int[nums.length];

        while(i < nums.length){

            if(nums[j] < nums[i]) {
                count++;
            }
            if(j == nums.length -1){
                smallerNums[i] = count;
                i++;
                j = 0;
                count = 0;
            } else
                j++;
        }
        return smallerNums;
    }
}
