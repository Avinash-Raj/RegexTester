import re


class RegexParser:
    def __init__(self):
        pass

    @classmethod
    def parse(cls, regex, data, mod):
        try:
            if mod:
                formed_regex = ''
                if 'g' in mod:
                    if len(mod) == 1:
                        formed_regex = regex
                    else:
                        mod = mod.replace('g', '')
                        formed_regex = '(?' + mod + ')' + regex
                else:
                    formed_regex = '(?' + mod + ')' + regex

                result = re.findall(formed_regex, data)
                return result

            result = re.search(regex, data).group()
            return result

        except:
            return None
