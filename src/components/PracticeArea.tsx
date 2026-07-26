import { useState, useEffect } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { Exercise } from '../data/cLanguage';
import { useAppStore } from '../store/appStore';
import { evaluateAnswer } from '../utils/answerEvaluator';

interface PracticeAreaProps {
  exercises: Exercise[];
  courseId: string;
  chapterId: string;
  lessonId: string;
}

/**
 * 练习区域组件
 * 支持单选题、多选题、填空题、编程题和问答题多种题型
 * 提供即时反馈、得分追踪和进度同步功能
 * 完成所有练习后自动将得分保存到学习进度store
 */
export const PracticeArea = ({ exercises, courseId, chapterId, lessonId }: PracticeAreaProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState<Record<string, boolean>>({});
  const [feedback, setFeedback] = useState<Record<string, string>>({});
  const [earnedScores, setEarnedScores] = useState<Record<string, number>>({});
  const { setProgress, getProgress, recordWrongAnswer, resolveWrongAnswer } = useAppStore();

  /** 计算总可能得分 */
  const totalMaxScore = exercises.reduce((sum, e) => sum + e.score, 0);
  const score = Object.values(earnedScores).reduce((sum, value) => sum + value, 0);

  const currentExercise = exercises[currentIndex];

  const handleSelect = (option: string) => {
    if (!showResults[currentExercise.id]) {
      if (currentExercise.type === 'multiple') {
        const selected = (answers[currentExercise.id] || '').split(',').filter(Boolean);
        const next = selected.includes(option)
          ? selected.filter((item) => item !== option)
          : [...selected, option];
        setAnswers({ ...answers, [currentExercise.id]: next.sort().join(',') });
      } else {
        setAnswers({ ...answers, [currentExercise.id]: option });
      }
    }
  };

  const handleSubmit = () => {
    const currentAnswer = answers[currentExercise.id] || '';
    const evaluation = evaluateAnswer(currentExercise, currentAnswer);
    const earnedScore = Math.round(currentExercise.score * evaluation.scoreRatio);
    
    setShowResults({ ...showResults, [currentExercise.id]: true });
    setFeedback({ ...feedback, [currentExercise.id]: evaluation.feedback });
    setEarnedScores({ ...earnedScores, [currentExercise.id]: earnedScore });
    if (evaluation.correct) {
      resolveWrongAnswer(currentExercise.id);
    } else {
      recordWrongAnswer({
        questionId: currentExercise.id,
        courseId,
        chapterId,
        lessonId,
        question: currentExercise.question,
        options: currentExercise.options,
        type: currentExercise.type,
        correctAnswer: currentExercise.answer,
        userAnswer: currentAnswer,
        explanation: currentExercise.explanation,
      });
    }
  };

  /** 完成所有练习后同步得分到 store */
  useEffect(() => {
    const allSubmitted = exercises.every(e => showResults[e.id]);
    if (allSubmitted) {
      const previous = getProgress(courseId, chapterId, lessonId);
      const scoreRatio = totalMaxScore > 0 ? score / totalMaxScore : 0;
      const closureComplete = Boolean(previous?.readCompleted && previous?.experimentCompleted && scoreRatio >= 0.8);
      setProgress({
        courseId,
        chapterId,
        lessonId,
        completed: closureComplete,
        exerciseScore: score,
        exerciseMaxScore: totalMaxScore,
        readCompleted: previous?.readCompleted,
        experimentCompleted: previous?.experimentCompleted,
        practiceCompleted: true,
        masteryLevel: closureComplete ? 'mastered' : scoreRatio >= 0.8 ? 'practiced' : 'understanding',
        attempts: (previous?.attempts || 0) + 1,
        timestamp: Date.now(),
      });
    }
  }, [showResults, exercises, score, courseId, chapterId, lessonId, totalMaxScore, setProgress, getProgress]);

  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const getOptionLabel = (index: number) => {
    return String.fromCharCode(65 + index); // A, B, C, D...
  };

  const getOptionClass = (option: string, optionIndex: number) => {
    const optionLabel = getOptionLabel(optionIndex);
    const isSelected = (answers[currentExercise.id] || '').split(',').includes(optionLabel);
    const hasSubmitted = showResults[currentExercise.id];
    const isCorrectAnswer = currentExercise.answer.split(/[,|]/).includes(optionLabel);

    if (!hasSubmitted) {
      return isSelected ? 'exercise-option selected' : 'exercise-option';
    }

    if (isCorrectAnswer) {
      return 'exercise-option correct';
    }
    if (isSelected && !isCorrectAnswer) {
      return 'exercise-option incorrect';
    }
    return 'exercise-option';
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-800">练习题目</h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">
            {currentIndex + 1} / {exercises.length}
          </span>
          <span className="bg-accent-100 text-accent-600 px-3 py-1 rounded-full text-sm font-medium">
            得分: {score}
          </span>
        </div>
      </div>

      {currentExercise && (
        <div className="animate-fadeIn">
          {/* Question Type Badge */}
          <div className="mb-4">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
              currentExercise.type === 'single' ? 'bg-blue-100 text-blue-600' :
              currentExercise.type === 'multiple' ? 'bg-purple-100 text-purple-600' :
              currentExercise.type === 'fill' ? 'bg-green-100 text-green-600' :
              currentExercise.type === 'code' ? 'bg-orange-100 text-orange-600' :
              'bg-gray-100 text-gray-600'
            }`}>
              {currentExercise.type === 'single' && '单选题'}
              {currentExercise.type === 'multiple' && '多选题'}
              {currentExercise.type === 'fill' && '填空题'}
              {currentExercise.type === 'code' && '编程题'}
              {currentExercise.type === 'essay' && '问答题'}
            </span>
            <span className="ml-2 text-xs text-gray-400">({currentExercise.score}分)</span>
          </div>

          {/* Question */}
          <p className="text-gray-800 mb-6 text-lg">{currentExercise.question}</p>

          {/* Options */}
          {currentExercise.options && currentExercise.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(getOptionLabel(index))}
              disabled={showResults[currentExercise.id]}
              className={`w-full text-left p-4 rounded-lg border-2 mb-3 flex items-center space-x-3 transition-all duration-200 ${getOptionClass(option, index)}`}
            >
              <span className={`w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm ${
                (answers[currentExercise.id] || '').split(',').includes(getOptionLabel(index)) && !showResults[currentExercise.id]
                  ? 'bg-primary-600 text-white'
                  : showResults[currentExercise.id] && currentExercise.answer.split(/[,|]/).includes(getOptionLabel(index))
                  ? 'bg-green-500 text-white'
                  : showResults[currentExercise.id] && (answers[currentExercise.id] || '').split(',').includes(getOptionLabel(index)) && !currentExercise.answer.split(/[,|]/).includes(getOptionLabel(index))
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {getOptionLabel(index)}
              </span>
              <span className="flex-1">{option}</span>
              {showResults[currentExercise.id] && currentExercise.answer.split(/[,|]/).includes(getOptionLabel(index)) && (
                <CheckCircle className="w-5 h-5 text-green-500" />
              )}
              {showResults[currentExercise.id] && (answers[currentExercise.id] || '').split(',').includes(getOptionLabel(index)) && !currentExercise.answer.split(/[,|]/).includes(getOptionLabel(index)) && (
                <XCircle className="w-5 h-5 text-red-500" />
              )}
            </button>
          ))}

          {/* Fill/Code/Essay Input */}
          {!currentExercise.options && (
            <div className="mb-4">
              <textarea
                value={answers[currentExercise.id] || ''}
                onChange={(e) => setAnswers({ ...answers, [currentExercise.id]: e.target.value })}
                disabled={showResults[currentExercise.id]}
                placeholder="请输入答案..."
                className="w-full p-4 border-2 border-gray-200 rounded-lg resize-none focus:border-primary-600 focus:outline-none transition-colors"
                rows={6}
              />
            </div>
          )}

          {/* Submit Button */}
          {!showResults[currentExercise.id] && (
            <button
              onClick={handleSubmit}
              disabled={!answers[currentExercise.id]}
              className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              提交答案
            </button>
          )}

          {/* Result Explanation */}
          {showResults[currentExercise.id] && (
            <div className="mt-4 p-4 rounded-lg bg-gray-50">
              <div className="flex items-center space-x-2 mb-2">
                <span className="font-medium text-gray-700">答案：</span>
                <span className="font-bold text-green-600">{currentExercise.answer}</span>
              </div>
              <div className="text-gray-600 text-sm">
                <span className="font-medium">解析：</span>{currentExercise.explanation}
              </div>
              {feedback[currentExercise.id] && (
                <div className="mt-2 text-sm text-primary-700">
                  <span className="font-medium">判分反馈：</span>{feedback[currentExercise.id]}
                </div>
              )}
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-primary-600 transition-colors disabled:text-gray-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>上一题</span>
            </button>

            {showResults[currentExercise.id] && currentIndex < exercises.length - 1 && (
              <button
                onClick={handleNext}
                className="flex items-center space-x-2 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                <span>下一题</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {showResults[currentExercise.id] && currentIndex === exercises.length - 1 && (
              <div className="text-right">
                <span className="text-lg font-bold text-accent-600">练习完成！</span>
                <p className="text-sm text-gray-500">总得分：{score} / {exercises.reduce((sum, e) => sum + e.score, 0)}</p>
                <button
                  onClick={() => {
                    setCurrentIndex(0);
                    setAnswers({});
                    setShowResults({});
                    setFeedback({});
                    setEarnedScores({});
                  }}
                  className="mt-2 rounded-lg border border-primary-300 px-3 py-1 text-xs font-bold text-primary-700"
                >
                  重新练习
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
