import { Exercise } from '../data/cLanguage';

const normalize = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[，、；]/g, ',')
    .replace(/\s+/g, ' ');

const normalizeCode = (value: string) =>
  value
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*$/gm, '')
    .replace(/\s+/g, '')
    .replace(/[“”]/g, '"')
    .toLowerCase();

const choiceSet = (value: string) =>
  [...new Set(value.toUpperCase().match(/[A-Z]/g) || [])].sort();

export interface AnswerEvaluation {
  correct: boolean;
  scoreRatio: number;
  matchedKeywords: string[];
  missingKeywords: string[];
  feedback: string;
}

export const evaluateAnswer = (exercise: Exercise, userAnswer: string): AnswerEvaluation => {
  const answer = normalize(exercise.answer);
  const user = normalize(userAnswer);

  if (exercise.type === 'multiple') {
    const expected = choiceSet(exercise.answer);
    const actual = choiceSet(userAnswer);
    const correct = expected.join(',') === actual.join(',');
    return {
      correct,
      scoreRatio: correct ? 1 : 0,
      matchedKeywords: [],
      missingKeywords: [],
      feedback: correct ? '多选项全部正确。' : `需要同时选对且不多选，正确组合为 ${exercise.answer}。`,
    };
  }

  if (exercise.type === 'fill' || exercise.type === 'single') {
    const accepted = answer.split('|').map((item) => item.trim());
    const correct = accepted.includes(user);
    return {
      correct,
      scoreRatio: correct ? 1 : 0,
      matchedKeywords: [],
      missingKeywords: [],
      feedback: correct ? '答案正确。' : '答案与关键结论不一致，请结合解析重新判断。',
    };
  }

  if (exercise.type === 'code') {
    const exact = normalizeCode(userAnswer) === normalizeCode(exercise.answer);
    const candidateKeywords = exercise.keywords?.length
      ? exercise.keywords
      : exercise.answer.match(/[a-zA-Z_]\w*|[\u4e00-\u9fa5]{2,}/g)?.slice(0, 8) || [];
    const keywords = [...new Set(candidateKeywords)];
    const normalizedUserCode = normalizeCode(userAnswer);
    const matchedKeywords = keywords.filter((keyword) => normalizedUserCode.includes(normalizeCode(keyword)));
    const missingKeywords = keywords.filter((keyword) => !matchedKeywords.includes(keyword));
    const scoreRatio = exact ? 1 : keywords.length ? matchedKeywords.length / keywords.length : 0;
    const correct = exact || scoreRatio >= 0.75;
    return {
      correct,
      scoreRatio,
      matchedKeywords,
      missingKeywords,
      feedback: exact
        ? '代码结构与参考实现一致。'
        : correct
          ? '核心结构正确；写法可以不同，建议再运行测试边界情况。'
          : `核心结构尚不完整${missingKeywords.length ? `，缺少：${missingKeywords.join('、')}` : ''}。`,
    };
  }

  const candidateKeywords = exercise.keywords?.length
    ? exercise.keywords
    : exercise.answer
        .split(/[，。；、,\s]+/)
        .map((item) => item.trim())
        .filter((item) => item.length >= 2)
        .slice(0, 8);
  const keywords = [...new Set(candidateKeywords)];
  const matchedKeywords = keywords.filter((keyword) => user.includes(normalize(keyword)));
  const missingKeywords = keywords.filter((keyword) => !matchedKeywords.includes(keyword));
  const scoreRatio = keywords.length ? matchedKeywords.length / keywords.length : Number(user === answer);
  return {
    correct: scoreRatio >= 0.7,
    scoreRatio,
    matchedKeywords,
    missingKeywords,
    feedback: scoreRatio >= 0.7
      ? '关键要点基本完整。'
      : `回答仍缺少关键要点${missingKeywords.length ? `：${missingKeywords.join('、')}` : ''}。`,
  };
};
