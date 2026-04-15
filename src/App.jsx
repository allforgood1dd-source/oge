import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const tasks = [
    {
      question: "Сколько будет 2 + 2?",
      answer: "4",
      hint: "Это самое простое сложение 🙂",
    },
    {
      question: "Столица Франции?",
      answer: "париж",
      hint: "Город любви 🇫🇷",
    },
    {
      question: "5 * 6 = ?",
      answer: "30",
      hint: "5 раз по 6",
    },
  ];

  const [activeTask, setActiveTask] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const currentTask = tasks[activeTask];

  // Сброс при смене задания
  useEffect(() => {
    setUserAnswer("");
    setShowAnswer(false);
    setShowHint(false);
  }, [activeTask]);

  return (
    <div className="app">
      <h1>Тренажёр заданий</h1>

      {/* Переключение заданий */}
      <div className="task-list">
        {tasks.map((_, index) => (
          <button
            key={index}
            className={index === activeTask ? "active" : ""}
            onClick={() => setActiveTask(index)}
          >
            Задание {index + 1}
          </button>
        ))}
      </div>

      {/* Задание */}
      <div className="task-container">
        <h3>{currentTask.question}</h3>

        <input
          type="text"
          placeholder="Введите ваш ответ"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />

        <div className="buttons">
          <button onClick={() => setShowHint(true)}>
            Показать подсказку
          </button>

          <button onClick={() => setShowAnswer(true)}>
            Показать ответ
          </button>
        </div>

        {/* Подсказка */}
        {showHint && currentTask.hint && (
          <div className="hint">
            <strong>Подсказка:</strong> {currentTask.hint}
          </div>
        )}

        {/* Ответ */}
        {showAnswer && (
          <div className="answer">
            <strong>Правильный ответ:</strong> {currentTask.answer}

            <div>
              {userAnswer.trim().toLowerCase() ===
              currentTask.answer.toLowerCase()
                ? "✅ Верно!"
                : "❌ Неверно"}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
