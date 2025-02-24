import numpy as np

def jacobi(A, b, x0, Nmax):
    """
    Approximates the solution to the system of linear equations Ax = b using Jacobi iteration.
    Inputs:
    A:    np.array of shape n x n
    b:    np.array of shape n x 1
    x0:   np.array of shape n x 1 (Initial guess)
    Nmax: Maximum number of iterations
    
    Output:
    x: Approximation to the solution Ax=b
    """
    n = len(A)
    x_old = x0.copy()
    x_new = np.zeros(n)
    
    for k in range(Nmax):
        for i in range(n):
            s = sum(A[i, j] * x_old[j] for j in range(n) if j != i)
            x_new[i] = (b[i] - s) / A[i, i]
        x_old = x_new.copy()
    
    return x_new
