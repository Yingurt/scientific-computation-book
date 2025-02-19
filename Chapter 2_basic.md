# 第二章：高级计算

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

