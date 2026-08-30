import React, { createContext, useContext, useState, useEffect } from "react";

import type { Size } from "@/lib/types";

type Language = "vi" | "en";
const LANG_KEY = "gladvn-lang";

interface DevContextType {
  size: Size;
  setSize: (size: Size) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const DevContext = createContext<DevContextType | undefined>(undefined);

// --- Hooks & Helpers for Language Sync ---
function isValidLanguage(lang: string | null): lang is Language {
  return lang === "vi" || lang === "en";
}

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";
  
  const urlLang = new URLSearchParams(window.location.search).get("lang");
  if (isValidLanguage(urlLang)) return urlLang;
  
  const storedLang = localStorage.getItem(LANG_KEY);
  if (isValidLanguage(storedLang)) return storedLang;

  return "en";
}

function useLanguageSync() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  // Sync state -> LocalStorage & URL
  useEffect(() => {
    localStorage.setItem(LANG_KEY, language);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (url.searchParams.get("lang") !== language) {
        url.searchParams.set("lang", language);
        window.history.replaceState({}, "", url);
      }
    }
  }, [language]);

  // Sync URL (popstate) -> state
  useEffect(() => {
    const handlePopState = () => {
      const urlLang = new URLSearchParams(window.location.search).get("lang");
      if (isValidLanguage(urlLang)) setLanguage(urlLang);
    };
    
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return [language, setLanguage] as const;
}

// --- Provider ---
export function DevContextProvider({ children }: { children: React.ReactNode }) {
  const [size, setSize] = useState<Size>("md");
  const [language, setLanguage] = useLanguageSync();

  return (
    <DevContext.Provider value={{ size, setSize, language, setLanguage }}>
      {children}
    </DevContext.Provider>
  );
}

// --- Consumers ---
export function useDevContext() {
  const context = useContext(DevContext);
  if (context === undefined) {
    throw new Error("useDevContext must be used within a DevContextProvider");
  }
  return context;
}

export function useI18n() {
  const { language } = useDevContext();
  return <T,>(vi: T, en: T): T => (language === "vi" ? vi : en);
}
