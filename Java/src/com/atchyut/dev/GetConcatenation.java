package com.atchyut.dev;

import java.util.Arrays;

public class GetConcatenation {
    public static void main(String[] args) {
        System.out.println(Arrays.toString(getConcatenation(new int[]{1, 2, 3})));
    }


    public static int[] getConcatenation(int[] nums) {
        int[] ans = new int[2*nums.length];
        int i = 0, j = 0;
        while(i < 2 * nums.length) {
            ans[i] = nums[j];
            i++;
            j++;
            if(j > nums.length - 1)
                j = 0;
        }
        return ans;
    }
}
