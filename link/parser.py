import re


class RegexParser:
    def __init__(self):
        pass

    @staticmethod
    def __find_iter(regex, data, mod=None):
        match_list = []

        for i in re.finditer(regex, data):
            match_list.append((i.group(), i.start()))

        return match_list

    @classmethod
    def parse(cls, regex, data, mod, func):
        try:
            if mod:
                regex = '(?' + mod.replace('g', '') + ')' + regex

            if func == 'findall':
                result = cls.__find_iter(regex, data)
                code = ['import re', 're.findall(' + regex + ', ' + data + ')', str([i[0] for i in result])]
                return result, code

            result = [cls.__find_iter(regex, data)[0]]
            code = ['import re', "re.search(r'" + regex + "', '" + data + "').group()", str([i[0] for i in result])]
            return result, code

        except:
            return None
