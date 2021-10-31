package com.atchyut.dev;

public class SearchInsert {
    public static void main(String[] args) {
        System.out.println(searchInsert(new int[] {1,3,5,6}, 4));
    }

    public static int searchInsert(int[] nums, int target) {
        int s, e;
        s = 0; e = nums.length - 1;
        if(nums.length == 0) return 0;
        while(s<=e){
            int mid = s + (e-s)/2;
            if(nums[mid] == target)
                return mid;
            if(nums[mid] > target)
                e = mid - 1;
            else if(nums[mid] < target)
                s = mid + 1;
        }
        return e + 1;
    }
}
