import Link from 'next/link';

export default function BackButton() {
  return (
    <Link
      href="/#projects"
      className="text-amber-400 hover:text-amber-300 font-medium hover:underline inline-flex items-center gap-2 transition-colors"
    >
      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
      プロジェクト一覧へ戻る
    </Link>
  );
}
