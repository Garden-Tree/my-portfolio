---
order: 3
title: "Geminiを活用した燃費管理自動化WEBアプリケーションの開発"
slug: "ai-fuel-efficiency-app"
shortDescription: "Geminiのマルチモーダル機能を活用し、レシートやメーターの画像を読み取って自動で燃費を計算・記録するアプリを個人開発しました。"
technologies: ["Next.js", "TypeScript", "Supabase", "Clerk", "Tailwind CSS", "Gemini API"]
imageUrl: "/images/fuellens.png"
projectUrl: "https://fuel-lens.vercel.app"
repositoryUrl: "https://github.com/Garden-Tree/fuel-lens"
---

二輪車や四輪車の維持管理において、給油データの「手入力の手間」を解消するため、AI技術とモダンなWebスタックを組み合わせたプロダクトを開発しました。

### Gemini APIによるデータ抽出

給油レシートやODOメーターの画像から、Gemini APIを用いて給油量、単価、合計金額、累計走行距離を自動抽出。プロンプトエンジニアリングにより、複雑なレシート形式や夜間のメーター画像からでも必要なデータを高精度に取得する処理を実装しました。

### フルスタック構成による開発

フロントエンドおよびAPI層にNext.jsを採用。認証にはClerkを導入し、データベースとストレージにはSupabaseを活用して、堅牢なバックエンド環境を構築しています。

### 実用性とUXの追求

自身のライダーとしての経験から、ガソリンスタンドで即座に記録が完了するUIを設計。ユーザーは「写真を撮るだけ」で燃費の推移や月間コストを把握できる仕組みを実現しました。
