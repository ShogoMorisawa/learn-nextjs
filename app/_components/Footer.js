import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-6 text-center text-sm text-primary-400 border-t border-primary-800 mt-8">
      <span>&copy; {new Date().getFullYear()} The Wild Oasis</span>
      <span className="mx-2">|</span>
      <Link href="/privacy-policy" className="underline hover:text-accent-400">
        プライバシーポリシー
      </Link>
    </footer>
  );
}
