package com.atchyut.dev;

import java.util.Arrays;

public class ShuffleArray {
    public static void main(String[] args) {
        System.out.println(Arrays.toString(shuffle(new int[]{1, 2, 3, 4, 4, 3, 2, 1}, 4)));
    }

    static int[] shuffle(int[] nums, int n){
      int[] a,b,c;
      a = new int[n];
      b = new int[n];
      c = new int[2*n];

      int x = 0, y = 0;
      for (int i=0; i < 2*n; i++){
          if(i < n){
              a[x] = nums[i];
              x++;
          }
          else {
              b[y] = nums[i];
              y++;
          }
      }
      int p = 0, q = 0;
      for (int i=0; i < 2*n; i++){
          if(i%2 == 0){
              c[i] = a[p];
              p++;
          } else {
              c[i] = b[q];
              q++;
          }
      }
      return c;
    }
}
