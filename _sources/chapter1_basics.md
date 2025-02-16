# 第一章：科学计算基础

## 1.1 Python基础

### 1.1.1 Python环境配置

在开始学习科学计算之前，我们需要配置好Python环境。推荐使用Anaconda发行版，它包含了大多数我们需要的科学计算包。

```bash
# 安装Anaconda后，创建新的环境
conda create -n scicomp python=3.9
conda activate scicomp

# 安装必要的包
conda install numpy scipy matplotlib pandas jupyter
```

### 1.1.2 基本数据类型和操作

Python中的基本数据类型：

```python
# 数值类型
x = 42        # 整数
y = 3.14      # 浮点数
z = 2 + 3j    # 复数

# 序列类型
lst = [1, 2, 3]          # 列表
tup = (1, 2, 3)          # 元组
arr = np.array([1,2,3])  # NumPy数组

# 字典
d = {'a': 1, 'b': 2}
```

## 1.2 线性代数基础

### 1.2.1 向量和矩阵

使用NumPy进行向量和矩阵运算：

```python
import numpy as np

# 创建向量
v = np.array([1, 2, 3])

# 创建矩阵
A = np.array([[1, 2], [3, 4]])

# 矩阵运算
B = np.array([[5, 6], [7, 8]])
print("矩阵加法：")
print(A + B)
print("\n矩阵乘法：")
print(np.dot(A, B))
```

### 1.2.2 特征值和特征向量

```python
# 计算特征值和特征向量
eigenvalues, eigenvectors = np.linalg.eig(A)
print("特征值：", eigenvalues)
print("特征向量：\n", eigenvectors)
```

## 1.3 微积分基础

### 1.3.1 数值微分

使用Python计算导数：

```python
from scipy.misc import derivative

def f(x):
    return x**2

# 计算在x=2点的导数
x0 = 2
dx = derivative(f, x0, dx=1e-6)
print(f"f'({x0}) ≈ {dx}")
```

### 1.3.2 数值积分

```python
from scipy import integrate

# 定义被积函数
def g(x):
    return np.sin(x)

# 计算定积分
result, error = integrate.quad(g, 0, np.pi)
print(f"∫sin(x)dx from 0 to π ≈ {result}")
```

## 1.4 概率与统计

### 1.4.1 基本统计量

```python
import numpy as np

data = np.random.normal(0, 1, 1000)  # 生成正态分布数据

print(f"均值：{np.mean(data):.3f}")
print(f"标准差：{np.std(data):.3f}")
print(f"中位数：{np.median(data):.3f}")
```

### 1.4.2 概率分布

```python
from scipy import stats
import matplotlib.pyplot as plt

# 生成正态分布
x = np.linspace(-4, 4, 100)
y = stats.norm.pdf(x, 0, 1)

plt.plot(x, y)
plt.title("标准正态分布")
plt.xlabel("x")
plt.ylabel("概率密度")
plt.grid(True)
plt.show()
```

## 练习题

1. 使用NumPy创建一个5x5的随机矩阵，计算其特征值和特征向量。
2. 编写函数计算函数 f(x) = x³ + 2x² - x + 1 在x=1处的导数。
3. 使用蒙特卡洛方法估算π的值。

## 参考资料

1. NumPy官方文档：[https://numpy.org/doc/](https://numpy.org/doc/)
2. SciPy官方文档：[https://docs.scipy.org/doc/](https://docs.scipy.org/doc/)
3. Python科学计算：第二版，张若愚著 