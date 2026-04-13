import type { Profile } from '@/types';

const profile: Profile = {
  name: "GardenTree",
  title: `ハードウェアからインフラの裏側まで。
技術を繋ぎ合わせて「動くシステム」を作る。`,
  bio: `特定の領域に縛られず、目の前の課題を解決するために必要な技術を自ら選び、形にする「泥臭い探求心」を大切にしています。

愛車のバイクから着想を得たHMDの実験環境構築や、日常の不便を解消するIoTデバイス制作、自作PCを活用したサーバー基盤の運用など、物理世界からインフラの裏側まで一貫してモノづくりに向き合ってきました。

一方で、より大きなものを創り上げるためにはチームの力が不可欠です。ゲーム制作サークルでは代表として多様なメンバーを率い、GitHubの導入による開発フロー改善など、チーム全体の生産性を高める推進力を培いました。

これからも「個人の探求心」と「チームの推進力」を掛け合わせ、点と点の技術を繋いで課題を解決できるエンジニアを目指します。`,
  heroCTA: {
    text: "GitHub",
    href: "https://github.com/Garden-Tree"
  },
  profileImageUrl: "/images/profile.png",
  skills: [
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"]
    },
    {
      category: "Backend",
      items: ["Python", "FastAPI", "Flask", "Java", "Node.js", "C++", "C", "Shell Script"]
    },
    {
      category: "Game Development",
      items: ["Unity", "C#"]
    },
    {
      category: "Machine Learning / Data Science",
      items: ["Scikit-learn", "Pandas", "NumPy", "matplotlib", "R"]
    },
    {
      category: "Hardware",
      items: ["Arduino", "Raspberry Pi", "Node-RED", "SDR"]
    },
    {
      category: "Database",
      items: ["SQL", "PostgreSQL", "MongoDB"]
    },
    {
      category: "Infrastructure & DevOps",
      items: ["Proxmox VE", "Tailscale", "Docker", "Linux", "Git", "GitHub", "GitHub Actions"]
    }
  ],
  certifications: [
    "基本情報技術者試験 合格",
    "TOEIC Listening & Reading 830点",
    "情報処理学会 全国大会 学生奨励賞",
    "セキュリティ・キャンプミニ 参加"
  ]
};

export default profile;