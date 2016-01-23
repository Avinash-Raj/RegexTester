import re


class RegexParser:
    def __init__(self):
        pass

    @staticmethod
    def __find_iter(regex, data, mod=None):
        match_list = []
        reg = regex

        if mod:
            reg = '(?' + mod + ')' + regex

        for i in re.finditer(reg, data):
            match_list.append((i.group(), i.start()))

        return match_list

    @classmethod
    def parse(cls, regex, data, mod):
        try:
            if mod:
                if 'g' in mod:
                    if len(mod) == 1:
                        return cls.__find_iter(regex, data)
                    else:
                        mod = mod.replace('g', '')
                        return cls.__find_iter(regex, data, mod)

                return [cls.__find_iter(regex, data, mod)[0]]

            return [cls.__find_iter(regex, data)[0]]


        except:
            return None
