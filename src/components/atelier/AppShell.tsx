import type { ReactNode } from "react";
import { BottomNav } from "./BottomNav";
import { ExitSheet } from "./ExitSheet";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen max-w-[480px] flex-col bg-background pb-24 shadow-[0_0_60px_-30px_rgba(43,33,26,0.35)]">
      {children}
      <BottomNav />
      <ExitSheet />
    </div>
  );
}
