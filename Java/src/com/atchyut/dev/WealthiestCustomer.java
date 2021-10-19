package com.atchyut.dev;

public class WealthiestCustomer {

    public static void main(String[] args) {
        System.out.println(maxWealth(new int[][]{{1,2,3},{3,2,1}}));
    }

    public static int maxWealth(int[][] accounts){
        int richest = 0;
        for(int[] arr : accounts){
            int sum = sumOfArr(arr);
            if(richest < sum)
                richest = sum;
        }
        return richest;
    }

    public static int sumOfArr(int[] arr){
        int sum = 0;
        for(int num : arr)
            sum += num;
        return sum;
    }
}