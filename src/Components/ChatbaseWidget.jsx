"use client";

import { useEffect } from "react";

export default function ChatbaseWidget() {
  useEffect(() => {
    // Initialize Chatbase widget
    (function () {
      if (!window.chatbase || window.chatbase("getState") !== "initialized") {
        window.chatbase = (...args) => {
          if (!window.chatbase.q) window.chatbase.q = [];
          window.chatbase.q.push(args);
        };
        window.chatbase = new Proxy(window.chatbase, {
          get(target, prop) {
            if (prop === "q") return target.q;
            return (...args) => target(prop, ...args);
          },
        });
      }

      const onLoad = () => {
        const script = document.createElement("script");
        script.src = "https://www.chatbase.co/embed.min.js";
        script.id = process.env.NEXT_PUBLIC_CHATBASE_SCRIPT_ID;
        script.domain = "www.chatbase.co";
        document.body.appendChild(script);
      };

      if (document.readyState === "complete") onLoad();
      else window.addEventListener("load", onLoad);
    })();

    // Identify logged-in user
    async function identifyUser() {
      try {
        const res = await fetch("/api/getChatbaseToken");
        const data = await res.json();
        if (data.token) {
          window.chatbase && window.chatbase("identify", { token: data.token });
        }
      } catch (err) {
        console.error("Chatbase identify error:", err);
      }
    }

    identifyUser();
  }, []);

  return null;
}
