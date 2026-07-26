import { useState, useEffect } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { Exercise } from '../data/cLanguage';
import { useAppStore } from '../store/appStore';

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
  const [score, setScore] = useState(0);
  const { setProgress } = useAppStore();

  /** 计算总可能得分 */
  const totalMaxScore = exercises.reduce((sum, e) => sum + e.score, 0);

  const currentExercise = exercises[currentIndex];

  const handleSelect = (option: string) => {
    if (!showResults[currentExercise.id]) {
      setAnswers({ ...answers, [currentExercise.id]: option });
    }
  };

  const handleSubmit = () => {
    const currentAnswer = answers[currentExercise.id] || '';
    const isCorrect = currentAnswer.toLowerCase() === currentExercise.answer.toLowerCase();
    
    setShowResults({ ...showResults, [currentExercise.id]: true });
    
    if (isCorrect) {
      setScore(prev => prev + currentExercise.score);
    }
  };

  /** 完成所有练习后同步得分到 store */
  useEffect(() => {
    const allSubmitted = exercises.every(e => showResults[e.id]);
    if (allSubmitted) {
      setProgress({
        courseId,
        chapterId,
        lessonId,
        completed: true,
        exerciseScore: score,
        exerciseMaxScore: totalMaxScore,
        timestamp: Date.now(),
      });
    }
  }, [showResults, exercises, score, courseId, chapterId, lessonId, totalMaxScore, setProgress]);

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
    const isSelected = answers[currentExercise.id] === optionLabel;
    const hasSubmitted = showResults[currentExercise.id];
    const isCorrectAnswer = optionLabel === currentExercise.answer;

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
                answers[currentExercise.id] === getOptionLabel(index) && !showResults[currentExercise.id]
                  ? 'bg-primary-600 text-white'
                  : showResults[currentExercise.id] && getOptionLabel(index) === currentExercise.answer
                  ? 'bg-green-500 text-white'
                  : showResults[currentExercise.id] && answers[currentExercise.id] === getOptionLabel(index) && getOptionLabel(index) !== currentExercise.answer
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {getOptionLabel(index)}
              </span>
              <span className="flex-1">{option}</span>
              {showResults[currentExercise.id] && getOptionLabel(index) === currentExercise.answer && (
                <CheckCircle className="w-5 h-5 text-green-500" />
              )}
              {showResults[currentExercise.id] && answers[currentExercise.id] === getOptionLabel(index) && getOptionLabel(index) !== currentExercise.answer && (
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
              <div className="text-center">
                <span className="text-lg font-bold text-accent-600">练习完成！</span>
                <p className="text-sm text-gray-500">总得分：{score} / {exercises.reduce((sum, e) => sum + e.score, 0)}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
