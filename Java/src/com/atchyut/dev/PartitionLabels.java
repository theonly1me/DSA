package com.atchyut.dev;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class PartitionLabels {
    /**
     *
     */
    public static void main(String[] args) {
        System.out.println(partitionLabels("ababcbacadefegdehijhklij"));
    }
    public static List<Integer> partitionLabels(String s){
        List<Integer> res = new ArrayList<>();
        Map<Character, Integer> lastIndexMap = new HashMap<>();
        for(int i=0; i<s.length(); i++){
            lastIndexMap.put(s.charAt(i), i);
        }

        int size = 0, end = 0;
        for(int i=0; i<s.length(); i++){
            size++;
            end = Math.max(end, lastIndexMap.get(s.charAt(i)));
            if(end == i){
                res.add(size);
                size = 0;
            }
        }
        return res;
    }
}
