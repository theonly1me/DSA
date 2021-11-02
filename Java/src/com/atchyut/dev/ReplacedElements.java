package com.atchyut.dev;

import java.util.Arrays;

public class ReplacedElements {
    public static void main(String[] args) {
        System.out.println(Arrays.toString(replaceElements(new int[]{17, 18, 5, 4, 6, 1})));
    }
    public static int[] replaceElements(int[] arr) {
        int i=0,j=i+1;
        int max = 0;
        while(i<arr.length -1){
            if(j == arr.length){
                swap(arr, i, max);
                i++;
                j = i+1;
                max = j;
            } else {
                max = arr[max] > arr[j] ? max : j;
                j++;
            }

        }
        arr[arr.length -1] = -1;
        return arr;
    }

    public static void swap(int[] arr, int i, int j){
        int temp = arr[i];
        arr[i] = arr[j];
    }
}
