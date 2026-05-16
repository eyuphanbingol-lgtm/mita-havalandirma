"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a href="https://wa.me/905549241567" target="_blank" rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 p-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg transition-colors"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
