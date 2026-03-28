import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-gray-50/50 mt-auto py-12">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-6">
        <div className="flex gap-8">
          <Link href="/terms" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            Terms of Service
          </Link>
          <Link href="/privacy" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            Privacy Policy
          </Link>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-sm font-semibold text-gray-400">© {currentYear} ContentLab</p>
          <a href="mailto:support@contentlab.app" className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-gray-600 transition-colors">
            <Mail className="w-3 h-3" />
            support@contentlab.app
          </a>
        </div>
      </div>
    </footer>
  );
}
