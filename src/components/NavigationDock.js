"use client";

import { HomeIcon, UserIcon, BriefcaseIcon, GridIcon, SendIcon } from "./Icons";

export default function NavigationDock({ activeTab, onTabChange }) {
  const navItems = [
    { id: "home", label: "Home", icon: HomeIcon },
    { id: "about", label: "About Me", icon: UserIcon },
    { id: "resume", label: "Resume", icon: BriefcaseIcon },
    { id: "portfolio", label: "Portfolio", icon: GridIcon },
    { id: "contact", label: "Contact", icon: SendIcon },
  ];

  return (
    <nav className="floating-dock" aria-label="Quick Navigation">
      <div className="dock-inner">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`dock-btn ${isActive ? "active" : ""}`}
              title={item.label}
              aria-label={item.label}
            >
              <Icon size={18} color={isActive ? "#111111" : "#222222"} />
              <span className="dock-tooltip">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
