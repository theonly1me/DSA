package com.atchyut.dev;

public class MoveZeroes {
    public static void main(String[] args) {
        moveZeroes(new int[] {0,1,0,3,12});
    }
    public static void moveZeroes(int[] nums) {
        int i=0, j = Integer.MIN_VALUE;
        while(i < nums.length){
            if(nums[i] == 0 && j < 0){
                //First loop to find the first 0 and set J to that zero
                j = i;
            }
            //swap until you send that zero to the end
            if(nums[i] != 0 && j >= 0){
                swap(nums, i, j);
                j++;
            }
            i++;
        }
    }

    public static void swap(int[] arr, int i, int j){
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
