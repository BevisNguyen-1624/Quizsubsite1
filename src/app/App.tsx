import { useState, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { quizQuestions } from "./data/quizData";
import { QuizQuestion } from "./components/QuizQuestion";
import { QuizResults } from "./components/QuizResults";

type Phase = "intro" | "quiz" | "results";

function FloatingOrb({
  size,
  color,
  style,
}: {
  size: number;
  color: string;
  style: React.CSSProperties;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        background: color,
        filter: "blur(40px)",
        opacity: 0.35,
        ...style,
      }}
      animate={{
        y: [0, -18, 0],
        x: [0, 10, 0],
        scale: [1, 1.06, 1],
      }}
      transition={{
        duration: 6 + Math.random() * 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 3,
      }}
    />
  );
}

export default function App() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const currentQuestion = quizQuestions[currentIndex];

  const handleStart = () => {
    setPhase("quiz");
    setCurrentIndex(0);
    setScore(0);
  };

  const handleNext = (isCorrect: boolean) => {
    const newScore = isCorrect ? score + 1 : score;
    if (currentIndex + 1 >= quizQuestions.length) {
      setScore(newScore);
      setPhase("results");
    } else {
      setScore(newScore);
      setCurrentIndex((i) => i + 1);
    }
  };

  const handleRestart = () => {
    setPhase("intro");
    setCurrentIndex(0);
    setScore(0);
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #dbeafe 0%, #e0f2fe 35%, #ede9fe 70%, #dbeafe 100%)",
      }}
    >
      {/* Decorative floating orbs */}
      <FloatingOrb
        size={320}
        color="radial-gradient(circle, #93c5fd, #bfdbfe)"
        style={{ top: "-80px", left: "-80px" }}
      />
      <FloatingOrb
        size={280}
        color="radial-gradient(circle, #c4b5fd, #ddd6fe)"
        style={{ bottom: "-60px", right: "-60px" }}
      />
      <FloatingOrb
        size={180}
        color="radial-gradient(circle, #fde68a, #fef3c7)"
        style={{ top: "30%", right: "5%" }}
      />
      <FloatingOrb
        size={150}
        color="radial-gradient(circle, #6ee7b7, #a7f3d0)"
        style={{ bottom: "20%", left: "3%" }}
      />

      {/* Sparkle dots */}
      {[
        { top: "15%", left: "20%" },
        { top: "70%", left: "15%" },
        { top: "25%", right: "18%" },
        { top: "80%", right: "22%" },
        { top: "50%", left: "8%" },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full pointer-events-none"
          style={{ background: "#93c5fd", ...pos }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.6,
          }}
        />
      ))}

      {/* Main Card */}
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full mx-4"
        style={{ maxWidth: "520px" }}
      >
        {/* Glow ring behind card */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(147,197,253,0.6), rgba(196,181,253,0.4), rgba(253,230,138,0.3))",
            filter: "blur(18px)",
            transform: "scale(1.03)",
          }}
        />

        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.82)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            boxShadow:
              "0 24px 64px rgba(99,102,241,0.12), 0 8px 24px rgba(59,130,246,0.1), inset 0 1px 0 rgba(255,255,255,0.9)",
            border: "1.5px solid rgba(255,255,255,0.7)",
          }}
        >
          {/* Top accent stripe */}
          <div
            className="h-1.5 w-full"
            style={{
              background:
                "linear-gradient(90deg, #f59e0b, #fb923c, #60a5fa, #c4b5fd)",
            }}
          />

          <div className="px-6 pt-6 pb-7">
            {/* Logo + Header */}
            <div className="flex flex-col items-center mb-6">
              {/* Logo badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                  type: "spring",
                }}
                className="w-14 h-14 rounded-2xl mb-3 flex items-center justify-center overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #1a1a1a, #2d2d2d)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
                }}
              >
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                >
                  {/* Culture Code logo-like mark */}
                  <rect
                    width="44"
                    height="44"
                    rx="10"
                    fill="#1a1a1a"
                  />
                  <text
                    x="22"
                    y="16"
                    textAnchor="middle"
                    fill="#f59e0b"
                    fontSize="6"
                    fontWeight="800"
                    fontFamily="Arial, sans-serif"
                    letterSpacing="0.5"
                  >
                    CULTURE
                  </text>
                  <text
                    x="22"
                    y="24"
                    textAnchor="middle"
                    fill="white"
                    fontSize="6.5"
                    fontWeight="900"
                    fontFamily="Arial, sans-serif"
                    letterSpacing="0.5"
                  >
                    CODE
                  </text>
                  <rect
                    x="8"
                    y="27"
                    width="28"
                    height="2"
                    rx="1"
                    fill="#e53e3e"
                  />
                  <text
                    x="22"
                    y="37"
                    textAnchor="middle"
                    fill="#94a3b8"
                    fontSize="4.5"
                    fontFamily="Arial, sans-serif"
                    letterSpacing="0.3"
                  >
                    101
                  </text>
                </svg>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="text-center tracking-wider"
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  background:
                    "linear-gradient(135deg, #f59e0b, #fb923c)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                CHECK-UP: TƯ DUY HỆ THỐNG VHDN
              </motion.h1>
            </div>

            {/* Divider */}
            <div
              className="w-full h-px mb-6"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #bfdbfe 40%, #c4b5fd 60%, transparent)",
              }}
            />

            {/* Content Area */}
            <AnimatePresence mode="wait">
              {phase === "intro" && (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center text-center gap-4"
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-4xl"
                    style={{
                      background:
                        "linear-gradient(135deg, #dbeafe, #ede9fe)",
                      boxShadow:
                        "0 8px 24px rgba(99,102,241,0.15)",
                    }}
                  >
                    🧠
                  </div>
                  <div>
                    <h2
                      className="text-gray-800 mb-2"
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 800,
                      }}
                    >
                      Bạn hiểu bao nhiêu về <br />
                      <span
                        style={{
                          background:
                            "linear-gradient(135deg, #f59e0b, #fb923c)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        Văn Hóa Doanh Nghiệp?
                      </span>
                    </h2>
                  </div>

                  <button
                    onClick={handleStart}
                    className="w-full py-4 rounded-xl transition-all duration-200 hover:opacity-90 active:scale-[0.98] mt-1"
                    style={{
                      background:
                        "linear-gradient(135deg, #f59e0b, #fb923c)",
                      color: "white",
                      fontWeight: 700,
                      fontSize: "1rem",
                      boxShadow:
                        "0 4px 20px rgba(245,158,11,0.4)",
                    }}
                  >
                    Bắt đầu kiểm tra ngay! 🚀
                  </button>
                </motion.div>
              )}

              {phase === "quiz" && currentQuestion && (
                <AnimatePresence mode="wait">
                  <QuizQuestion
                    key={currentQuestion.id}
                    question={currentQuestion}
                    questionNumber={currentIndex + 1}
                    totalQuestions={quizQuestions.length}
                    onNext={handleNext}
                  />
                </AnimatePresence>
              )}

              {phase === "results" && (
                <QuizResults
                  key="results"
                  score={score}
                  totalQuestions={quizQuestions.length}
                  onRestart={handleRestart}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
      <SpeedInsights />
    </div>
  );
}
