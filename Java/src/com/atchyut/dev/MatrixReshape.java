package com.atchyut.dev;

import java.util.Arrays;

public class MatrixReshape {
    public static void main(String[] args) {
        System.out.println(Arrays.deepToString(matrixReshape(new int[][]{{1, 2}, {3, 4}}, 4, 1)));
    }

    public static int[][] matrixReshape(int[][] mat, int r, int c) {
        int[][] res = new int[r][c];
        int m = mat.length;
        int n = mat[0].length;
        if(m*n != r*c) return mat;

        for(int i=0, k=0, l=0; i<m; i++){
            for(int j=0; j<n; j++, l++){
                if(l==c){
                    k++;
                    l = 0;
                }
                res[k][l] = mat[i][j];
            }
        }
        return res;
    }
}
