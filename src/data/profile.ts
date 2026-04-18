import type { Profile } from '@/types';

const profile: Profile = {
  name: "GardenTree",
  title: `ハードウェアからインフラの裏側まで。
技術と人を繋ぎ、「生きたシステム」を実装する。`,
  bio: `自作サーバー構築やロボコン出場を経て、モノづくりの面白さにのめり込みました。現在は大学院で、二輪車用HMDのUI/UX研究の社会実装を見据えた研究開発を行っています。

強みは、特定の領域に縛られない技術への探求心と、チームを牽引する推進力です。Webアプリ開発から、仮想化基盤運用、ハードウェア制御まで、システム全体を俯瞰した構築が可能です。

また、技術は人と組み合わさることで最大の効果を発揮します。ゲーム制作サークルではテックリードとしてGitHubを導入し開発フローを刷新したほか、100名規模のサークル連合代表として組織マネジメントを経験しました。

ハードウェアからインフラの裏側まで。多様な技術とチームを前へ進める力で、社会の課題を解決する「生きたシステム」を実装します。`,
  heroCTA: {
    text: "GitHub",
    href: "https://github.com/Garden-Tree"
  },
  profileImageUrl: "/images/profile.png",
  skills: [
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Clerk"]
    },
    {
      category: "Backend",
      items: ["Python", "FastAPI", "Flask", "Java", "Node.js", "C++", "C", "Shell Script", "discord.py", "WebSocket"]
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
      items: ["SQL", "PostgreSQL", "Supabase"]
    },
    {
      category: "Infrastructure & DevOps",
      items: ["Proxmox VE", "Tailscale", "Docker", "Linux", "Git", "GitHub", "GitHub Actions", "Vercel"]
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