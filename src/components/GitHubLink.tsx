// components/GitHubLink.tsx
import Image from 'next/image';

interface GitHubLinkProps {
  href: string;         // リンク先のURL (例: "https://github.com/your-username")
  size?: number;        // アイコンのサイズ (任意、デフォルトは24px)
  className?: string;   // <a> タグに追加するCSSクラス (任意)
}

export default function GitHubLink({ href, size = 24, className = '' }: GitHubLinkProps) {
  return (
    <a
      href={href}
      target="_blank"        // リンクを新しいタブで開く
      rel="noopener noreferrer" // セキュリティ対策
      aria-label="GitHub Profile"
      // リンク全体にホバーエフェクトをかける例
      className={`inline-block transition-opacity duration-200 hover:opacity-75 ${className}`}
    >
      <Image
        src="/github-mark-white.png" // ★ public ディレクトリにあるPNGファイルへのパス
        alt="GitHub Icon"
        width={size}
        height={size}
        style={{ width: 'auto', height: 'auto' }}
      />
    </a>
  );
}