def palindrome(s: str) -> bool:
    '''The complexity of this solution is O(n)'''
    return s == s[::-1]

print(palindrome("lol"))