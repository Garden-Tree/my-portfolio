import type { Profile } from '@/types';

const profile: Profile = {
  name: "GardenTree",
  title: `ハードウェアからインフラの裏側まで。
技術と人を繋ぎ、「生きたシステム」を実装する。`,
  bio: `自作サーバー構築やロボコン出場を経て、モノづくりの面白さにのめり込みました。現在は大学院で、二輪車用HMDのUI/UX研究の社会実装を見据えた研究開発を行っています。

Webアプリ開発から仮想化基盤運用、ハードウェア制御まで幅広く経験し、システム全体を俯瞰する視点を養いました。ゲーム制作サークルでは部長兼テックリードとしてGitHubを導入して開発フローを刷新し、100名規模のサークル連合では代表として組織マネジメントを経験しました。

特定の領域に縛られない技術への探求心と、チームを牽引する推進力を強みに、社会の課題を解決する「生きたシステム」を実装します。`,
  profileImageUrl: "/images/profile.jpg",
  skills: [
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Clerk", "WordPress"]
    },
    {
      category: "Backend",
      items: ["Python", "FastAPI", "Flask", "Java", "Node.js", "C++", "C", "PHP", "Shell Script", "discord.py", "WebSocket"]
    },
    {
      category: "Game Development",
      items: ["Unity", "C#"]
    },
    {
      category: "Machine Learning / Data Science",
      items: ["Scikit-learn", "Pandas", "NumPy", "matplotlib", "R", "Gemini API"]
    },
    {
      category: "Hardware",
      items: ["Arduino", "Raspberry Pi", "Node-RED", "SDR"]
    },
    {
      category: "Database",
      items: ["SQL", "PostgreSQL", "Supabase", "Neon", "Prisma"]
    },
    {
      category: "Infrastructure & DevOps",
      items: ["Proxmox VE", "Tailscale", "Docker", "Linux", "Git", "GitHub", "GitHub Actions", "Vercel", "GCP"]
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