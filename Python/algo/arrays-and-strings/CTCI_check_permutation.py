class CheckPermutation():

    @classmethod
    def check_permutation_naive(cls, s1, s2):
        '''The complexity of this naive solution is O(N^2)'''
        result = True
        if(len(s1) != len(s2)): return False
        for i in range(len(s1)):
            result = False if s1[i] not in s2 else True
        return result
    
    @classmethod
    def check_permutation_sort(cls, s1, s2):
        '''The complexity of this solution is O(N * log N)'''
        return sorted(s1) == sorted(s2)
    
    @classmethod
    def check_permutation_dict(cls,s1,s2):
        '''The complexity of this solution is O(N)'''
        return cls._create_dict(s1) == cls._create_dict(s2)

    @staticmethod
    def _create_dict(s):
        char_map = { letter: s.count(letter) for letter in s}
        return char_map

print(CheckPermutation.check_permutation_naive('hello', 'lelhoe'))
print(CheckPermutation.check_permutation_sort('hello', 'lelho'))
print(CheckPermutation.check_permutation_dict('hello', 'lelhho'))





