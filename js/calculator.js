function calculateResult(questions, answers) {
  // 初始化得分
  const scores = { R:0, M:0, E:0, T:0, P:0, A:0, V:0, C:0 };
  
  // 遍历前16题
  for (let i = 0; i < 16; i++) {
    const q = questions[i];
    const opt = answers[i];
    const target = opt === 'A' ? q.scoreA : q.scoreB;
    Object.keys(target).forEach(k => scores[k] += target[k]);
  }
  
  // 判定四维度
  let dim1 = scores.R >= 3 ? 'R' : (scores.R <= 1 ? 'M' : '边界');
  let dim2 = scores.E >= 3 ? 'E' : (scores.E <= 1 ? 'T' : '边界');
  let dim3 = scores.P >= 3 ? 'P' : (scores.P <= 1 ? 'A' : '边界');
  let dim4 = scores.V >= 3 ? 'V' : (scores.V <= 1 ? 'C' : '边界');
  
  // 边界修正（题19、20）
  if (dim2 === '边界') dim2 = answers[18] === 'A' ? 'T' : 'E';
  if (dim3 === '边界') dim3 = answers[19] === 'B' ? 'A' : 'P';
  
  // 特殊类型
  const boundaryCount = [dim1,dim2,dim3,dim4].filter(d => d==='边界').length;
  const animalCode = boundaryCount >= 2 ? '游牧民' : dim1+dim2+dim3+dim4;
  
  // 能量标签
  const q17=answers[16], q18=answers[17];
  let energy = '';
  if (q17==='A' && q18==='A') energy = '🔇 独奏型';
  else if (q17==='B' && q18==='B') energy = '🔊 交响型';
  else energy = '🔇🔊 混合型';
  
  return { animalCode, energy, scores };
}