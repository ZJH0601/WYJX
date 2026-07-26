import { useState, useEffect, useRef, useCallback } from 'react';
import { FileText, Clock, CheckCircle, PlayCircle, ArrowLeft, Timer, RotateCcw, BarChart3, Filter } from 'lucide-react';
import { exams, Exam } from '../data/questions';
import { createMassivePracticeExam, MASSIVE_BANK_META } from '../data/massiveQuestionBank';
import { useAppStore } from '../store/appStore';
import { evaluateAnswer } from '../utils/answerEvaluator';

/** 考试时间限制（分钟） */
const EXAM_TIME_LIMIT = 60;

/** 难度标签配置 */
const DIFFICULTY_CONFIG: Record<string, { label: string; color: string; bg: string }> = {
  basic: { label: '基础', color: 'text-green-600', bg: 'bg-green-100' },
  improve: { label: '提高', color: 'text-yellow-600', bg: 'bg-yellow-100' },
  exam: { label: '真题', color: 'text-red-600', bg: 'bg-red-100' },
};

/**
 * 题库系统页面
 * 提供试卷列表、难度筛选、考试计时、自动提交、成绩分析和答题回顾功能
 * 支持基础、提高、真题三个难度等级，覆盖职业高考全部考点
 */
export const Exams = () => {
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(EXAM_TIME_LIMIT * 60); // 秒
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { setExamResult, recordWrongAnswer, resolveWrongAnswer } = useAppStore();

  const handleSubmitExam = useCallback(() => {
    if (!selectedExam || submitted) return;

    setIsTimerRunning(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    let totalScore = 0;
    const answerDetails: Record<string, { answer: string; correct: boolean; score: number }> = {};

    selectedExam.questions.forEach((question) => {
      const userAnswer = answers[question.id] || '';
      const evaluation = evaluateAnswer(question, userAnswer);
      const earnedScore = Math.round(question.score * evaluation.scoreRatio);
      totalScore += earnedScore;
      if (evaluation.correct) {
        resolveWrongAnswer(question.id);
      } else {
        recordWrongAnswer({
          questionId: question.id,
          courseId: selectedExam.courseId,
          question: question.question,
          options: question.options,
          type: question.type,
          correctAnswer: question.answer,
          userAnswer,
          explanation: question.explanation,
        });
      }
      answerDetails[question.id] = {
        answer: userAnswer,
        correct: evaluation.correct,
        score: earnedScore,
      };
    });

    setScore(totalScore);
    setSubmitted(true);
    setExamResult({
      examId: selectedExam.id,
      courseId: selectedExam.courseId,
      score: totalScore,
      totalScore: selectedExam.totalScore,
      answers: answerDetails,
      timestamp: Date.now(),
    });
  }, [answers, recordWrongAnswer, resolveWrongAnswer, selectedExam, setExamResult, submitted]);

  /** 倒计时逻辑 */
  useEffect(() => {
    if (!isTimerRunning || submitted) return;
    timerRef.current = setTimeout(() => {
      if (timeLeft <= 1) {
        setTimeLeft(0);
        handleSubmitExam();
        return;
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [timeLeft, isTimerRunning, submitted, handleSubmitExam]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleStartExam = (exam: Exam) => {
    setSelectedExam(exam);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setSubmitted(false);
    setScore(0);
    setTimeLeft(EXAM_TIME_LIMIT * 60);
    setIsTimerRunning(true);
  };

  const handleSelectOption = (option: string) => {
    if (!submitted && selectedExam) {
      const question = selectedExam.questions[currentQuestionIndex];
      if (question.type === 'multiple') {
        const selected = (answers[question.id] || '').split(',').filter(Boolean);
        const next = selected.includes(option)
          ? selected.filter((item) => item !== option)
          : [...selected, option];
        setAnswers({ ...answers, [question.id]: next.sort().join(',') });
      } else {
        setAnswers({ ...answers, [question.id]: option });
      }
    }
  };

  const handleNextQuestion = () => {
    if (selectedExam && currentQuestionIndex < selectedExam.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const getOptionLabel = (index: number) => {
    return String.fromCharCode(65 + index);
  };

  const getOptionClass = (option: string, optionIndex: number) => {
    const question = selectedExam?.questions[currentQuestionIndex];
    if (!question) return 'exercise-option';
    
    const optionLabel = getOptionLabel(optionIndex);
    const isSelected = (answers[question.id] || '').split(',').includes(optionLabel);
    const isCorrectAnswer = question.answer.split(/[,|]/).includes(optionLabel);

    if (!submitted) {
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

  const scorePercentage = selectedExam?.totalScore
    ? Math.round((score / selectedExam.totalScore) * 100)
    : 0;

  const getScoreColor = () => {
    if (scorePercentage >= 80) return 'text-green-600';
    if (scorePercentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Exam List */}
      {!selectedExam && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">题库与随机强化系统</h1>
          <p className="text-gray-600 mb-6">四科共 8,000 道参数化变式题，加固定模拟卷；每次随机抽题、即时评分并提供推理解析。</p>

          {/* 难度筛选 */}
          <div className="flex items-center space-x-2 mb-6">
            <Filter className="w-4 h-4 text-gray-400" />
            {[
              { key: 'all', label: '全部' },
              { key: 'basic', label: '基础' },
              { key: 'improve', label: '提高' },
              { key: 'exam', label: '真题' },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setDifficultyFilter(f.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  difficultyFilter === f.key
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <section className="mb-10">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-700">Massive adaptive banks</p>
                <h2 className="mt-1 text-xl font-bold text-slate-900">每科 2,000 道海量强化题库</h2>
              </div>
              <p className="text-xs text-slate-500">每次抽取 20 道 · 可按当前难度筛选 · 重复训练自动更换题组</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {MASSIVE_BANK_META.map((bank) => (
                <article key={bank.courseId} className="rounded-2xl border border-cyan-100 bg-gradient-to-br from-white to-cyan-50 p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="rounded-lg bg-cyan-700 px-3 py-1 text-xs font-bold text-white">{bank.courseName}</span>
                    <span className="text-2xl font-black text-slate-900">{bank.count.toLocaleString()}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">覆盖基础辨析、计算推导、情境判断和易错边界，题目均带答案与原因解析。</p>
                  <button
                    onClick={() => handleStartExam(createMassivePracticeExam(
                      bank.courseId,
                      difficultyFilter as 'all' | 'basic' | 'improve' | 'exam',
                    ))}
                    className="mt-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 text-sm font-bold text-white hover:bg-cyan-800"
                  >
                    <PlayCircle className="h-4 w-4" />
                    随机抽取 20 题
                  </button>
                </article>
              ))}
            </div>
          </section>

          <div className="mb-4">
            <p className="text-xs font-bold uppercase tracking-widest text-primary-600">Structured papers</p>
            <h2 className="mt-1 text-xl font-bold text-slate-900">固定模拟试卷</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exams
              .filter(e => difficultyFilter === 'all' || e.difficulty === difficultyFilter)
              .map((exam) => {
                const diffConfig = DIFFICULTY_CONFIG[exam.difficulty];
                return (
                <div
                  key={exam.id}
                  className="bg-white rounded-xl shadow-sm p-6 card-hover cursor-pointer"
                  onClick={() => handleStartExam(exam)}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center">
                      <FileText className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg font-semibold text-gray-800">{exam.title}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${diffConfig.bg} ${diffConfig.color}`}>
                          {diffConfig.label}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">{exam.courseName}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{exam.questions.length} 道题</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>{exam.totalScore} 分</span>
                    </div>
                  </div>

                  <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2">
                    <PlayCircle className="w-5 h-5" />
                    <span>开始测试</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Exam Taking */}
      {selectedExam && !submitted && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => {
                if (timerRef.current) clearTimeout(timerRef.current);
                setIsTimerRunning(false);
                setSelectedExam(null);
              }}
              className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>返回题库</span>
            </button>
            <div className="flex items-center space-x-4">
              <h2 className="text-xl font-semibold text-gray-800">{selectedExam.title}</h2>
              <span className="bg-accent-100 text-accent-600 px-4 py-2 rounded-lg font-medium">
                {currentQuestionIndex + 1} / {selectedExam.questions.length}
              </span>
              {/* 倒计时 */}
              <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-mono text-sm ${
                timeLeft < 300 ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-blue-100 text-blue-600'
              }`}>
                <Timer className="w-4 h-4" />
                <span>{formatTime(timeLeft)}</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-gray-200 rounded-full h-2 mb-8">
            <div
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / selectedExam.questions.length) * 100}%` }}
            />
          </div>

          {/* Question */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            {selectedExam.questions[currentQuestionIndex] && (
              <>
                {/* Question Type */}
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    selectedExam.questions[currentQuestionIndex].type === 'single' ? 'bg-blue-100 text-blue-600' :
                    selectedExam.questions[currentQuestionIndex].type === 'multiple' ? 'bg-purple-100 text-purple-600' :
                    selectedExam.questions[currentQuestionIndex].type === 'fill' ? 'bg-green-100 text-green-600' :
                    selectedExam.questions[currentQuestionIndex].type === 'code' ? 'bg-orange-100 text-orange-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {selectedExam.questions[currentQuestionIndex].type === 'single' && '单选题'}
                    {selectedExam.questions[currentQuestionIndex].type === 'multiple' && '多选题'}
                    {selectedExam.questions[currentQuestionIndex].type === 'fill' && '填空题'}
                    {selectedExam.questions[currentQuestionIndex].type === 'code' && '编程题'}
                    {selectedExam.questions[currentQuestionIndex].type === 'essay' && '问答题'}
                  </span>
                  <span className="ml-2 text-xs text-gray-400">({selectedExam.questions[currentQuestionIndex].score}分)</span>
                </div>

                {/* Question Text */}
                <p className="text-lg text-gray-800 mb-6">
                  {currentQuestionIndex + 1}. {selectedExam.questions[currentQuestionIndex].question}
                </p>

                {/* Options */}
                {selectedExam.questions[currentQuestionIndex].options && (
                  <div className="space-y-3">
                    {selectedExam.questions[currentQuestionIndex].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleSelectOption(getOptionLabel(index))}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex items-center space-x-3 ${getOptionClass(option, index)}`}
                      >
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm ${
                          (answers[selectedExam.questions[currentQuestionIndex].id] || '').split(',').includes(getOptionLabel(index))
                            ? 'bg-primary-600 text-white'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {getOptionLabel(index)}
                        </span>
                        <span className="flex-1">{option}</span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Text Input for Fill/Code/Essay */}
                {!selectedExam.questions[currentQuestionIndex].options && (
                  <textarea
                    value={answers[selectedExam.questions[currentQuestionIndex].id] || ''}
                    onChange={(e) => {
                      const question = selectedExam.questions[currentQuestionIndex];
                      setAnswers({ ...answers, [question.id]: e.target.value });
                    }}
                    placeholder="请输入答案..."
                    className="w-full p-4 border-2 border-gray-200 rounded-lg resize-none focus:border-primary-600 focus:outline-none transition-colors"
                    rows={6}
                  />
                )}
              </>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t">
              <button
                onClick={handlePrevQuestion}
                disabled={currentQuestionIndex === 0}
                className="flex items-center space-x-2 px-6 py-3 text-gray-600 hover:text-primary-600 transition-colors disabled:text-gray-300"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>上一题</span>
              </button>

              {currentQuestionIndex < selectedExam.questions.length - 1 ? (
                <button
                  onClick={handleNextQuestion}
                  className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <span>下一题</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={handleSubmitExam}
                  className="flex items-center space-x-2 px-8 py-3 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>提交试卷</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Exam Result */}
      {selectedExam && submitted && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <div className={`w-24 h-24 ${scorePercentage >= 80 ? 'bg-green-100' : scorePercentage >= 60 ? 'bg-yellow-100' : 'bg-red-100'} rounded-full flex items-center justify-center mx-auto mb-6`}>
              <span className={`text-4xl font-bold ${getScoreColor()}`}>
                {scorePercentage}
              </span>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {scorePercentage >= 80 ? '优秀！' : scorePercentage >= 60 ? '考试通过！' : '需要继续努力！'}
            </h2>
            <p className="text-gray-600 mb-4">
              你的得分：{score} / {selectedExam.totalScore}（{scorePercentage}分）
            </p>
            <p className="text-sm text-gray-500 mb-6">
              用时：{formatTime(EXAM_TIME_LIMIT * 60 - timeLeft)}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8 sm:grid-cols-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-2xl font-bold text-blue-600">{selectedExam.questions.length}</p>
                <p className="text-sm text-gray-500">总题数</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-2xl font-bold text-green-600">
                  {selectedExam.questions.filter((q) => evaluateAnswer(q, answers[q.id] || '').correct).length}
                </p>
                <p className="text-sm text-gray-500">正确</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <p className="text-2xl font-bold text-red-600">
                  {selectedExam.questions.filter((q) => answers[q.id] && !evaluateAnswer(q, answers[q.id]).correct).length}
                </p>
                <p className="text-sm text-gray-500">错误</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4">
                <p className="text-2xl font-bold text-yellow-600">
                  {selectedExam.questions.filter((q) => !answers[q.id]).length}
                </p>
                <p className="text-sm text-gray-500">未答</p>
              </div>
            </div>

            {/* Question Review */}
            <div className="text-left mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">答题详情</h3>
              <div className="space-y-4">
                {selectedExam.questions.map((question, index) => {
                  const evaluation = evaluateAnswer(question, answers[question.id] || '');
                  const isCorrect = evaluation.correct;
                  return (
                    <div
                      key={question.id}
                      className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}
                    >
                      <div className="flex items-start space-x-3">
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                          {index + 1}
                        </span>
                        <div className="flex-1">
                          <p className="text-gray-800 mb-2">{question.question}</p>
                          <div className="flex items-center space-x-4 text-sm">
                            <span className="text-gray-600">
                              你的答案：<span className={isCorrect ? 'text-green-600' : 'text-red-600'}>{answers[question.id] || '未作答'}</span>
                            </span>
                            <span className="text-gray-600">
                              正确答案：<span className="text-green-600">{question.answer}</span>
                            </span>
                          </div>
                          <p className="mt-2 text-sm text-gray-600"><strong>解析：</strong>{question.explanation}</p>
                          {!isCorrect && <p className="mt-1 text-sm text-red-700"><strong>改进建议：</strong>{evaluation.feedback}</p>}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => {
                  setCurrentQuestionIndex(0);
                  setAnswers({});
                  setSubmitted(false);
                  setScore(0);
                  setTimeLeft(EXAM_TIME_LIMIT * 60);
                  setIsTimerRunning(true);
                }}
                className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
                <span>重新测试</span>
              </button>
              <button
                onClick={() => setSelectedExam(null)}
                className="flex items-center space-x-2 px-6 py-3 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <BarChart3 className="w-5 h-5" />
                <span>查看其他试卷</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
