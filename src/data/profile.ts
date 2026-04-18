import type { Profile } from '@/types';

const profile: Profile = {
  name: "GardenTree",
  title: `ハードウェアからインフラの裏側まで。
技術と人を繋ぎ、「生きたシステム」を実装する。`,
  bio: `12歳でプログラミングと出会い、中学生での自作Linuxサーバー構築やロボコン出場を経て、「モノづくり」の面白さにのめり込みました。現在は大学院に進学し、情報処理学会で学生奨励賞を受賞した「二輪車用HMDのUI/UX研究」をさらに発展させ、社会実装を見据えた研究開発を行っています。

私の強みは、特定の領域に縛られない技術への探求心と、チームを牽引する推進力です。
PythonやNext.jsを用いたWebアプリ開発から、Proxmox/Docker環境での仮想化基盤運用、Raspberry Piを用いたハードウェア制御まで、システム全体を俯瞰し構築することができます。

また、技術は「人」と組み合わさることで最大の効果を発揮すると考えています。ゲーム制作サークルではテックリードとしてGitHubを導入し開発フローを刷新したほか、100名規模のサークル連合代表として組織マネジメントを経験しました。

ハードウェアからインフラの裏側まで。培ってきた多様な技術とチームを前へ進める力で、単なるプログラムではない、人や社会の課題を解決する「生きたシステム」を実装していきます。`,
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