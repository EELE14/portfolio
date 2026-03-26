/* Copyright (c) 2026 eele14. All Rights Reserved. */
import type { ReactNode } from "react";
import { TopoBackground } from "./";
import { useTheme } from "../../lib";
import { Sun, Moon } from "lucide-react";

interface SplitLayoutProps {
  left: ReactNode;
  right: ReactNode;
}

export default function SplitLayout({ left, right }: SplitLayoutProps) {
  const { theme, toggle } = useTheme();

  return (
    <div
      className="relative w-full min-h-screen"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <TopoBackground />
      </div>

      {/* Theme toggle */}
      <button
        onClick={toggle}
        aria-label={
          theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
        className="fixed top-6 right-6 z-30 flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-200"
        style={{
          backgroundColor: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          color: "var(--color-muted)",
        }}
      >
        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      </button>

      <div className="flex flex-col md:hidden">
        <div className="relative w-full h-64 overflow-hidden flex-shrink-0">
          {right}
        </div>
        <div
          className="h-px mx-8"
          style={{ backgroundColor: "var(--color-border)" }}
        />
        <div className="relative z-10">{left}</div>
      </div>

      <div className="hidden md:block">
        <div
          className="fixed top-0 right-0 h-screen z-10"
          style={{ width: "40%", borderLeft: "1px solid var(--color-border)" }}
        >
          {right}
        </div>

        <div className="relative z-10" style={{ marginRight: "40%" }}>
          {left}
        </div>
      </div>
    </div>
  );
}
