// const expression = ['DIVIDE', 'SUM', 'MULTIPLE', 'SUBTRACT']
function calculateNumber(expr, a, b) {
  const ra = Math.round(a);
  const rb = Math.round(b);
  let rc = 0;
  //   if (expression.includes(expr))
  switch (expr) {
    case 'SUM':
      rc = ra + rb;
      break;
    case 'SUBTRACT':
      rc = ra - rb;
      break;
    case 'DIVIDE':
      if (rb === 0) {
        rc = 'Error';
      } else {
        rc = ra / rb;
      }
      break;
  }
  return rc;
}

module.exports = calculateNumber;
