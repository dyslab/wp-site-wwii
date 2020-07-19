'''
    这是一个 Python3 程序。【 注：此为 wp-site-wwii 项目专用工具文件 】

    功能说明：
        用途是根据【id】参数将当前项目（wp-site-wwii）下更新的内容同步自动拷
        贝到关联项目（gp-site-wwii）相应目录中。相关项目涉及的目录（含子目录）
        和匹配文件清单如下：
            /src/*.json
            /dist/*.jpg/jpeg/png

    使用方法: 
        python3 w2p.py <id>

    参数说明：
        id: 必填项，指定拷贝的内容项目编号（如：de_army_avhtv25121、de_navy、de...等皆可）

    注意事项：
        由于 Bash 中字符 & 为串行命令的特殊连接字符，如果参数中包含字符 & ，请加上Bash转码符号 \，即 "\&"
    
    范例：
        python3 w2p.py de_army_avhtv25121
        python3 w2p.py de_army
        python3 w2p.py de_army_wav231\&232  # 注释：本行中的参数实际为 "de_army_wav231&232"
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
import argparse, re, glob

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
            print('{:>5}: COPY [{}] -> [{}] OK!'.format(
                '#' + str(counter),
                _getRelativePath(sourceFilePath), 
                _getRelativePath(targetFilePath)
            ))

        return counter

    srcPath = '.'                   # 当前目录，wp-site-wwii项目所在目录
    destPath = '../gp-site-wwii'    # 目标目录，gp-site-wwii项目所在目录

    sPath = Path(srcPath)
    dPath = Path(destPath)
        
    print('\nW2P.PY 自动同步拷贝目录下文件\n\nFROM [{}] TO [{}]\n'.format(sPath, dPath))
    counter = 0 # 文件操作计数器
    # 处理src子目录下的相关json文件
    matchFiles = sorted(sPath.glob('src/**/{}*.json'.format(pattern)))
    for x in matchFiles:
        counter = _synCopyFile(x, sPath, dPath, counter)
    # 按照pattern内容，特别处理src子目录的类别json文件（如：de_army.json）
    pat = pattern.split('_')
    s = ''
    for it in pat[0:-1]:
        s = it if s == '' else '{}_{}'.format(s, it)
        matchFiles = sorted(sPath.glob('src/**/{}.json'.format(s)))
        for x in matchFiles:
            counter = _synCopyFile(x, sPath, dPath, counter)
    # 特别处理src/js_index目录的json文件（含logs.json日志更新文件）
    matchFiles = sorted(sPath.glob('src/js_index/*.json'))
    for x in matchFiles:
        counter = _synCopyFile(x, sPath, dPath, counter)
    # 处理dist子目录下的相关png、jpg和jpeg文件
    matchFiles = sorted(sPath.glob('dist/**/{}*.png'.format(pattern))) \
        + sorted(sPath.glob('dist/**/{}*.jpg'.format(pattern))) \
        + sorted(sPath.glob('dist/**/{}*.jpeg'.format(pattern)))
    for x in matchFiles:
        counter = _synCopyFile(x, sPath, dPath, counter)

    if counter == 0:
        print('\n提示：无法找到相关文件！\n')
    else:
        print('\n提示：操作完成，已复制{}个文件！\n'.format(counter))

# --------------------------------------------------------------------------
# 主进程分割符
# --------------------------------------------------------------------------
parser = argparse.ArgumentParser(description='wp-site-wwii --> gp-site-wwii 项目更新内容自动拷贝工具（Python3程序）')
parser.add_argument('id', type=str, nargs=1, help='必填项，指定拷贝的内容项目编号（如：de_army_avhtv25121、de_navy、de...等皆可）')
args = parser.parse_args()

if len(args.id) == 1:
    # 采用 glob.escape 对特殊字符('?', '*' 和 '[')转码
    args.id[0] = glob.escape(args.id[0])

    try:
        synCopyFiles(args.id[0])
    except OSError as e:
        print(e)
