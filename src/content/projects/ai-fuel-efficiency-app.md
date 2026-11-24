---
order: 4
title: "生成AIを活用した燃費管理自動化Webアプリケーション"
slug: "ai-fuel-efficiency-app"
shortDescription: "Gemini APIのマルチモーダル解析を活用し、給油レシートやメーター画像から自動で燃費を記録・可視化するフルスタックWebアプリです。"
technologies: ["Next.js", "TypeScript", "Supabase", "Clerk", "Gemini API", "Tailwind CSS"]
imageUrl: "/images/fuellens.png"
imageFit: contain
projectUrl: "https://fuel-lens.gadelog.com"
repositoryUrl: "https://github.com/Garden-Tree/fuel-lens"
status: "公開中"
period: "2026年2月〜"
team: "個人開発"
---

## 概要
給油レシートやODOメーターの画像をAI（Gemini API）で解析し、燃費の計算と記録を手入力なしで行えるWebアプリケーションです。ライダーやドライバーがガソリンスタンドで感じる「記録の手間」を、画像のアップロードで減らします。

## 背景と課題
自分が二輪車に乗るうえで、燃費管理は車両のコンディション把握に不可欠ですが、給油のたびに「走行距離」「給油量」「金額」をメモしたりアプリへ手入力したりするのは非常に面倒な作業でした。この記録をAI技術で自動化し、データ活用をより身近にすることを目的に開発しました。

## 技術スタックとアーキテクチャ
フロントエンドからAPI層までNext.jsで構築し、認証やDBにはBaaSを活用して開発スピードと信頼性を両立しています。

- フロントエンド/バックエンド: Next.js (App Router), TypeScript
- データベース/ストレージ: Supabase (PostgreSQL)
- 認証: Clerk
- AI: Gemini 3.5 Flash-Lite API
- スタイリング: Tailwind CSS

## 主な特徴と技術的な工夫
- 写真を「撮るだけ」で使えるUXにしました。アップロードした写真から給油量・金額・走行距離を読み取り、確認シートで内容を確かめて保存できます。
- 記録されたデータに基づき、燃費の推移や月間のガソリン代をダッシュボードのグラフで即座に把握できます。
- 解析精度を最適化するため、Gemini APIのマルチモーダル解析を活用し、多様なレシート形式や不鮮明なメーター画像から「走行距離」「給油量」などの構造化データを抽出するロジックを実装しました。

## 成果と今後の展望
現在、自分自身の給油記録ツールとして実際に運用しており、Vercel上で公開中です。複数車両の管理、部分給油の記録、CSVの書き出しなどの機能も追加しました。今後は、ガソリン単価の地域傾向を分析する機能の追加を検討しています。
