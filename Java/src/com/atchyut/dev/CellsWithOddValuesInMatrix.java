package com.atchyut.dev;

import java.util.Arrays;

public class CellsWithOddValuesInMatrix {
    public static void main(String[] args) {
        System.out.println(oddCells(2,3,new int[][]{{0, 1}, {1, 1}}));
    }

    public static int oddCells(int m, int n, int[][] indices) {
        int[][] matrix = new int[m][n];
        int count = 0;
        /**
         *      [[0,0,0],[0,0,0]] mxn matrix
         */
        for(int i=0; i<indices.length; i++){
            int rOfI = indices[i][0];
            int cOfI = indices[i][1];
            for(int j = 0; j<matrix[rOfI].length; j++){
                matrix[rOfI][j]++;
            }
            for(int k = 0; k< matrix.length; k++){
                matrix[k][cOfI]++;
            }
        }

        for(int i=0; i< matrix.length; i++){
            for(int j = 0; j < matrix[i].length; j++){
                if(matrix[i][j] % 2 != 0) count++;
            }
        }
        return count;
    }
}
