# Chapter 3: Ietration Method
本章主要介绍了线性方程组的**迭代方法** (Iterative Techniques)

```{note}
线性方程组的**迭代方法** 是什么？
**线性方程组的迭代方法**（Iterative Methods for Linear Systems）是通过逐步逼近求解线性方程组 Ax=bA\mathbf{x} = \mathbf{b}Ax=b 的数值方法。与直接法（如高斯消元法、LU 分解）一次性给出精确解不同，迭代方法从一个初始猜测开始，通过反复更新逐步接近真实解，直到满足某个收敛准则（如残差足够小）。
```



### Iterative Techniques 
🎯 目标 (Objective) 求解包含 $n$ 个方程的线性方程组：

$$\begin{aligned} E_1 &: a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n = b_1 \\ E_2 &: a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n = b_2 \\ &\vdots \\ E_n &: a_{n1}x_1 + a_{n2}x_2 + \cdots + a_{nn}x_n = b_n \end{aligned} \tag{3.1}$$

在Chapter 2中，我们所介绍的是通过用高斯消除法来解决问题，今天，我们讲解通过Jacobi 迭代法来解决问题(Jacobi Iterative Method)

### **Jacobi迭代法 (Jacobi Iterative Method)**
注意！这里的i非常重要！
- 首先，我们从线性方程组的第i个方程开始：

$$E_i: \quad a_{i1}x_1 + \cdots + a_{in}x_n = b_i, \quad i = 1, \dots, n \tag{3.2} $$
- 然后观察方程，我们是可以进行转写的！

$$\begin{equation} \sum_{j=1}^{n} a_{ij}x_j = b_i, \quad i = 1, \dots, n  \end{equation} \tag{3.3}$$
- 转写成功后，我们提取出$a_{ii}$

$$\begin{equation} a_{ii}x_i + \sum_{\substack{j=1 \\ j \neq i}}^{n} a_{ij}x_j = b_i, \quad i = 1, \dots, n \end{equation} \tag{3.4}$$
- 如果$a_{ii} \neq 0$，那么我们就可以算出$x_i$的值

$$
\begin{equation}
x_i = -\frac{1}{a_{ii}} \sum_{\substack{j=1 \\ j \neq i}}^{n} a_{ij}x_j 
+ \frac{b_i}{a_{ii}}, \quad i = 1, \dots, n \tag{3.5}
\end{equation}
$$
- 最后，根据这个公式，我们可以得到关于Jacobi的迭代式子
迭代公式
The iterative form is given by:

$$
\begin{equation} x_i^{(k)} = -\frac{1}{a_{ii}} \sum_{\substack{j=1 \\ j \neq i}}^{n} a_{ij}x_j^{(k-1)} + \frac{b_i}{a_{ii}}, \quad i = 1, \dots, n \tag{3.6} \end{equation}
$$where $x_i^{(k)}$ represents the value of $x_i$ at the $k$-th iteration. The initial guess is given by:
$$
\begin{equation*} \mathbf{x}^{(0)} = \begin{bmatrix} x_1^{(0)}, \dots, x_n^{(0)} \end{bmatrix}^t \end{equation*}
$$



---
$$
\begin{array}{l}
\textbf{Algorithm 3.1: Jacobi Iteration} \\
\hline
\textbf{Inputs:} n \times n \text{ matrix } A, n \times 1 \text{ vector } \mathbf{b} \\
\text{ } N_{\max}: \text{ Maximum number of iterations, } \mathbf{x}^{(0)}: \text{ initial approximation} \\
\textbf{Output:} \mathbf{x}: \text{ approximation to the solution of } A\mathbf{x} = \mathbf{b} \\
\\
\textbf{Procedure:} \text{JACOBI}(A, \mathbf{b}, N_{\max}, \mathbf{x}_0) \\
\text{for } n = 1 \text{ to } N_{\max} \text{ do} \\
\quad \text{for } i = 1 \text{ to } n \text{ do} \\
\quad \quad x_i = \frac{1}{a_{ii}} \left( b_i - \sum_{\substack{j=1 \\ j \neq i}}^{n} a_{ij} x_j^{(0)} \right) \\
\quad \text{end for} \\
\quad \mathbf{x}^{(0)} = \mathbf{x} \\
\text{end for} \\
\hline
\end{array}
$$

这就实现了迭代的基本算法
以下是 Jacobi 迭代算法的实现。点击 **运行按钮** 来执行代码，或在页面中修改代码以查看不同结果。 

```{code-cell}
print("Hello from Thebe and Jupyter Book!")
```


