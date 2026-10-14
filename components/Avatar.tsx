import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

// Checked at build time: drop public/avatar.jpg in and rebuild to show the photo.
const hasAvatar = fs.existsSync(path.join(process.cwd(), "public/avatar.jpg"));

export default function Avatar({ alt }: { alt: string }) {
  if (hasAvatar) {
    return (
      <Image
        src="/avatar.jpg"
        alt={alt}
        width={160}
        height={160}
        priority
        className="h-40 w-40 rounded-full object-cover shadow-lg ring-4 ring-white"
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className="flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-5xl font-bold text-white shadow-lg ring-4 ring-white"
    >
      KN
    </div>
  );
}
