package com.atchyut.dev;

public class FlipImage {
    public static void main(String[] args) {
        System.out.println(flipAndInvertImage(new int[][]{{1,1,0},{1,0,1},{0,0,0}}));
    }

    public static int[][] flipAndInvertImage(int[][] image){
        int r, c, length = image.length;
        r = c = 0;
        int back = length - 1;
        while(true) {
            if(r == length -1 && c == back)
                break;
            if (c < length) {
                if (length % 2 == 0) {
                    if(c < back)
                        swap(image, r, c, back);
                    else {
                        c = 0;
                        back = length -1;
                        r++;
                    }
                } else {
                    if (c != back)
                        swap(image, r, c, back);
                    else {
                        c = 0;
                        back = length -1;
                        r++;
                    };
                }
                c++;
                back--;
            }else {
                r++;
            }
        }
        return image;
    }

    public static void swap(int [][] image, int r, int c, int back) {
        int temp = image[r][c] ^ 1;
        image[r][c] = image[r][back] ^ 1;
        image[r][back] = temp;
    }
}
