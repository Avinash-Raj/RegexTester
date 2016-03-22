import re
import traceback
from itertools import groupby


class RegexParser:
    def __init__(self):
        pass

    @staticmethod
    def group_check(regex):
        if re.search(r'(?m)((?<!\\)(?:\\{2})*|^)\(', regex):
            return True

        return False

    @staticmethod
    def __find_iter(regex, data):
        '''
        This function would return the list of tuples(matched elements and groups)
        along with their indexes
        Syntax:
        [(index, match, pos), (index, match, pos)]
        Examples:
        [(0, 'sdds', 0), (1, 'kd', 3)]
        '''

        match_list = []
        group_list = []
        group_exists = RegexParser.group_check(regex)

        if group_exists:
            len_of_groups = len(next(i.groups() for i in re.finditer(regex, data))) + 1

            for index in range(len_of_groups):
                for match in re.finditer(regex, data):
                    group_list.append((index, match.group(index), match.start(index)))

            return group_list

        else:
            for match in re.finditer(regex, data):
                match_list.append(('', match.group(), match.start()))

            return match_list

    @classmethod
    def parse(cls, regex, data, mod, func):
        try:
            if mod:
                regex = '(?' + mod.replace('g', '') + ')' + regex

            if func == 'findall':
                result = cls.__find_iter(regex, data)
                code = ['import re', "re.findall(r'" + regex + "', r'" + data + "')", str([i[1] for i in result])]
                if '\n' in data:
                    code = ['import re', "re.findall(r'" + regex + "', r'''" + data + "''')",
                            str([i[1] for i in result])]

                return result, code

            result = cls.__find_iter(regex, data)
            code = ['import re', "re.search(r'" + regex + "', r'" + data + "').group()", str([i[1] for i in result])]
            if '\n' in data:
                code = ['import re', "re.search(r'" + regex + "', r'''" + data + "''').group()",
                        str([i[1] for i in result])]

            if len(result[0]) == 3 and result[0][0] != '':
                index_list = []
                output_list = []
                for item in result:
                    if item[0] not in index_list:
                        index_list.append(item[0])
                        output_list.append(item)

                result = output_list
                print result
                code = ['import re', "match_obj = re.search(r'" + regex + "', r'''" + data + "''')", "match_obj.group(), match_obj.groups()",
                        str(result[0][1]) + ', ' + str([i[1] for i in result[1:]])]

            return result, code

        except Exception as ex:
            if type(ex).__name__ != 'IndexError' and type(ex).__name__ != 'StopIteration':
                return traceback.format_exc()
            return

    @classmethod
    def group_by(cls, lst):
        return {key: [i[1:] for i in group] for key, group in groupby(lst, lambda x: x[0])}