```{code-cell}
import numpy as np 
def jacobi(A, b, x0, Nmax): 
	""" Approximates the solution to the system of linear equations Ax = b using     Jacobi iteration. """
	n = len(A) 
	x_old = x0.copy() 
	x_new = np.zeros(n) 
	for k in range(Nmax): 
		for i in range(n):
			s = sum(A[i, j] * x_old[j] for j in range(n) if j != i) 
			x_new[i] = (b[i] - s) / A[i, i] 
		x_old = x_new.copy() 
	return x_new
# 示例：运行 Jacobi 方法
A = np.array([[4, -1, 0], [-1, 8, -1], [0, -1, 4]], dtype=float) 
b = np.array([48, 12, 24], dtype=float) 
x0 = np.array([1, 1, 1], dtype=float) 
Nmax = 5            
x = jacobi(A, b, x0, Nmax) 
print(f"Approximate solution after {Nmax} iterations: {x}")
```


```{code-cell}
A = np.array([[4, -1, 0], [-1, 8, -1], [0, -1, 4]], dtype=float) 
b = np.array([48, 12, 24], dtype=float) 
x0 = np.array([1, 1, 1], dtype=float) 
Nmax = 5            
x = jacobi(A, b, x0, Nmax) 
print(f"Approximate solution after {Nmax} iterations: {x}")
```



```
{admonition} Exercise: Jacobi Method Implementation :class: tip 给定以下矩阵和初始向量，使用 Jacobi 方法进行 10 次迭代并计算结果：  $$ A = \begin{bmatrix} 4 & -1 & 0 \\ -1 & 8 & -1 \\ 0 & -1 & 4 \end{bmatrix}, \quad b = \begin{bmatrix} 48 \\ 12 \\ 24 \end{bmatrix}, \quad x^{(0)} = \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix} $$  尝试修改初始向量 \(x^{(0)}\) 并观察收敛性变化。 
```



### 🌟 **效果**：  
> ⚡ **Exercise: Jacobi Method Implementation**  
> 给定以下矩阵和初始向量，使用 Jacobi 方法进行 10 次迭代并计算结果。支持公式显示，外观整洁有序。

---

## 🎨 **2. 自定义不同样式的练习方框**

你可以通过 `:class:` 参数来自定义方框的样式。**Jupyter Book** 默认支持以下样式：

| **样式类名**    | **效果**     | **用途**    |
| ----------- | ---------- | --------- |
| `note`      | ℹ️ 蓝色信息框   | 一般性说明     |
| `warning`   | ⚠️ 黄色警告框   | 警告或注意事项   |
| `tip`       | 💡 绿色提示框   | 提示或建议     |
| `important` | ❗ 红色重要提示框  | 强调重要信息    |
| `seealso`   | 🔗 灰色参考框   | 提供相关内容链接  |
| `exercise`  | 🏋️ 自定义练习框 | **练习与问题** |

### 🎯 **练习框（Exercise）示例**：

```markdown
```{admonition} 🏋️ Exercise: Jacobi 迭代实验
:class: exercise

1. **任务**: 使用 Jacobi 方法解决以下方程组，并观察不同初始猜测的收敛速度。

$$
\begin{aligned}
4x_1 - x_2 &= 48 \\
- x_1 + 8x_2 - x_3 &= 12 \\
- x_2 + 4x_3 &= 24
\end{aligned}
$$

1. **问题**: 如果将初始向量改为 \([0,0,0]^T\)，结果有何不同？  
2. **挑战**: 尝试在代码中引入动态误差计算，判断迭代何时可以提前结束。
```



---

## 🏃 **3. 为练习方框添加可运行的交互式代码**

结合 **Thebe** 和 **Binder**，可以在练习框中添加可运行的 Python 代码，让读者在页面上**实时交互**。

```markdown
```{admonition} 🏃 Exercise: 运行 Jacobi 方法
:class: exercise

👉 **尝试在下面的代码中修改矩阵 \(A\) 或向量 \(b\)，并观察 Jacobi 方法的收敛效果。**

```{code-cell} python3
:tags: [thebe-interactive]

import numpy as np

def jacobi(A, b, x0, Nmax):
    n = len(A)
    x_old = x0.copy()
    x_new = np.zeros(n)
    for k in range(Nmax):
        for i in range(n):
            s = sum(A[i, j] * x_old[j] for j in range(n) if j != i)
            x_new[i] = (b[i] - s) / A[i, i]
        x_old = x_new.copy()
    return x_new

# 📝 用户可以修改这里的输入数据
A = np.array([[4, -1, 0], [-1, 8, -1], [0, -1, 4]], dtype=float)
b = np.array([48, 12, 24], dtype=float)
x0 = np.array([1, 1, 1], dtype=float)
Nmax = 5

x = jacobi(A, b, x0, Nmax)
print(f"迭代 {Nmax} 次后的近似解: {x}")
```


### Jacobi's Method in vector form

