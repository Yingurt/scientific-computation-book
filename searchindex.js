Search.setIndex({"docnames": ["Chapter 2_basic", "_sources/intro", "_sources/markdown", "_sources/markdown-notebooks", "_sources/notebooks", "chapter1_basics", "intro", "markdown", "markdown-notebooks", "notebooks"], "filenames": ["Chapter 2_basic.md", "_sources/intro.md", "_sources/markdown.md", "_sources/markdown-notebooks.md", "_sources/notebooks.ipynb", "chapter1_basics.md", "intro.md", "markdown.md", "markdown-notebooks.md", "notebooks.ipynb"], "titles": ["Chapter 2: Direct Methods", "\u6b22\u8fce\u6765\u5230\u79d1\u5b66\u8ba1\u7b97\u6559\u7a0b", "Markdown Files", "Notebooks with MyST Markdown", "Content with notebooks", "\u7b2c\u4e00\u7ae0\uff1a\u79d1\u5b66\u8ba1\u7b97\u57fa\u7840", "\u6b22\u8fce\u6765\u5230\u79d1\u5b66\u8ba1\u7b97\u6559\u7a0b", "Markdown Files", "Notebooks with MyST Markdown", "Content with notebooks"], "terms": {"systemat": 0, "solv": 0, "system": 0, "linear": 0, "equat": 0, "It": [0, 2, 7], "transform": 0, "augment": 0, "row": 0, "echelon": 0, "form": 0, "make": [0, 4, 9], "easier": 0, "unknown": 0, "through": 0, "back": 0, "The": [0, 2, 3, 7, 8], "consist": 0, "follow": [0, 2, 3, 7, 8], "step": 0, "an": [0, 2, 7], "upper": 0, "triangular": 0, "variabl": 0, "start": [0, 2, 3, 7, 8], "last": [0, 4, 9], "onc": 0, "perform": 0, "each": 0, "bottom": 0, "known": 0, "valu": 0, "upward": 0, "ha": 0, "o": 0, "n": [0, 1, 2, 4, 5, 6, 7, 9], "time": 0, "thi": [0, 2, 3, 4, 7, 8, 9], "section": 0, "explor": 0, "effici": 0, "consider": 0, "algorithm": 0, "refer": [0, 2, 7], "rewrit": 0, "code": [0, 2, 3, 7, 8], "us": [0, 2, 3, 7, 8], "vector": 0, "improv": 0, "In": [0, 2, 4, 7, 9], "librari": 0, "like": [0, 2, 3, 7, 8], "numpi": [0, 1, 4, 5, 6, 9], "can": [0, 2, 3, 4, 7, 8, 9], "enhanc": 0, "numer": 0, "stabil": 0, "dure": 0, "most": [0, 2, 4, 7, 9], "common": 0, "ar": [0, 2, 3, 7, 8], "swap": 0, "ensur": 0, "largest": 0, "element": 0, "absolut": 0, "full": 0, "column": 0, "maximum": 0, "experi": 0, "have": [0, 3, 8], "solut": 0, "infinit": 0, "compar": 0, "execut": [0, 3, 8], "between": 0, "non": 0, "observ": 0, "chang": 0, "essenti": 0, "avoid": 0, "divis": 0, "small": [0, 2, 7], "number": 0, "which": [0, 3, 8], "caus": 0, "signific": 0, "explain": 0, "why": 0, "certain": 0, "critic": 0, "prone": 0, "due": 0, "finit": 0, "precis": 0, "understand": [0, 3, 8], "develop": 0, "stabl": 0, "accumul": 0, "appropri": 0, "help": [0, 2, 7], "minim": 0, "select": 0, "reduc": 0, "consid": 0, "provid": 0, "more": [0, 3, 4, 8, 9], "balanc": 0, "approach": 0, "analyz": 0, "impact": 0, "accuraci": 0, "decomposit": 0, "split": 0, "lower": 0, "l": 0, "u": 0, "simplifi": 0, "process": 0, "produc": 0, "where": 0, "diagon": 0, "ones": 0, "exampl": [0, 2, 4, 7, 9], "includ": [0, 3, 4, 8, 9], "choleski": 0, "For": [0, 2, 4, 7, 9], "symmetr": 0, "posit": 0, "definit": 0, "qr": 0, "least": 0, "squar": 0, "obtain": 0, "product": 0, "save": 0, "resourc": 0, "repres": 0, "plai": 0, "crucial": 0, "role": 0, "cover": 0, "properti": 0, "domin": 0, "symmetri": 0, "without": 0, "built": [0, 3, 8], "function": [0, 2, 7], "investig": 0, "how": [0, 3, 8], "affect": 0, "larg": 0, "visualis": 0, "matplotlib": [0, 1, 4, 5, 6, 9], "end": [0, 4, 9], "\u8fd9\u662f\u4e00\u672c\u5173\u4e8e\u79d1\u5b66\u8ba1\u7b97\u7684\u5728\u7ebf\u6559\u7a0b": [1, 6], "\u65e8\u5728\u5e2e\u52a9\u60a8\u638c\u63e1\u79d1\u5b66\u8ba1\u7b97\u7684\u57fa\u7840\u77e5\u8bc6\u548c\u5b9e\u8df5\u6280\u80fd": [1, 6], "\u672c\u6559\u7a0b\u6db5\u76d6\u4e86\u4ee5\u4e0b\u4e3b\u8981\u5185\u5bb9": [1, 6], "\u5728\u5f00\u59cb\u5b66\u4e60\u79d1\u5b66\u8ba1\u7b97\u4e4b\u524d": [1, 5, 6], "\u6211\u4eec\u9700\u8981\u914d\u7f6e\u597dpython\u73af\u5883": [1, 5, 6], "\u63a8\u8350\u4f7f\u7528anaconda\u53d1\u884c\u7248": [1, 5, 6], "\u5b83\u5305\u542b\u4e86\u5927\u591a\u6570\u6211\u4eec\u9700\u8981\u7684\u79d1\u5b66\u8ba1\u7b97\u5305": [1, 5, 6], "\u5b89\u88c5anaconda\u540e": [1, 5, 6], "\u521b\u5efa\u65b0\u7684\u73af\u5883": [1, 5, 6], "conda": [1, 5, 6], "creat": [1, 4, 5, 6, 9], "scicomp": [1, 5, 6], "python": [1, 5, 6], "3": [1, 4, 6, 9], "9": [1, 5, 6], "activ": [1, 5, 6], "\u5b89\u88c5\u5fc5\u8981\u7684\u5305": [1, 5, 6], "instal": [1, 5, 6], "scipi": [1, 5, 6], "panda": [1, 5, 6], "jupyt": [1, 2, 3, 4, 5, 6, 7, 8, 9], "\u57fa\u7840\u6570\u5b66\u77e5\u8bc6": [1, 6], "\u7ebf\u6027\u4ee3\u6570": [1, 6], "\u5fae\u79ef\u5206": [1, 6], "\u6982\u7387\u7edf\u8ba1": [1, 6], "\u7f16\u7a0b\u57fa\u7840": [1, 6], "python\u7f16\u7a0b": [1, 6], "scipy\u5e93\u7684\u4f7f\u7528": [1, 6], "\u6570\u503c\u8ba1\u7b97\u65b9\u6cd5": [1, 6], "\u6570\u503c\u79ef\u5206": [1, 6], "\u5fae\u5206\u65b9\u7a0b\u6c42\u89e3": [1, 6], "\u4f18\u5316\u7b97\u6cd5": [1, 6], "\u6570\u636e\u5206\u6790": [1, 6], "\u6570\u636e\u5904\u7406": [1, 6], "\u53ef\u89c6\u5316": [1, 6], "\u7edf\u8ba1\u5206\u6790": [1, 6], "\u5b9e\u9645\u5e94\u7528": [1, 6], "\u771f\u5b9e\u6848\u4f8b\u5206\u6790\u4e0e\u5b9e\u8df5": [1, 6], "\u6309\u7167\u7ae0\u8282\u987a\u5e8f\u5b66\u4e60": [1, 6], "\u6bcf\u4e2a\u4e3b\u9898\u90fd\u5efa\u7acb\u5728\u524d\u9762\u7684\u77e5\u8bc6\u57fa\u7840\u4e4b\u4e0a": [1, 6], "\u52a8\u624b\u5b9e\u8df5\u6bcf\u4e2a\u7ae0\u8282\u7684\u4ee3\u7801\u793a\u4f8b": [1, 6], "\u5b8c\u6210\u8bfe\u540e\u7ec3\u4e60\u6765\u5de9\u56fa\u6240\u5b66\u77e5\u8bc6": [1, 6], "\u53c2\u4e0e\u8ba8\u8bba": [1, 6], "\u5206\u4eab\u60a8\u7684\u89c1\u89e3\u548c\u95ee\u9898": [1, 6], "\u6e90\u4ee3\u7801\u4ed3\u5e93": [1, 6], "\u5728\u7ebf\u8ba8\u8bba\u533a": [1, 6], "\u95ee\u9898\u53cd\u9988": [1, 6], "whether": [2, 7], "you": [2, 3, 4, 7, 8, 9], "write": [2, 3, 7, 8], "your": [2, 3, 4, 7, 8, 9], "book": [2, 3, 4, 7, 8, 9], "s": [2, 3, 4, 7, 8, 9], "content": [2, 3, 6, 7, 8], "notebook": [2, 6, 7], "ipynb": [2, 7], "regular": [2, 7], "md": [2, 3, 7, 8], "ll": [2, 7], "same": [2, 7], "flavor": [2, 7], "call": [2, 4, 7, 9], "simpl": [2, 7], "get": [2, 3, 7, 8], "show": [2, 3, 5, 7, 8], "off": [2, 3, 7, 8], "some": [2, 4, 7, 9], "syntax": [2, 7], "stand": [2, 7], "markedli": [2, 7], "structur": [2, 7], "text": [2, 3, 7, 8], "slight": [2, 7], "variat": [2, 7], "commonmark": [2, 7], "extens": [2, 7], "allow": [2, 7], "sphinx": [2, 7], "ecosystem": [2, 7], "about": [2, 3, 4, 7, 8, 9], "see": [2, 3, 4, 7, 8, 9], "overview": [2, 7], "two": [2, 3, 7, 8], "power": [2, 7], "tool": [2, 7], "thei": [2, 7], "written": [2, 3, 7, 8], "markup": [2, 7], "languag": [2, 7], "both": [2, 7], "serv": [2, 7], "similar": [2, 7], "purpos": [2, 7], "one": [2, 7], "line": [2, 3, 4, 7, 8, 9], "wherea": [2, 7], "span": [2, 7], "mani": [2, 3, 7, 8], "accept": [2, 7], "differ": [2, 7], "kind": [2, 7], "input": [2, 7], "do": [2, 4, 7, 9], "those": [2, 7], "depend": [2, 7], "specif": [2, 7], "being": [2, 7], "here": [2, 4, 7, 9], "note": [2, 7], "render": [2, 7], "special": [2, 7], "box": [2, 7], "when": [2, 3, 7, 8], "build": [2, 7], "inlin": [2, 7], "document": [2, 3, 4, 7, 8, 9], "also": [2, 3, 4, 7, 8, 9], "cite": [2, 7], "store": [2, 7], "bibtex": [2, 7], "holdgraf_evidence_2014": [2, 7], "hdhpk14": [2, 7], "moreov": [2, 7], "insert": [2, 7], "bibliographi": [2, 7], "page": [2, 3, 7, 8], "must": [2, 7], "all": [2, 3, 7, 8], "properli": [2, 7], "bib": [2, 7], "christoph": [2, 7], "ramsai": [2, 7], "holdgraf": [2, 7], "wendi": [2, 7], "de": [2, 7], "heer": [2, 7], "brian": [2, 7], "paslei": [2, 7], "robert": [2, 7], "t": [2, 4, 7, 9], "knight": [2, 7], "evid": [2, 7], "predict": [2, 7], "human": [2, 7], "auditori": [2, 7], "cortex": [2, 7], "intern": [2, 7], "confer": [2, 7], "cognit": [2, 7], "neurosci": [2, 7], "brisban": [2, 7], "australia": [2, 7], "2014": [2, 7], "frontier": [2, 7], "just": [2, 7], "starter": [2, 7], "lot": [2, 4, 7, 9], "jupyterbook": [2, 7], "org": [2, 5, 7], "let": [3, 8], "base": [3, 8], "detail": [3, 8], "instruct": [3, 8], "With": [3, 8], "defin": [3, 8], "direct": [3, 6, 8], "so": [3, 8], "print": [3, 5, 8], "2": [3, 4, 6, 8, 9], "4": [3, 4, 8, 9], "ani": [3, 8], "block": [3, 8], "default": [3, 8], "kernel": [3, 8], "output": [3, 8], "displai": [3, 8], "rest": [3, 8], "jupytext": [3, 8], "convert": [3, 8], "file": [3, 6, 8], "support": [3, 8], "other": [3, 8], "thing": [3, 8], "need": [3, 8], "should": [3, 8], "inform": [3, 4, 8, 9], "top": [3, 8], "presenc": [3, 8], "That": [3, 8], "If": [3, 8], "d": [3, 5, 8], "treat": [3, 8], "run": [3, 8], "command": [3, 8], "init": [3, 8], "path": [3, 8], "markdownfil": [3, 8], "mean": [4, 5, 9], "As": [4, 9], "emb": [4, 9], "imag": [4, 9], "html": [4, 9], "etc": [4, 9], "post": [4, 9], "add_": [4, 9], "math": [4, 9], "begin": [4, 9], "align": [4, 9], "mbox": [4, 9], "la_": [4, 9], "tex": [4, 9], "But": [4, 9], "sure": [4, 9], "escap": [4, 9], "dollar": [4, 9], "sign": [4, 9], "want": [4, 9], "keep": [4, 9], "work": [4, 9], "well": [4, 9], "check": [4, 9], "out": [4, 9], "guid": [4, 9], "sampl": [4, 9], "from": [4, 5, 9], "import": [4, 5, 9], "rcparam": [4, 9], "cycler": [4, 9], "pyplot": [4, 5, 9], "plt": [4, 5, 9], "np": [4, 5, 9], "ion": [4, 9], "modulenotfounderror": [4, 9], "traceback": [4, 9], "recent": [4, 9], "cell": [4, 9], "1": [4, 9], "No": [4, 9], "modul": [4, 9], "name": [4, 9], "fix": [4, 9], "random": [4, 5, 9], "state": [4, 9], "reproduc": [4, 9], "seed": [4, 9], "19680801": [4, 9], "10": [4, 9], "data": [4, 5, 9], "logspac": [4, 9], "0": [4, 5, 9], "100": [4, 5, 9], "randn": [4, 9], "ii": [4, 9], "rang": [4, 9], "arrai": [4, 5, 9], "cmap": [4, 9], "cm": [4, 9], "coolwarm": [4, 9], "ax": [4, 9], "prop_cycl": [4, 9], "color": [4, 9], "linspac": [4, 5, 9], "line2d": [4, 9], "custom_lin": [4, 9], "lw": [4, 9], "5": [4, 5, 9], "fig": [4, 9], "subplot": [4, 9], "figsiz": [4, 9], "plot": [4, 5, 9], "legend": [4, 9], "cold": [4, 9], "medium": [4, 9], "hot": [4, 9], "There": [4, 9], "interact": [4, 9], "python\u4e2d\u7684\u57fa\u672c\u6570\u636e\u7c7b\u578b": 5, "\u6570\u503c\u7c7b\u578b": 5, "x": 5, "42": 5, "\u6574\u6570": 5, "y": 5, "14": 5, "\u6d6e\u70b9\u6570": 5, "z": 5, "3j": 5, "\u590d\u6570": 5, "\u5e8f\u5217\u7c7b\u578b": 5, "lst": 5, "\u5217\u8868": 5, "tup": 5, "\u5143\u7ec4": 5, "arr": 5, "numpy\u6570\u7ec4": 5, "\u5b57\u5178": 5, "b": 5, "\u4f7f\u7528numpy\u8fdb\u884c\u5411\u91cf\u548c\u77e9\u9635\u8fd0\u7b97": 5, "\u521b\u5efa\u5411\u91cf": 5, "v": 5, "\u521b\u5efa\u77e9\u9635": 5, "A": 5, "\u77e9\u9635\u8fd0\u7b97": 5, "6": 5, "7": 5, "8": 5, "\u77e9\u9635\u52a0\u6cd5": 5, "n\u77e9\u9635\u4e58\u6cd5": 5, "dot": 5, "\u8ba1\u7b97\u7279\u5f81\u503c\u548c\u7279\u5f81\u5411\u91cf": 5, "eigenvalu": 5, "eigenvector": 5, "linalg": 5, "eig": 5, "\u7279\u5f81\u503c": 5, "\u7279\u5f81\u5411\u91cf": 5, "\u4f7f\u7528python\u8ba1\u7b97\u5bfc\u6570": 5, "misc": 5, "deriv": 5, "def": 5, "f": 5, "return": 5, "\u8ba1\u7b97\u5728x": 5, "2\u70b9\u7684\u5bfc\u6570": 5, "x0": 5, "dx": 5, "1e": 5, "integr": 5, "\u5b9a\u4e49\u88ab\u79ef\u51fd\u6570": 5, "g": 5, "sin": 5, "\u8ba1\u7b97\u5b9a\u79ef\u5206": 5, "result": 5, "error": 5, "quad": 5, "pi": 5, "\u03c0": 5, "normal": 5, "1000": 5, "\u751f\u6210\u6b63\u6001\u5206\u5e03\u6570\u636e": 5, "\u5747\u503c": 5, "3f": 5, "\u6807\u51c6\u5dee": 5, "std": 5, "\u4e2d\u4f4d\u6570": 5, "median": 5, "stat": 5, "\u751f\u6210\u6b63\u6001\u5206\u5e03": 5, "norm": 5, "pdf": 5, "titl": 5, "\u6807\u51c6\u6b63\u6001\u5206\u5e03": 5, "xlabel": 5, "ylabel": 5, "\u6982\u7387\u5bc6\u5ea6": 5, "grid": 5, "true": 5, "\u4f7f\u7528numpy\u521b\u5efa\u4e00\u4e2a5x5\u7684\u968f\u673a\u77e9\u9635": 5, "\u8ba1\u7b97\u5176\u7279\u5f81\u503c\u548c\u7279\u5f81\u5411\u91cf": 5, "\u7f16\u5199\u51fd\u6570\u8ba1\u7b97\u51fd\u6570": 5, "x\u00b3": 5, "2x\u00b2": 5, "\u5728x": 5, "1\u5904\u7684\u5bfc\u6570": 5, "\u4f7f\u7528\u8499\u7279\u5361\u6d1b\u65b9\u6cd5\u4f30\u7b97\u03c0\u7684\u503c": 5, "numpy\u5b98\u65b9\u6587\u6863": 5, "http": 5, "doc": 5, "scipy\u5b98\u65b9\u6587\u6863": 5, "python\u79d1\u5b66\u8ba1\u7b97": 5, "\u7b2c\u4e8c\u7248": 5, "\u5f20\u82e5\u611a\u8457": 5, "\u7b2c\u4e00\u7ae0": 6, "\u79d1\u5b66\u8ba1\u7b97\u57fa\u7840": 6, "chapter": 6, "method": 6, "markdown": 6, "\u8bed\u6cd5\u6307\u5357": 6, "\u6559\u7a0b": 6, "myst": 6, "\u4f7f\u7528\u6307\u5357": 6, "\u7b2c\u4e8c\u7ae0": 6, "\u5f20\u8d62\u7684\u65b0\u5f81\u7a0b": 6}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"chapter": 0, "2": [0, 5], "direct": [0, 2, 7], "method": 0, "1": [0, 1, 5, 6], "gaussian": 0, "elimin": 0, "motiv": 0, "3": [0, 5], "backward": 0, "substitut": 0, "4": [0, 5], "complex": 0, "oper": 0, "count": 0, "5": 0, "vectoris": 0, "6": 0, "standard": 0, "pivot": 0, "7": 0, "addit": 0, "exercis": 0, "8": 0, "comput": 0, "activ": 0, "strategi": 0, "round": 0, "off": 0, "error": 0, "A": 0, "brief": 0, "note": 0, "float": 0, "point": 0, "arithmet": 0, "partial": 0, "scale": 0, "problem": 0, "matrix": 0, "factoris": 0, "forward": 0, "doolittl": 0, "s": 0, "lu": 0, "pseudocod": 0, "python": 0, "implement": 0, "other": 0, "type": 0, "from": 0, "permut": 0, "matric": 0, "special": 0, "9": 0, "\u6b22\u8fce\u6765\u5230\u79d1\u5b66\u8ba1\u7b97\u6559\u7a0b": [1, 6], "python\u57fa\u7840": [1, 5, 6], "python\u73af\u5883\u914d\u7f6e": [1, 5, 6], "\u4e3b\u8981\u5185\u5bb9": [1, 6], "\u5982\u4f55\u4f7f\u7528\u672c\u6559\u7a0b": [1, 6], "\u5728\u7ebf\u8d44\u6e90": [1, 6], "markdown": [2, 3, 4, 7, 8, 9], "file": [2, 7], "what": [2, 7], "myst": [2, 3, 4, 7, 8, 9], "sampl": [2, 7], "role": [2, 7], "citat": [2, 7], "learn": [2, 7], "more": [2, 7], "notebook": [3, 4, 8, 9], "an": [3, 8], "exampl": [3, 8], "cell": [3, 8], "creat": [3, 8], "quickli": [3, 8], "add": [3, 8], "yaml": [3, 8], "metadata": [3, 8], "content": [4, 9], "code": [4, 9], "block": [4, 9], "output": [4, 9], "\u7b2c\u4e00\u7ae0": 5, "\u79d1\u5b66\u8ba1\u7b97\u57fa\u7840": 5, "\u57fa\u672c\u6570\u636e\u7c7b\u578b\u548c\u64cd\u4f5c": 5, "\u7ebf\u6027\u4ee3\u6570\u57fa\u7840": 5, "\u5411\u91cf\u548c\u77e9\u9635": 5, "\u7279\u5f81\u503c\u548c\u7279\u5f81\u5411\u91cf": 5, "\u5fae\u79ef\u5206\u57fa\u7840": 5, "\u6570\u503c\u5fae\u5206": 5, "\u6570\u503c\u79ef\u5206": 5, "\u6982\u7387\u4e0e\u7edf\u8ba1": 5, "\u57fa\u672c\u7edf\u8ba1\u91cf": 5, "\u6982\u7387\u5206\u5e03": 5, "\u7ec3\u4e60\u9898": 5, "\u53c2\u8003\u8d44\u6599": 5, "\u7ae0\u8282\u5bfc\u822a": 6}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})