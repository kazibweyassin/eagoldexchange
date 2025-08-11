"use client";

import { useEffect, ReactNode } from "react";

interface ContentProtectionProps {
  children: ReactNode;
  level?: "basic" | "medium" | "high";
  allowRightClick?: boolean;
  allowTextSelection?: boolean;
  allowImageDrag?: boolean;
  showWatermark?: boolean;
  watermarkText?: string;
}

export default function ContentProtection({
  children,
  level = "medium",
  allowRightClick = false,
  allowTextSelection = false,
  allowImageDrag = false,
  showWatermark = false,
  watermarkText = "East African Gold Exchange",
}: ContentProtectionProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable common copy/save shortcuts
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === "s" || // Save
          e.key === "a" || // Select all
          e.key === "c" || // Copy
          e.key === "x" || // Cut
          e.key === "v" || // Paste (in some contexts)
          e.key === "p" || // Print
          e.key === "u") // View source
      ) {
        e.preventDefault();
        return false;
      }

      // Disable F12 (Developer Tools)
      if (e.key === "F12") {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+Shift+I (Developer Tools)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "I") {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+Shift+J (Console)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "J") {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+Shift+C (Element Inspector)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "C") {
        e.preventDefault();
        return false;
      }
    };

    const handleRightClick = (e: MouseEvent) => {
      if (!allowRightClick) {
        e.preventDefault();
        return false;
      }
    };

    const handleDragStart = (e: DragEvent) => {
      if (!allowImageDrag) {
        e.preventDefault();
        return false;
      }
    };

    const handleSelectStart = (e: Event) => {
      if (!allowTextSelection) {
        e.preventDefault();
        return false;
      }
    };

    // Disable text selection via CSS
    if (!allowTextSelection) {
      document.body.style.userSelect = "none";
      // Use type assertion for vendor-specific properties
      (document.body.style as any).webkitUserSelect = "none";
      (document.body.style as any).mozUserSelect = "none";
      (document.body.style as any).msUserSelect = "none";
    }

    // Add event listeners
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("contextmenu", handleRightClick);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("selectstart", handleSelectStart);

    // Additional protection for high level
    if (level === "high") {
      // Disable image dragging specifically
      const images = document.querySelectorAll("img");
      images.forEach((img) => {
        img.draggable = false;
        img.oncontextmenu = () => false;
        img.onselectstart = () => false;
        img.ondragstart = () => false;
      });

      // Console warning
      console.clear();
      console.warn(
        "%cSTOP!",
        "color: red; font-size: 50px; font-weight: bold; text-shadow: 3px 3px 0 rgba(0,0,0,.2);"
      );
      console.warn(
        "%cThis is a browser feature intended for developers. Content on this page is protected by copyright laws.",
        "color: red; font-size: 16px;"
      );
    }

    // Cleanup function
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("contextmenu", handleRightClick);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("selectstart", handleSelectStart);

      // Reset user select
      document.body.style.userSelect = "";
      // Use type assertion for vendor-specific properties
      (document.body.style as any).webkitUserSelect = "";
      (document.body.style as any).mozUserSelect = "";
      (document.body.style as any).msUserSelect = "";
    };
  }, [allowRightClick, allowTextSelection, allowImageDrag, level]);

  const getProtectionClasses = () => {
    let classes = "";
    
    switch (level) {
      case "basic":
        classes = "no-select";
        break;
      case "medium":
        classes = "no-copy";
        break;
      case "high":
        classes = "protected-content";
        break;
    }

    return classes;
  };

  return (
    <div className={`relative ${getProtectionClasses()}`}>
      {children}
      
      {/* Watermark */}
      {showWatermark && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-5 select-none">
            <div 
              className="w-full h-full flex items-center justify-center text-4xl font-bold text-gray-500 transform rotate-45"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 100px,
                  rgba(0,0,0,0.1) 100px,
                  rgba(0,0,0,0.1) 200px
                )`,
              }}
            >
              <span className="whitespace-nowrap">{watermarkText}</span>
            </div>
          </div>
        </div>
      )}

      {/* Invisible overlay for high protection */}
      {level === "high" && (
        <div className="absolute inset-0 pointer-events-auto bg-transparent z-10" />
      )}
    </div>
  );
}

// Hook for additional protection
export function useContentProtection(enabled: boolean = true) {
  useEffect(() => {
    if (!enabled) return;

    // Disable right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Disable text selection
    const handleSelectStart = (e: Event) => {
      e.preventDefault();
    };

    // Disable image dragging
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    // Add blur detection to hide content when dev tools might be open
    let devtools = { open: false, orientation: null };
    const threshold = 160;

    const checkDevTools = () => {
      if (
        window.outerHeight - window.innerHeight > threshold ||
        window.outerWidth - window.innerWidth > threshold
      ) {
        if (!devtools.open) {
          devtools.open = true;
          document.body.style.display = "none";
        }
      } else {
        if (devtools.open) {
          devtools.open = false;
          document.body.style.display = "";
        }
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("selectstart", handleSelectStart);
    document.addEventListener("dragstart", handleDragStart);
    
    const devToolsInterval = setInterval(checkDevTools, 500);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("selectstart", handleSelectStart);
      document.removeEventListener("dragstart", handleDragStart);
      clearInterval(devToolsInterval);
      document.body.style.display = "";
    };
  }, [enabled]);
}
