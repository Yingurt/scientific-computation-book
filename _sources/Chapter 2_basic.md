# Chapter 2: Direct Methods

## 2.1 Gaussian Elimination

### 2.1.1 Motivation

Gaussian elimination is a systematic method for solving systems of linear equations. It transforms the system's augmented matrix into a row-echelon form, making it easier to solve for the unknowns through back substitution.

### 2.1.2 Gaussian Elimination

The method consists of the following steps:

- **Forward Elimination:** Transform the matrix into an upper triangular form.
- **Back Substitution:** Solve for variables starting from the last equation.

### 2.1.3 Backward Substitution

Once the system is in upper triangular form, back substitution is performed by solving each equation starting from the bottom row and substituting known values upwards.

### 2.1.4 Complexity (Operation Counts)

Gaussian elimination has a computational complexity of $O(n^3)$ for an $n \times n$ system. This section explores the efficiency and performance considerations of the algorithm.

### 2.1.5 Vectorisation

Vectorisation refers to rewriting code to use vector operations, improving computational performance. In Python, libraries like NumPy can be used for efficient vectorised implementations.

### 2.1.6 Standard Pivoting

Pivoting enhances numerical stability during Gaussian elimination. The most common strategies are:

- **Partial Pivoting:** Swapping rows to ensure the largest element (by absolute value) is the pivot.
- **Full Pivoting:** Swapping rows and columns for maximum pivot element.

### 2.1.7 Additional Exercises

- Implement Gaussian elimination in Python.
- Experiment with systems that have no solutions or infinite solutions.

### 2.1.8 Additional Computing Activities

- Compare execution time between vectorised and non-vectorised implementations.
- Use partial pivoting to observe changes in numerical stability.

---

## 2.2 Pivoting Strategies and Round-Off Errors

### 2.2.1 Motivation

Pivoting is essential for avoiding division by small numbers, which can cause significant round-off errors. This section explains why certain pivoting strategies are critical in computational methods.

### 2.2.2 A Brief Note on Floating Point Arithmetic

Floating point arithmetic is prone to rounding errors due to finite precision. Understanding these errors is essential for developing stable numerical algorithms.

### 2.2.3 Round-Off Error and Gaussian Elimination

Round-off errors accumulate during Gaussian elimination. Appropriate pivoting strategies help minimize these errors.

### 2.2.4 Partial Pivoting

Partial pivoting selects the largest pivot element in absolute value to reduce round-off errors.

### 2.2.5 Scaled Partial Pivoting

Scaled partial pivoting considers the scale of each row, providing a more balanced approach for numerical stability.

### 2.2.6 Additional Problems

- Analyze the impact of pivoting on solution accuracy.
- Implement scaled partial pivoting and compare with standard pivoting.

---

## 2.3 Matrix Factorisation

### 2.3.1 Forward and Backward Substitution

Matrix factorisation methods like LU decomposition split a matrix into lower (L) and upper (U) triangular matrices, simplifying the solving process using forward and backward substitution.

### 2.3.2 Doolittle’s LU Factorisation

Doolittle’s method produces an LU decomposition where the diagonal of the L matrix consists of ones.

### 2.3.3 Pseudocode and Python Implementation

This section provides pseudocode and Python examples for implementing Doolittle’s LU factorisation using NumPy.

### 2.3.4 Other Types of Factorisations

Other factorisation methods include:

- **Cholesky Decomposition:** For symmetric, positive-definite matrices.
- **QR Decomposition:** Used for solving least-squares problems.

### 2.3.5 Doolittle’s Factorisation from Gaussian Elimination

The LU decomposition can be obtained as a by-product of Gaussian elimination, saving computational resources.

### 2.3.6 Permutation Matrices

Permutation matrices represent row swaps in pivoting strategies, playing a crucial role in LU factorisation with pivoting.

### 2.3.7 Special Types of Matrices

This section covers matrices with properties like diagonal dominance and symmetry, which simplify numerical computations.

### 2.3.8 Additional Problems

- Implement LU decomposition without using built-in functions.
- Investigate how permutation matrices affect the factorisation.

### 2.3.9 Computer Activities

- Compare performance between Gaussian elimination and LU decomposition for large matrices.
- Visualise permutation matrices in Python using matplotlib.

---

_End of Chapter 2: Direct Methods_