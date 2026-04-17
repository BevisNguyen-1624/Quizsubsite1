import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";
import { getScoreResult } from "../data/quizData";
import { ExternalLink, RotateCcw, Download } from "lucide-react";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  userId: string;
  onRestart: () => void;
}

export function QuizResults({ score, totalQuestions, userId, onRestart }: QuizResultsProps) {
  const result = getScoreResult(score);
  const isPerfect = score === totalQuestions;
  const confettiFired = useRef(false);

  useEffect(() => {
    if (isPerfect && !confettiFired.current) {
      confettiFired.current = true;
      const duration = 3000;
      const end = Date.now() + duration;
      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ["#f59e0b", "#fb923c", "#60a5fa", "#34d399"],
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ["#f59e0b", "#fb923c", "#60a5fa", "#34d399"],
        });
        if (Date.now() < end) requestAnimationFrame(frame);
      };
      frame();
    }
  }, [isPerfect]);

  const scorePercentage = (score / totalQuestions) * 100;

  const getScoreColor = () => {
    if (score <= 3) return { stroke: "#f87171", text: "#ef4444" };
    if (score <= 6) return { stroke: "#fb923c", text: "#f97316" };
    if (score <= 9) return { stroke: "#60a5fa", text: "#3b82f6" };
    return { stroke: "#f59e0b", text: "#f59e0b" };
  };

  const colors = getScoreColor();
  const circumference = 2 * Math.PI * 52;
  const dashOffset = circumference - (scorePercentage / 100) * circumference;

  // ─── Share / Download image ─────────────────────────────────────────────────
  const downloadShareImage = () => {
    const W = 720;
    const H = 1280;
    const canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Helper: wrap text into lines
    const wrapLines = (text: string, maxWidth: number, font: string): string[] => {
      ctx.font = font;
      const words = text.split(" ");
      const lines: string[] = [];
      let line = "";
      for (const word of words) {
        const test = line + word + " ";
        if (ctx.measureText(test).width > maxWidth && line) {
          lines.push(line.trim());
          line = word + " ";
        } else {
          line = test;
        }
      }
      if (line.trim()) lines.push(line.trim());
      return lines;
    };

    // ── 1. Background ───────────────────────────────────────────────────────
    const bg = ctx.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, "#dbeafe");
    bg.addColorStop(0.38, "#e0f2fe");
    bg.addColorStop(0.7, "#ede9fe");
    bg.addColorStop(1, "#dbeafe");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    // Decorative orbs
    const orb = (cx: number, cy: number, r: number, color: string) => {
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      g.addColorStop(0, color);
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
    };
    orb(60, 80, 310, "rgba(147,197,253,0.5)");
    orb(W, H, 360, "rgba(196,181,253,0.52)");
    orb(W - 60, 260, 210, "rgba(253,230,138,0.38)");
    orb(60, H - 210, 190, "rgba(110,231,183,0.38)");

    // ── 2. Card ─────────────────────────────────────────────────────────────
    const CX = W / 2;
    const CARD_X = 40, CARD_Y = 60, CARD_W = 640, CARD_H = 1160, RAD = 28;

    ctx.save();
    ctx.shadowColor = "rgba(99,102,241,0.22)";
    ctx.shadowBlur = 52;
    ctx.shadowOffsetY = 18;
    ctx.beginPath();
    (ctx as any).roundRect(CARD_X, CARD_Y, CARD_W, CARD_H, RAD);
    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    (ctx as any).roundRect(CARD_X, CARD_Y, CARD_W, CARD_H, RAD);
    ctx.strokeStyle = "rgba(255,255,255,0.78)";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();

    // Top stripe
    ctx.save();
    ctx.beginPath();
    (ctx as any).roundRect(CARD_X, CARD_Y, CARD_W, 13, [RAD, RAD, 0, 0]);
    const stripe = ctx.createLinearGradient(CARD_X, 0, CARD_X + CARD_W, 0);
    stripe.addColorStop(0, "#f59e0b");
    stripe.addColorStop(0.33, "#fb923c");
    stripe.addColorStop(0.66, "#60a5fa");
    stripe.addColorStop(1, "#c4b5fd");
    ctx.fillStyle = stripe;
    ctx.fill();
    ctx.restore();

    // ── 3. Content ──────────────────────────────────────────────────────────
    ctx.textAlign = "center";
    let cy = CARD_Y + 50;

    // Brand header
    ctx.save();
    ctx.font = "700 11px Arial";
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("C U L T U R E   C O D E", CX, cy);
    cy += 30;

    const brandGrad = ctx.createLinearGradient(CX - 55, 0, CX + 55, 0);
    brandGrad.addColorStop(0, "#f59e0b");
    brandGrad.addColorStop(1, "#fb923c");
    ctx.font = "900 42px Arial";
    ctx.fillStyle = brandGrad;
    ctx.fillText("101", CX, cy);
    cy += 18;

    // Three decorative dots
    ctx.fillStyle = "#f59e0b";
    [-48, 0, 48].forEach((dx) => {
      ctx.beginPath();
      ctx.arc(CX + dx, cy + 2, 3, 0, Math.PI * 2);
      ctx.fill();
    });
    cy += 22;
    ctx.restore();

    // "KẾT QUẢ KIỂM TRA" badge
    ctx.save();
    const BW = 390, BH = 36;
    const BX = CX - BW / 2;
    ctx.beginPath();
    (ctx as any).roundRect(BX, cy, BW, BH, 18);
    const bGrad = ctx.createLinearGradient(BX, 0, BX + BW, 0);
    bGrad.addColorStop(0, "#dbeafe");
    bGrad.addColorStop(1, "#ede9fe");
    ctx.fillStyle = bGrad;
    ctx.fill();
    ctx.font = "600 12.5px Arial";
    ctx.fillStyle = "#6366f1";
    ctx.fillText("KẾT QUẢ KIỂM TRA VĂN HÓA DOANH NGHIỆP", CX, cy + 24);
    cy += 56;
    ctx.restore();

    // User ID
    ctx.save();
    ctx.font = "500 12px Arial";
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("H Ọ C   V I Ê N", CX, cy);
    cy += 26;

    const idGrad = ctx.createLinearGradient(CX - 90, 0, CX + 90, 0);
    idGrad.addColorStop(0, "#f59e0b");
    idGrad.addColorStop(1, "#fb923c");
    ctx.font = "900 46px Arial";
    ctx.fillStyle = idGrad;
    ctx.fillText(userId || "YD---", CX, cy + 36);
    cy += 60;
    ctx.restore();

    // Divider 1
    ctx.save();
    const dg1 = ctx.createLinearGradient(120, 0, 600, 0);
    dg1.addColorStop(0, "rgba(196,181,253,0)");
    dg1.addColorStop(0.5, "rgba(196,181,253,0.8)");
    dg1.addColorStop(1, "rgba(196,181,253,0)");
    ctx.strokeStyle = dg1;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(120, cy);
    ctx.lineTo(600, cy);
    ctx.stroke();
    cy += 32;
    ctx.restore();

    // Score circle
    const scoreCol =
      score <= 3 ? "#f87171" : score <= 6 ? "#fb923c" : score <= 9 ? "#60a5fa" : "#f59e0b";
    const CR = 86;
    const circleCY = cy + CR + 8;

    ctx.save();
    // Background ring
    ctx.beginPath();
    ctx.arc(CX, circleCY, CR, 0, Math.PI * 2);
    ctx.strokeStyle = "#dbeafe";
    ctx.lineWidth = 14;
    ctx.stroke();
    // Score arc
    const pct = score / totalQuestions;
    ctx.beginPath();
    ctx.arc(CX, circleCY, CR, -Math.PI / 2, -Math.PI / 2 + pct * 2 * Math.PI);
    ctx.strokeStyle = scoreCol;
    ctx.lineWidth = 14;
    ctx.lineCap = "round";
    ctx.stroke();
    // Score text
    ctx.font = "900 62px Arial";
    ctx.fillStyle = scoreCol;
    ctx.fillText(String(score), CX, circleCY + 22);
    ctx.font = "600 20px Arial";
    ctx.fillStyle = "#94a3b8";
    ctx.fillText(`/${totalQuestions}`, CX, circleCY + 48);
    cy = circleCY + CR + 30;
    ctx.restore();

    // Emoji
    ctx.save();
    ctx.font = "52px Arial";
    ctx.fillText(result.emoji, CX, cy + 46);
    cy += 62;
    ctx.restore();

    // Title
    ctx.save();
    const titleFont = "800 24px Arial";
    const titleLines = wrapLines(result.title, 520, titleFont);
    ctx.font = titleFont;
    ctx.fillStyle = "#1e293b";
    for (const line of titleLines) {
      ctx.fillText(line, CX, cy);
      cy += 34;
    }
    cy += 6;
    ctx.restore();

    // Divider 2
    ctx.save();
    const dg2 = ctx.createLinearGradient(120, 0, 600, 0);
    dg2.addColorStop(0, "rgba(191,219,254,0)");
    dg2.addColorStop(0.5, "rgba(191,219,254,0.8)");
    dg2.addColorStop(1, "rgba(191,219,254,0)");
    ctx.strokeStyle = dg2;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(120, cy);
    ctx.lineTo(600, cy);
    ctx.stroke();
    cy += 24;
    ctx.restore();

    // Description (first paragraph, max 5 lines)
    const rawDesc = result.description
      .split("\n\n")[0]
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .replace(/"([^"]+)"/g, "\u201c$1\u201d");
    ctx.save();
    const descFont = "400 16.5px Arial";
    const descLines = wrapLines(rawDesc, 520, descFont);
    ctx.font = descFont;
    ctx.fillStyle = "#475569";
    const showN = Math.min(descLines.length, 5);
    for (let i = 0; i < showN; i++) {
      ctx.fillText(descLines[i], CX, cy);
      cy += 28;
    }
    if (descLines.length > showN) {
      ctx.fillStyle = "#94a3b8";
      ctx.fillText("…", CX, cy);
      cy += 28;
    }
    cy += 12;
    ctx.restore();

    // Congrats banner
    ctx.save();
    const BNW = 540, BNH = 72;
    const BNX = CX - BNW / 2;
    ctx.beginPath();
    (ctx as any).roundRect(BNX, cy, BNW, BNH, 16);
    const bnGrad = ctx.createLinearGradient(BNX, 0, BNX + BNW, 0);
    bnGrad.addColorStop(0, "#f59e0b");
    bnGrad.addColorStop(1, "#fb923c");
    ctx.fillStyle = bnGrad;
    ctx.fill();
    ctx.font = "700 16px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("🎉  " + result.buttonText, CX, cy + 44);
    cy += BNH + 16;
    ctx.restore();

    // Footer divider + branding
    ctx.save();
    const footY = CARD_Y + CARD_H - 80;
    const fg = ctx.createLinearGradient(120, 0, 600, 0);
    fg.addColorStop(0, "rgba(191,219,254,0)");
    fg.addColorStop(0.5, "rgba(191,219,254,0.7)");
    fg.addColorStop(1, "rgba(191,219,254,0)");
    ctx.strokeStyle = fg;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(120, footY);
    ctx.lineTo(600, footY);
    ctx.stroke();
    ctx.font = "600 15px Arial";
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("culturecode101.com", CX, footY + 30);
    ctx.font = "400 12px Arial";
    ctx.fillStyle = "#cbd5e1";
    ctx.fillText(new Date().toLocaleDateString("vi-VN"), CX, footY + 52);
    ctx.restore();

    // Trigger download
    const link = document.createElement("a");
    link.download = `ket-qua-${userId || "YD"}sandauyody.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };
  // ────────────────────────────────────────────────────────────────────────────

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full flex flex-col items-center"
    >
      {/* Score Circle */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6, type: "spring", stiffness: 200 }}
        className="relative mb-6"
      >
        <svg width="130" height="130" viewBox="0 0 130 130">
          <circle cx="65" cy="65" r="52" fill="none" stroke="#dbeafe" strokeWidth="10" />
          <motion.circle
            cx="65"
            cy="65"
            r="52"
            fill="none"
            stroke={colors.stroke}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: dashOffset }}
            transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
            transform="rotate(-90 65 65)"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span style={{ fontSize: "2rem", fontWeight: 800, color: colors.text, lineHeight: 1 }}>
            {score}
          </span>
          <span style={{ fontSize: "0.85rem", color: "#94a3b8", fontWeight: 600 }}>
            /{totalQuestions}
          </span>
        </div>
      </motion.div>

      {/* User ID badge */}
      {userId && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full mb-4"
          style={{
            background: "linear-gradient(135deg, #fef3c7, #fffbeb)",
            border: "1px solid #fde68a",
          }}
        >
          <span className="text-xs text-amber-400" style={{ fontWeight: 500 }}>Học viên:</span>
          <span className="text-amber-600" style={{ fontWeight: 800, fontSize: "0.9rem" }}>
            {userId}
          </span>
        </motion.div>
      )}

      {/* Emoji + Title */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.45 }}
        className="text-center mb-4"
      >
        <div style={{ fontSize: "2.2rem", marginBottom: "8px" }}>{result.emoji}</div>
        <h2 className="text-gray-800" style={{ fontSize: "1.2rem", fontWeight: 800, lineHeight: 1.3 }}>
          {result.title}
        </h2>
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="w-full h-px mb-5"
        style={{ background: "linear-gradient(90deg, transparent, #bfdbfe, transparent)" }}
      />

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.45 }}
        className="mb-7 w-full"
      >
        {result.description.split("\n\n").map((para, i) => (
          <p
            key={i}
            className="text-gray-600 leading-relaxed text-sm mb-3 last:mb-0 text-justify"
            dangerouslySetInnerHTML={{
              __html: para
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                .replace(/"([^"]+)"/g, "<em>&ldquo;$1&rdquo;</em>"),
            }}
          />
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.4 }}
        className="w-full mb-3"
      >
        <a
          href="/"
          className="w-full py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
          style={{
            background: "linear-gradient(135deg, #f59e0b, #fb923c)",
            color: "white",
            fontWeight: 700,
            fontSize: "1rem",
            boxShadow: "0 4px 20px rgba(245, 158, 11, 0.4)",
            display: "flex",
            textDecoration: "none",
          }}
        >
          {result.buttonText}
          <ExternalLink className="w-4 h-4" />
        </a>
      </motion.div>

      {/* Share / Download button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.82, duration: 0.4 }}
        className="w-full mb-5"
      >
        <button
          onClick={downloadShareImage}
          className="w-full py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
          style={{
            background: "rgba(255,255,255,0.7)",
            border: "1.5px solid #bfdbfe",
            color: "#6366f1",
            fontWeight: 700,
            fontSize: "0.95rem",
            boxShadow: "0 2px 12px rgba(99,102,241,0.1)",
          }}
        >
          <Download className="w-4 h-4" />
          Tải ảnh kết quả (9:16)
        </button>
      </motion.div>

      {/* Restart */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.95, duration: 0.4 }}
        onClick={onRestart}
        className="flex items-center gap-1.5 text-blue-400 hover:text-blue-600 transition-colors text-sm"
        style={{ fontWeight: 500 }}
      >
        <RotateCcw className="w-3.5 h-3.5" />
        Làm lại bài kiểm tra
      </motion.button>
    </motion.div>
  );
}
