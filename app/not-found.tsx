"use client";

import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-7xl font-bold text-amber-600">404</p>
      <h1 className="mt-4 text-2xl font-bold text-gray-900 md:text-3xl">
        Page Not Found
      </h1>
      <p className="mt-2 max-w-md text-sm text-gray-600">
        The page you&apos;re looking for doesn&apos;t exist or may have been
        moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-gray-900 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-600"
      >
        <Home size={16} />
        Back to Home
      </Link>
    </div>
  );
}
