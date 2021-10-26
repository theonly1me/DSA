package com.atchyut.dev;

import java.util.List;

public class CountMatch {
    public static void main(String[] args) {
    }

    public int countMatches(List<List<String>> items, String ruleKey, String ruleValue) {
        int count = 0;
        for(List<String> item : items){
            if(ruleKey.equals("type") && item.get(0).equals(ruleValue)
                    || ruleKey.equals("name") && item.get(2).equals(ruleValue)
                    || ruleKey.equals("color") && item.get(1).equals(ruleValue))
                count++;
        };
        return count;
    }
}
