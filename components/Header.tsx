import Link from "next/link";
import { Laptop } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-gray-900">
          <Laptop className="w-6 h-6 text-gray-900" />
          <span>ContentLab</span>
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Home
          </Link>
        </div>
      </nav>
    </header>
  );
}
