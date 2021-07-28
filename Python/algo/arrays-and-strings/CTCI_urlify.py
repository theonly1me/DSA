def urlify(s: str) -> bool:
    '''The complexity of this solution is O(n)'''
    return s.strip().replace(" ", "%20")

print(urlify("Mr John Smith   "))