function calculate(exp) {
    const expression = exp.replaceAll(' ', '');
    const operators = ['+', '-', '*', '/']
    if (!expression.split('').some(operator => operators.includes(operator)))
        return parseInt(expression);
    if (expression.includes('+')) {
        let sum = 0;
        for (const calc of expression.split('+')) {
            sum += calculate(calc);
        }
        return sum;
    }
    if (expression.includes('-')) {
        let expressions = expression.split('-')
        let sum = expressions[0];
        for (let i = 1; i < expressions.length; i++) {
            sum -= calculate(expressions[i]);
        }
        return sum;
    }
    if (expression.includes('*')) {
        let product = 1;
        for (const calc of expression.split('*')) {
            product *= calculate(calc);
        }
        return product;
    }
    if (expression.includes('/')) {
        let expressions = expression.split('/');
        let product = expressions[0];
        for (let i = 1; i < expressions.length; i++) {
            product /= calculate(expressions[i]);
        }
        return product;
    }
}

console.log(calculate("15*5/6"));