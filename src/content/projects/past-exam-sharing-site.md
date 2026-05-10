---
order: 5
title: "大学内過去問共有プラットフォームの構築"
slug: "past-exam-sharing-site"
shortDescription: "個人間での受け渡しに依存していた過去問共有の課題を解決するため、認証・検索・投稿機能を備えたWebアプリケーションを開発しました。"
technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"]
imageUrl: "/images/kakomon.png"
projectUrl: "https://chodai-kakomon-hub.vercel.app"
repositoryUrl: "https://github.com/Garden-Tree/chodai-kakomon-hub"
---

大学内で非効率に行われていた過去問共有をデジタル化し、情報へのアクセシビリティを向上させるためのプラットフォームを開発しました。個人間でのデータの受け渡しに依存していた属人的な情報共有の課題を解決しています。

### モダンなフロントエンド設計

フロントエンドにはNext.jsとTypeScriptを採用し、型安全で保守性の高いコードベースを構築しました。Tailwind CSSによるレスポンシブデザインを適用し、学生がスマートフォンからでも手軽に過去問を閲覧・投稿できる快適なUIを実現しています。

### BaaSを活用したバックエンド

Supabaseをバックエンドに採用し、PostgreSQLによるデータベース管理、ユーザー認証、ファイルのアップロード機能を実装しました。サーバーレスなアーキテクチャを活用することで、インフラ管理のコストを抑えつつセキュアなデータ管理を行っています。

### 学生目線での機能実装

学部や学科ごとにタグ付けして目的の過去問を素早く見つけられる検索機能や、利用者の権限に応じた安全なファイル投稿機能を実装。実際の利用シーンを想定し、直感的で使いやすいユーザー体験（UX）を追求しました。
