import type { Project } from '@/types';

const projects: Project[] = [
  {
    title: "二輪車用HMDにおける表示情報と表示位置の検討（卒業研究）",
    slug: "motorcycle-hmd-study",
    shortDescription: "外部シミュレータと連動するHMD用UIシステムをWeb技術とPythonで構築し、運転時の反応時間を定量評価しました。学会にて学生奨励賞を受賞しています。",
    longDescription: `ライダーの安全性を高める次世代モビリティのUI/UX研究です。「運転時にどの情報を、どこに表示すべきか」という課題に対し、人間工学的なアプローチで検証を行いました。

【独自の実験環境の構築】
既存のドライビングシミュレータ（Assetto Corsa）を活用し、そこから得られる走行データをPythonで抽出。WebSocket通信を経由して、HMD（XREAL Air 2 Ultra）上にリアルタイムで情報を提示する独自の連携システムを構築しました。
HMD側のUI描画には、あえてHTML/CSS/JSのWeb標準技術を採用しています。これにより、検証時の柔軟なUI調整と、将来的な別デバイスへの移植性を担保する設計としました。

【定量的なUX評価と分析】
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
    shortDescription: "自作PCに仮想化基盤（Proxmox/Docker）を構築。TailscaleによるVPNアクセス網を整備し、複数のサービスを24時間運用しています。",
    longDescription: `クラウドサービス（IaaS/PaaS）に依存せず、インフラの低レイヤー（OS・ネットワーク）の挙動を実践的に理解するため、自宅で物理サーバーを構築・運用しています。

【Proxmoxによる仮想化基盤の構築】
余っていた自作PCにハイパーバイザー（Proxmox VE）を導入し、用途に合わせて仮想マシン（VM）やコンテナを柔軟にデプロイできる基盤を構築しました。限られたハードウェアリソースを分割・管理し、ホスティング環境を整えています。

【VPN網（Tailscale）の構築】
ルーターのポート開放によるセキュリティリスクを避けるため、Tailscale（メッシュVPN）を導入。外部から安全にSSH接続やコンテナ群の監視を行える保守運用ネットワークを構築しました。

【コンテナ技術を活用した実運用】
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

【Gemini APIによるデータ抽出】
給油レシートやODOメーターの画像から、Gemini APIを用いて給油量、単価、合計金額、累計走行距離を自動抽出。プロンプトエンジニアリングにより、複雑なレシート形式や夜間のメーター画像からでも必要なデータを高精度に取得する処理を実装しました。

【フルスタック構成による開発】
フロントエンドおよびAPI層にNext.jsを採用。認証にはClerkを導入し、データベースとストレージにはSupabaseを活用して、堅牢なバックエンド環境を構築しています。

【実用性とUXの追求】
自身のライダーとしての経験から、ガソリンスタンドで即座に記録が完了するUIを設計。ユーザーは「写真を撮るだけ」で燃費の推移や月間コストを把握できる仕組みを実現しました。`,
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
    shortDescription: "センサーを用いてゴミの量を検知し通知するスマートゴミ箱を、ハードウェアから可視化サイトまで一貫して開発しました。",
    longDescription: `京セラコミュニケーションシステム株式会社様との共同プロジェクトとして、IoT技術を活用したスマートゴミ箱のプロトタイプを開発しました。「ゴミの回収業務の効率化」という社会課題に対し、ハードウェアからソフトウェアまでを一貫して実装しています。

【エッジデバイスの開発】
Arduinoと超音波センサーを組み合わせ、ゴミ箱内の堆積量を定期的に計測するデバイスを構築しました。通信にはLPWA（低消費電力広域ネットワーク）の一種であるSigfoxを採用し、省電力かつ広範囲なデータ送信を実現しています。

【バックエンドとデータ可視化】
送信されたデータを受け取るバックエンド環境は、Python (Flask) を用いて構築しました。取得したセンサーデータをデータベースに保存し、管理者がWebブラウザ上からリアルタイムにゴミの蓄積状況を把握できるダッシュボード画面を開発しています。

【企業との協業経験】
企業とのミーティングを通じて要件をすり合わせ、実際のビジネス課題を技術で解決するプロセスを経験。技術力だけでなく、チーム開発やプロジェクトマネジメントの観点でも多くの知見を得ることができました。`,
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
    shortDescription: "個人間での受け渡しに依存していた過去問共有の課題を解決するため、認証・検索・投稿機能を備えたWebアプリケーションを開発しました。",
    longDescription: `大学内で非効率に行われていた過去問共有をデジタル化し、情報へのアクセシビリティを向上させるためのプラットフォームを開発しました。個人間でのデータの受け渡しに依存していた属人的な情報共有の課題を解決しています。

【モダンなフロントエンド設計】
フロントエンドにはNext.jsとTypeScriptを採用し、型安全で保守性の高いコードベースを構築しました。Tailwind CSSによるレスポンシブデザインを適用し、学生がスマートフォンからでも手軽に過去問を閲覧・投稿できる快適なUIを実現しています。

【BaaSを活用したバックエンド】
Supabaseをバックエンドに採用し、PostgreSQLによるデータベース管理、ユーザー認証、ファイルのアップロード機能を実装しました。サーバーレスなアーキテクチャを活用することで、インフラ管理のコストを抑えつつセキュアなデータ管理を行っています。

【学生目線での機能実装】
学部や学科ごとにタグ付けして目的の過去問を素早く見つけられる検索機能や、利用者の権限に応じた安全なファイル投稿機能を実装。実際の利用シーンを想定し、直感的で使いやすいユーザー体験（UX）を追求しました。`,
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
    shortDescription: "Pythonを用いてテキスト読み上げBotをゼロから開発。Dockerでコンテナ化し、自身の自宅サーバー環境で24時間安定稼働させています。",
    longDescription: `サークル内のボイスチャットにおけるコミュニケーションを円滑にするため、テキストチャットを指定した音声で自動的に読み上げるBotをPython (discord.py) で開発しました。

【外部API連携と非同期処理】
各種TTS (Text-to-Speech) APIと連携するプログラムを記述し、ボイスチャット上で遅延のない自然な読み上げを実現するために、非同期処理を用いたルーティングを実装しています。

【ユーザー体験を意識した機能実装】
辞書登録機能や、ユーザーごとの声色・速度のカスタマイズなど、実際のコミュニティでの利用を想定した機能拡張を行い、利便性を大きく向上させました。

【Dockerを用いたデプロイと運用】
ローカルスクリプトでの実行にとどまらず、Docker Composeを用いて実行環境をコンテナ化しました。自身の自宅Linuxサーバーへデプロイし、安定してサービスを提供し続ける運用サイクルを実践しています。`,
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
    title: "Raspberry Piを用いたスマートリモコンの開発",
    slug: "smart-remote-control-for-raspberry-pi",
    shortDescription: "Raspberry Piを用いて、外部ネットワークやSNSから家電を操作できるスマートリモコンを自作しました。",
    longDescription: `Raspberry Pi Zero WHを用いて、赤外線信号を送受信し、家庭内の家電を外部から操作できる自作のスマートリモコンシステムを構築しました。市販のスマートリモコンに頼らず、低レイヤーのハードウェア制御から実装を行っています。

【ハードウェアの制御と赤外線通信】
赤外線LEDと受信モジュールをRaspberry PiのGPIOピンに接続し、Pythonスクリプト（irrp.pyなど）を用いて家電のリモコン信号の学習と送信を実装しました。これにより、古い家電であってもプログラムからの制御が可能となりました。

【外部サービスとの連携パイプライン】
スマートスピーカー（Google Home / Amazon Echo）やSlackからの入力をトリガーとするため、IFTTTやHubot（Node-RED）を活用したAPI連携パイプラインを構築しました。音声コマンドやチャット経由でWebhookを発行し、ローカルのRaspberry Piに命令を伝達する仕組みです。

【生活を効率化するIoTの実践】
これらの技術を組み合わせることで、「外出先からエアコンをつける」「声で部屋の照明を消す」といったシームレスな家電操作を実現。自らの手で生活を自動化・効率化するIoTシステムの構築サイクルを実践しました。`,
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
    title: "テックメディア「Gadelog」の運営",
    slug: "gadelog-tech-media",
    shortDescription: "自身の技術的な知見やガジェットの魅力を発信するテックブログ「Gadelog」を立ち上げ、継続的に運用しています。",
    longDescription: `技術的な知見やガジェットの魅力を外部に向けて分かりやすく発信するアウトプットの場として、個人のテックメディア「Gadelog」を立ち上げ、継続的に運営しています。インプットした知識を言語化し、読者に価値を提供する活動を重視しています。

【インフラ環境の構築と保守】
Linuxサーバー（VPS）上にWebサーバーやMySQLデータベースを構築し、WordPressを用いたメディアサイトを立ち上げました。SSL化やセキュリティ対策、定期的なバックアップなど、Webサイトの安定稼働に必要なインフラ保守を個人で実施しています。

【フロントエンドのカスタマイズ】
既存のテーマに頼るだけでなく、HTML/CSSやJavaScript、PHPを用いてサイトのデザインや機能を独自の要件に合わせてカスタマイズしています。ページの表示速度改善やSEO対策など、メディアとしてのパフォーマンス最適化も行っています。

【コンテンツの継続的な発信】
技術的なチュートリアルやガジェットのレビュー記事など、月に複数本のコンテンツを企画・執筆しています。複雑な技術概念を図解や丁寧な文章で解説し、読者にとって分かりやすい情報発信を心がけています。`,
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
    shortDescription: "SDRを用いて航空機情報 (ADS-B) の受信システムを構築し、共有サイトへのデータ連携を安定運用しています。",
    longDescription: `SDR（ソフトウェア定義無線）チューナーとアンテナを組み合わせ、上空を飛行する航空機から発信されるADS-B信号（位置情報等のデータ）を直接受信・解読するシステムを構築しました。

【無線信号のデジタルデータ化】
Raspberry Piに接続したSDRデバイスを通じ、受信した電波を既存のデコードプログラム（dump1090など）を用いてリアルタイムにデジタルデータへ変換しています。無線通信技術とソフトウェア処理を組み合わせたデータ取得を実践しました。

【フライトトラッキングサイトへの連携】
デコードした航空機の位置データや高度・速度などの情報を、Flightradar24などの世界的なフライトトラッキング共有サイトに対してAPI経由で継続的にフィード（提供）しています。世界規模のオープンなデータ共有ネットワークに貢献する仕組みを構築しました。

【過酷な環境でのインフラ運用】
屋外や窓際での運用が必須となるため、Raspberry Piという限られたリソース・電源環境下において、専用ケースの加工やヒートシンクによる熱対策を実施。24時間365日の連続稼働に耐えうるLinuxシステムの安定運用ノウハウを蓄積しています。`,
    technologies: [
      "Raspberry Pi",
      "SDR (ソフトウェア定義無線)",
      "Linux"
    ],
    imageUrl: "/images/raspberrypi.jpg",
    projectUrl: "https://gadelog.com/%e3%80%902024%e3%80%91ubuntu%e3%81%a7flightradar24%e3%81%ab%e3%83%95%e3%82%a3%e3%83%bc%e3%83%89%e3%81%99%e3%82%8b%e6%96%b9%e6%b3%95%ef%bc%88rtl-sdr%e4%bd%bf%e7%94%a8%ef%bc%89/"
  },
  {
    title: "スクールバス運行最適化提案",
    slug: "school-bus-timetable-optimization-proposal",
    shortDescription: "過去の運行データと乗降データを分析し、機械学習を用いて効率的なスクールバスの最適化ダイヤを提案しました。",
    longDescription: `高校のスクールバスにおいて、「特定の便に利用者が集中して混雑する」「逆に空席の目立つ便がある」という非効率な運行ダイヤの課題に対し、データ分析と機械学習を用いたアプローチで解決策を提案しました。

【データの前処理と可視化】
過去の膨大な乗降データや時間割、天候などの変動要因となるデータを収集し、PandasやNumPyを用いて欠損値の補完や正規化といったデータクレンジング（前処理）を実施しました。また、Matplotlibを利用して現状の混雑傾向を視覚化し、課題の所在を明確にしています。

【機械学習による需要予測】
Scikit-learnを用いて、重回帰分析などの機械学習アルゴリズムを適用。時間帯や曜日、天候などの各種パラメータから、各便の乗車人数（需要）を高精度に予測するモデルを構築しました。予測結果と実際のデータを比較し、モデルの精度検証も行っています。

【データドリブンな意思決定の支援】
構築した予測モデルに基づき、需要に対して適切な車両の割り当てや、混雑を平準化するための新たな運行ダイヤを策定。勘や経験に頼らない、データに基づいた論理的で効率的な意思決定（データドリブン）のプロセスを実践しました。`,
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "NumPy",
      "Matplotlib"
    ],
    imageUrl: "https://placehold.co/1200x800/png?text=School+Bus+Optimization",
  },
];

export default projects;