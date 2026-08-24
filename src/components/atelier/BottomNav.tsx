import { Link, useRouterState } from "@tanstack/react-router";
import { Home, ShoppingBag, MessageCircle, User, Plus } from "lucide-react";

const items = [
  { to: "/", label: "Home", icon: Home },
  { to: "/collections", label: "Collections", icon: ShoppingBag },
] as const;

const rightItems = [
  { to: "/messages", label: "Messages", icon: MessageCircle, badge: 2 },
  { to: "/profile", label: "Profile", icon: User, badge: 0 },
] as const;

export function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 mx-auto max-w-[480px] border-t border-border bg-card/95 backdrop-blur">
      <div className="relative grid grid-cols-5 items-end px-2 pb-2 pt-2">
        {items.map(({ to, label, icon: Icon }) => {
          const active = pathname === to;
          return (
            <Link key={to} to={to} className="flex flex-col items-center gap-1 py-1">
              <Icon
                className={active ? "size-5 text-primary" : "size-5 text-muted-foreground"}
                strokeWidth={active ? 2.2 : 1.6}
              />
              <span
                className={
                  active
                    ? "text-[10px] font-medium text-primary"
                    : "text-[10px] text-muted-foreground"
                }
              >
                {label}
              </span>
            </Link>
          );
        })}

        <div className="flex flex-col items-center">
          <Link
            to="/create-my-look" search={{ design: undefined }}
            aria-label="Create My Look"
            className="-mt-7 flex size-13 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_8px_20px_-6px_var(--gold-shadow)] ring-4 ring-card"
            style={{ width: "3.25rem", height: "3.25rem" }}
          >
            <Plus className="size-6" />
          </Link>
          <span
            className={
              pathname === "/create-my-look"
                ? "mt-1 text-[10px] font-medium text-primary"
                : "mt-1 text-[10px] text-muted-foreground"
            }
          >
            Create My Look
          </span>
        </div>

        {rightItems.map(({ to, label, icon: Icon, badge }) => {
          const active = pathname === to;
          return (
            <Link key={to} to={to} className="flex flex-col items-center gap-1 py-1">
              <span className="relative">
                <Icon
                  className={active ? "size-5 text-primary" : "size-5 text-muted-foreground"}
                  strokeWidth={active ? 2.2 : 1.6}
                />
                {badge ? (
                  <span className="absolute -right-2 -top-1.5 flex size-4 items-center justify-center rounded-full bg-destructive text-[9px] font-semibold text-destructive-foreground">
                    {badge}
                  </span>
                ) : null}
              </span>
              <span
                className={
                  active
                    ? "text-[10px] font-medium text-primary"
                    : "text-[10px] text-muted-foreground"
                }
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
