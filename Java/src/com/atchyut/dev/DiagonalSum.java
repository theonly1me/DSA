package com.atchyut.dev;

public class DiagonalSum {
    public static void main(String[] args) {
        System.out.println(diagonalSum(new int[][] {{4,6,7},{2,9,4},{5,5,5}}
        ));
    }

    /**
     * 0,0 | 0,2
     * 1,1 | 1,1
     * 2,2 | 2,0
     *
     * 11 + 9 + 5 + 5
     */

    public static int diagonalSum(int[][] mat) {
        int f, b, sum;
        f = sum = 0;
        b = mat.length - 1;
        while(f < mat.length && b >= 0){
            if(mat.length % 2 != 0)
                if(f == b)
                    sum += mat[f][f];
                else sum += mat[f][f] + mat[f][b];
            else
                sum += mat[f][f] + mat[f][b];
            f++;
            b--;
        }
        return sum;
    }
}
