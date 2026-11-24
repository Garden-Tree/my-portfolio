import Image from 'next/image';

interface GitHubLinkProps {
  href: string;
  size?: number;
}

export default function GitHubLink({ href, size = 24 }: GitHubLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHubのプロフィール"
      className="inline-block transition-opacity duration-200 hover:opacity-75"
    >
      <Image src="/github-mark-white.png" alt="" width={size} height={size} style={{ width: size, height: "auto" }} />
    </a>
  );
}
