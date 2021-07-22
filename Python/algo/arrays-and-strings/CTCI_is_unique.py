def is_unique(s: str) -> bool:
    i = 0
    j = len(s) - 1
    while j!=0:
        if s[i] == s[j]:
            return False
        else:
            if(i != j-1):
                i+=1
            else: 
                i=0
                j-=1 
    return True

print(is_unique('abc'))
