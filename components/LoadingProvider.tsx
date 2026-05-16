"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Wind } from "lucide-react";

const LoadingContext = createContext({ loading: false });

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    // Sayfa içeriğini hemen değiştir ama loading perdesini açık tut
    setDisplayChildren(children);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 400); // Minimum görünme süresi

    return () => clearTimeout(timer);
  }, [pathname, children]);

  return (
    <LoadingContext.Provider value={{ loading }}>
      {/* Loading Perdesi */}
      <div
        className={`fixed inset-0 z-[100] bg-white flex items-center justify-center transition-opacity duration-300 ease-in-out ${
          loading ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 bg-primary-600 rounded-2xl animate-pulse">
            <Wind className="w-8 h-8 text-white animate-spin" />
          </div>
          <p className="text-metal-500 text-sm font-medium tracking-wide">Yükleniyor...</p>
        </div>
      </div>

      {/* Sayfa İçeriği */}
      <div className="min-h-screen">
        {displayChildren}
      </div>
    </LoadingContext.Provider>
  );
}

export const useLoading = () => useContext(LoadingContext);

// Layout içerisinde doğrudan 'import LoadingProvider from ...' şeklinde çağrılabilmesi için default export ekledik
export default LoadingProvider;