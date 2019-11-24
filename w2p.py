'''
    这是一个 Python3 程序。【 注：此为 wp-site-wwii 项目专用工具文件 】

    功能说明：
        用途是根据【id】参数将当前项目（wp-site-wwii）下更新的内容同步自动拷
        贝到关联项目（gp-site-wwii）相应目录中。相关项目涉及的目录（含子目录）
        和匹配文件清单如下：
            /src/*.json
            /dist/*.jpg

    使用方法: 
        python3 w2p.py <id>

    参数说明：
        id: 必填项，指定拷贝的内容项目编号（如：de_army_avhtv25121、de_navy、de...等皆可）
    
    范例：
        python3 w2p.py de_army_avhtv25121
        python3 w2p.py de_army
        ...

    运行命令行 'python3 w2p.py -h' 获取帮助.

    重要提示：本程序必须放在 wp-site-wwii 项目目录之下使用，且 wp-site-wwii 和 gp-site-wwii 
    项目须为同一父目录下的同级子目录。文件目录结构范例如下：
    [父目录]
    |- wp-site-wwii
    |   |- w2p.py
    |   |- ...
    |- gp-site-wwii
    |   |- ...
'''
from pathlib import Path, PurePath
from shutil import copy
import argparse, re

# 同步拷贝函数
def synCopyFiles(pattern):

    # 获取 _path 对应当前目录的相对目录
    def _getRelativePath(_path):
        try:
            _relativePath = _path.relative_to(Path.cwd())
        except ValueError:
            return _path
        else:
            return _relativePath

    # 处理路径及拷贝文件
    def _synCopyFile(_sFilePath, _sBasePath, _dTargetPath, counter):
        # 同一目录结构下不处理
        if str(_sFilePath).find(str(_dTargetPath)) != 0:
            counter += 1
            sourceFilePath = _sFilePath
            targetFilePath = _dTargetPath / _sFilePath.relative_to(_sBasePath)
            if not targetFilePath.parent.exists(): 
                print(targetFilePath.parent)
                # Path.mkdir(targetFilePath.parent, parents=True, exist_ok=True)
            copy(str(sourceFilePath), str(targetFilePath))
            print('\t#{}: Copy file {} -> {} OK!'.format(
                counter,
                _getRelativePath(sourceFilePath), 
                _getRelativePath(targetFilePath)
            ))

        return counter

    srcPath = '.'                   # 当前目录，wp-site-wwii项目所在目录
    destPath = '../gp-site-wwii'    # 目标目录，gp-site-wwii项目所在目录

    sPath = Path(srcPath)
    dPath = Path(destPath)
        
    print('自动同步拷贝目录下文件\nFrom: {} \nTo: {}'.format(sPath, dPath))
    counter = 0 # 文件操作计数器
    # 处理src子目录下的相关json文件
    for x in sPath.rglob('src/**/{}*.json'.format(pattern)):
        counter = _synCopyFile(x, sPath, dPath, counter)
    # 按照pattern内容，特别处理src子目录的类别json文件（如：de_army.json）
    pat = pattern.split('_')
    s = ''
    for it in pat[0:-1]:
        s = it if s == '' else '{}_{}'.format(s, it)
        for x in sPath.rglob('src/**/{}.json'.format(s)):
            counter = _synCopyFile(x, sPath, dPath, counter)
    # 特别处理src/js_index目录的json文件（含logs.json日志更新文件）
    for x in sPath.rglob('src/js_index/*.json'):
        counter = _synCopyFile(x, sPath, dPath, counter)
    # 处理dist子目录下的相关jpg和jpeg文件
    for x in sPath.rglob('dist/**/{}*.jpg'.format(pattern)):
        counter = _synCopyFile(x, sPath, dPath, counter)
    for x in sPath.rglob('dist/**/{}*.jpeg'.format(pattern)):
        counter = _synCopyFile(x, sPath, dPath, counter)

    if counter == 0:
        print('没有操作相关文件。')

# --------------------------------------------------------------------------
# 主进程分割符
# --------------------------------------------------------------------------
parser = argparse.ArgumentParser(description='wp-site-wwii --> gp-site-wwii 项目更新内容自动拷贝工具（Python3程序）')
parser.add_argument('id', type=str, nargs=1, help='必填项，指定拷贝的内容项目编号（如：de_army_avhtv25121、de_navy、de...等皆可）')
args = parser.parse_args()

if len(args.id) == 1:
    # 判断参数是否包括文件通配符 "*"
    if args.id[0].find('*') != -1:
        q = input('提示：你输入的参数中含有文件通配符"*”，此操作可能会匹配大量文件，请确认是否继续？（Yes/No）').upper()
        if not ((q == 'Y') or (q == 'YES')):
            exit(0)
        else:
            if args.id[0][-1] == '*':
                args.id[0] = re.sub('\*+$', '', args.id[0])

    try:
        synCopyFiles(args.id[0])
    except OSError as e:
        print(e)

