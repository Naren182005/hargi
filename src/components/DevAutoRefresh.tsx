"use client";

import { useEffect } from "react";

/**
 * DevAutoRefresh handles development hot-reloading and automatically triggers
 * a clean hard refresh if a stale Webpack chunk 404 or connection drop occurs,
 * eliminating the need to restart the dev server or manually clear cache.
 */
export const DevAutoRefresh: React.FC = () => {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    // 1. Catch ChunkLoadError (404s when server restarts or chunks update)
    const handleChunkError = (event: ErrorEvent | PromiseRejectionEvent) => {
      const errorMsg =
        "message" in event
          ? event.message
          : event.reason?.message || String(event.reason || "");

      const isChunkError =
        errorMsg.includes("Loading chunk") ||
        errorMsg.includes("Failed to fetch dynamically imported module") ||
        errorMsg.includes("ChunkLoadError") ||
        errorMsg.includes("404");

      if (isChunkError) {
        const lastReload = sessionStorage.getItem("__last_dev_reload");
        const now = Date.now();

        // Rate limit reloads to at most once per 3 seconds to avoid infinite loops
        if (!lastReload || now - Number(lastReload) > 3000) {
          sessionStorage.setItem("__last_dev_reload", String(now));
          console.warn(
            "[DevAutoRefresh] Stale chunk detected after rebuild. Performing auto hard refresh..."
          );
          window.location.reload();
        }
      }
    };

    window.addEventListener("error", handleChunkError);
    window.addEventListener("unhandledrejection", handleChunkError);

    return () => {
      window.removeEventListener("error", handleChunkError);
      window.removeEventListener("unhandledrejection", handleChunkError);
    };
  }, []);

  return null;
};
