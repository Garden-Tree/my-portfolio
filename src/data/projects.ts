import type { Project } from '@/types';

const projects: Project[] = [
  {
    title: "二輪車用HMDにおける表示情報と表示位置の検討（卒業研究）",
    slug: "motorcycle-hmd-study",
    shortDescription: "外部シミュレータと連動するHMD用UIシステムをWeb技術とPythonで構築し、運転時の反応時間を定量評価。学会にて学生奨励賞を受賞しました。",
    longDescription: `ライダーの安全性を高める次世代モビリティのUI/UX研究です。「運転時にどの情報を、どこに表示すべきか」という課題に対し、人間工学的なアプローチで検証を行いました。

独自の実験環境の構築
既存のドライビングシミュレータ（Assetto Corsa）を活用し、そこから得られる走行データをPythonで抽出。WebSocket通信を経由して、HMD（XREAL Air 2 Ultra）上にリアルタイムで情報を提示する独自の連携システムを構築しました。
HMD側のUI描画には、あえてHTML/CSS/JSのWeb標準技術を採用しています。これにより、検証時の柔軟なUI調整と、将来的な別デバイスへの移植性を担保する設計としました。

定量的なUX評価と分析
構築した環境を用いて被験者実験を実施。標識や矢印などの情報を様々な位置に表示し、ドライバーの認知負荷や反応時間を定量的に測定することで、安全性と利便性を両立する最適な表示位置を検証しました。

複数の技術要素を統合した検証環境の構築からデータ分析までを一貫して行い、情報処理学会全国大会にて学生奨励賞を受賞しています。`,
    technologies: [
      "Python",
      "JavaScript",
      "HTML/CSS",
      "WebSocket",
      "VR/AR"
    ],
    imageUrl: "/images/hmd.png",
    repositoryUrl: "https://github.com/Garden-Tree/research"
  },
  {
    title: "仮想化基盤を用いた自宅サーバーの構築・運用",
    slug: "home-lab-server",
    shortDescription: "自作PCに仮想化基盤（Proxmox/Docker）を構築。TailscaleによるVPNアクセス網を整備し、複数サービスを24時間運用しています。",
    longDescription: `クラウドサービス（IaaS/PaaS）に依存せず、インフラの低レイヤー（OS・ネットワーク）の挙動を実践的に理解するため、自宅で物理サーバーを構築・運用しています。

Proxmoxによる仮想化基盤の構築
余っていた自作PCにハイパーバイザー（Proxmox VE）を導入し、用途に合わせて仮想マシン（VM）やコンテナを柔軟にデプロイできる基盤を構築しました。限られたハードウェアリソースを分割・管理し、ホスティング環境を整えています。

VPN網（Tailscale）の構築
ルーターのポート開放によるセキュリティリスクを避けるため、Tailscale（メッシュVPN）を導入。外部から安全にSSH接続やコンテナ群の監視を行える保守運用ネットワークを構築しました。

コンテナ技術を活用した実運用
構築した基盤上で、自作アプリケーションやMinecraftサーバーなどをDockerコンテナとして稼働させています。環境のコード化によるデプロイ効率化に加え、24時間稼働に伴う熱対策やリソース監視など、泥臭い運用サイクルを個人で実践しています。`,
    technologies: [
      "Proxmox VE",
      "Docker / Docker Compose",
      "Linux (Ubuntu Server)",
      "Tailscale"
    ],
    imageUrl: "/images/proxmox.png",
    repositoryUrl: "https://github.com/Garden-Tree/home-lab-server"
  },
  {
    title: "Geminiを活用した燃費管理自動化WEBアプリケーションの開発",
    slug: "ai-fuel-efficiency-app",
    shortDescription: "Geminiのマルチモーダル機能を活用し、レシートやメーターの画像を読み取って自動で燃費を計算・記録するアプリを個人開発しました。",
    longDescription: `二輪車や四輪車の維持管理において、給油データの「手入力の手間」を解消するため、AI技術とモダンなWebスタックを組み合わせたプロダクトを開発しました。

Gemini APIによるデータ抽出
給油レシートやODOメーターの画像から、Gemini APIを用いて給油量、単価、合計金額、累計走行距離を自動抽出。プロンプトエンジニアリングにより、複雑なレシート形式や夜間のメーター画像からでも必要なデータを取得する処理を実装しました。

フルスタック構成による開発
フロントエンド・API層にNext.jsを採用。認証にはClerkを導入し、データベースおよびストレージにはSupabaseを活用して、バックエンド環境を構築しています。

実用性とUXの追求
自身のライダーとしての経験から、ガソリンスタンドで即座に記録が完了するUIを設計。ユーザーは「写真を撮るだけ」で燃費の推移や月間コストを把握できる仕組みを構築しました。`,
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Clerk",
      "Tailwind CSS",
      "Gemini API"
    ],
    imageUrl: "/images/fuellens.png",
    projectUrl: "https://fuel-lens.vercel.app",
    repositoryUrl: "https://github.com/Garden-Tree/fuel-lens"
  },
  {
    title: "【企業協業】LPWAとFlaskを用いたスマートゴミ箱の開発",
    slug: "smart-trash-can",
    shortDescription: "センサーを用いてゴミの量を検知し通知するスマートゴミ箱をハードウェアから可視化サイトまで開発しました",
    longDescription: `京セラコミュニケーションシステム株式会社様との共同プロジェクトとして、センサーを用いたスマートゴミ箱を開発しました。Arduinoでゴミの堆積量を計測し、LPWA（低消費電力広域ネットワーク）を利用してサーバーへ定期送信するエッジデバイスを構築。バックエンドにはFlaskを用い、取得したデータをWebサイト上で可視化するフルスタックな実装を行いました。`,

    technologies: [
      "Arduino",
      "C++",
      "LPWA（Sigfox）",
      "Python",
      "Flask"
    ],
    imageUrl: "/images/trash.jpg",
    repositoryUrl: "https://github.com/Garden-Tree/dustbox"
  },
  {
    title: "大学内過去問共有プラットフォームの構築",
    slug: "past-exam-sharing-site",
    shortDescription: "個人間での受け渡しに依存していた過去問共有の課題を解決するため、認証・検索・投稿機能を備えたWebアプリケーションを開発しています。",
    longDescription: `大学内で非効率に行われていた過去問共有をデジタル化し、アクセシビリティを向上させるためのプラットフォームを開発しました。

モダンな技術スタックの選定と実装
フロントエンドにNext.jsとTypeScriptを採用。Tailwind CSSによるレスポンシブデザインを適用し、スマートフォンからの利用も考慮しました。

BaaSを活用したバックエンド設計
Supabaseをバックエンドに採用し、データベース管理、認証、ファイルアップロード機能を実装。サーバーレスなアーキテクチャを活用しています。

ユーザー体験を重視した機能実装
目的の情報を見つけやすい検索機能や、適切な権限管理に基づいた投稿機能を実装。実際の学生の利用を想定したUI設計を行っています。`,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Vercel"
    ],
    imageUrl: "/images/kakomon.png",
    projectUrl: "https://chodai-kakomon-hub.vercel.app",
    repositoryUrl: "https://github.com/Garden-Tree/chodai-kakomon-hub"
  },
  {
    title: "Discord向けテキスト読み上げ(TTS) Botの開発・運用",
    slug: "discord-tts-bot",
    shortDescription: "Pythonを用いてテキスト読み上げBotをゼロから開発。Dockerでコンテナ化し、自身の自宅サーバー環境で24時間稼働させています。",
    longDescription: `サークル内のボイスチャットにおけるコミュニケーションを円滑にするため、テキストチャットを指定した音声で自動的に読み上げるBotをPython (discord.py) で開発しました。

外部API連携と非同期処理
各種TTS APIと連携するプログラムを記述し、ボイスチャット上で遅延のない自然な読み上げを実現するために、非同期処理を用いたルーティングを実装しています。

ユーザー体験を意識した機能実装
辞書登録機能や、ユーザーごとの声色・速度のカスタマイズなど、実際のコミュニティでの利用を想定した機能拡張を行い、利便性を向上させました。

Dockerを用いたデプロイ
ローカルスクリプトで終わらせず、Docker Composeを用いて実行環境をコンテナ化しました。自身の自宅Linuxサーバーへデプロイし、安定して提供し続けるソフトウェア運用のサイクルを実践しています。`,
    technologies: [
      "Python",
      "discord.py",
      "Google Cloud Text-to-Speech API",
      "Docker",
      "Git / GitHub"
    ],
    imageUrl: "/images/yomi-KAI.webp",
    repositoryUrl: "https://github.com/Garden-Tree/yomi-KAI"
  },
  {
    title: "Raspberry Piを用いたスマートリモコン",
    slug: "smart-remote-control-for-raspberry-pi",
    shortDescription: "Raspberry Piを用いてスマートリモコンを開発しました。",
    longDescription: `Raspberry Pi Zero WHを用いて、スマートリモコンやSNSからの命令で赤外線信号を送受信できるスマートリモコンを自作しました。
    スマートスピーカー→IFTTT→Slack→hubot→irrp.py`,
    technologies: [
      "Raspberry Pi",
      "Python",
      "NODE-RED",
      "hubot",
      "IFTTT",
      "irrp.py",
    ],
    imageUrl: "/images/smartrimocon.jpg",
  },
  {
    title: "スクールバス運行最適化提案",
    slug: "school-bus-timetable-optimization-proposal",
    shortDescription: "過去の運行データと乗降データを分析し、機械学習を用いて効率的なスクールバスのダイヤを提案しました。",
    longDescription: `高校のスクールバスの混雑や非効率な運行ダイヤという課題に対し、データを用いたアプローチで解決策を検討しました。過去の乗降データなどをPandasやNumPyを用いて前処理し、Scikit-learnによる機械学習アルゴリズム（回帰分析など）を適用して需要を予測。Matplotlib等で視覚化し、データに基づいた最適化ダイヤの提案を行いました。`,
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "NumPy",
      "Matplotlib"
    ],
    imageUrl: "https://placehold.co/1200x800/png?text=School+Bus+Optimization",
    repositoryUrl: "https://github.com/Garden-Tree/school-bus-optimization"
  },
  {
    title: "テックメディア「Gadelog」の運営",
    slug: "gadelog-tech-media",
    shortDescription: "自身の技術的知見やガジェットの魅力を発信するテックブログ「Gadelog」を立ち上げ、継続的に運用しています。",
    longDescription: `技術をインプットするだけでなく、外部に向けて分かりやすく言語化し、発信するアウトプットの場として「Gadelog」を運営しています。WordPress等の環境構築・保守から、記事のライティング、コンテンツ企画までを個人で実施。自身の知見を共有する活動を継続しています。`,
    technologies: [
      "WordPress",
      "JavaScript",
      "HTML/CSS",
      "PHP",
      "MySQL",
      "Linux"
    ],
    imageUrl: "/images/gadelog.png",
    projectUrl: "https://gadelog.com/"
  },
  {
    title: "航空機データフィード基盤の構築と安定運用",
    slug: "aircraft-ads-b-feeder",
    shortDescription: "SDRを用いて航空機情報(ADS-B)の受信・データ連携システムを構築・運用しています。",
    longDescription: `SDR（ソフトウェア定義無線）チューナーを組み合わせ、近隣を飛行する航空機のADS-B信号を受信するシステムを構築しました。既存のデコードプログラムを適切に設定し、電波情報をデジタルデータに変換しています。

取得した航空機のデータを、Flightradar24などの共有サイトへ安定してフィードし続けています。Raspberry Piという限られたリソース・電源環境下において、熱対策やLinuxの安定稼働といった運用知見を蓄積しています。`,
    technologies: [
      "Raspberry Pi",
      "SDR (ソフトウェア定義無線)",
      "Linux"
    ],
    imageUrl: "/images/raspberrypi.jpg",
    projectUrl: "https://gadelog.com/%e3%80%902024%e3%80%91ubuntu%e3%81%a7flightradar24%e3%81%ab%e3%83%95%e3%82%a3%e3%83%bc%e3%83%89%e3%81%99%e3%82%8b%e6%96%b9%e6%b3%95%ef%bc%88rtl-sdr%e4%bd%bf%e7%94%a8%ef%bc%89/"
  },
];

export default projects;