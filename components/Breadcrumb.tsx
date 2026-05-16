"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbProps {
  items: { name: string; href?: string }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="py-4 bg-metal-50 border-b border-metal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link href="/" className="flex items-center gap-1 text-metal-500 hover:text-primary-600 transition-colors">
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Ana Sayfa</span>
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-metal-300" />
              {item.href ? (
                <Link href={item.href} className="text-metal-500 hover:text-primary-600 transition-colors">{item.name}</Link>
              ) : (
                <span className="text-primary-600 font-medium">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
