---
order: 11
title: "ポートフォリオサイト構築"
slug: "portfolio-site"
shortDescription: "私自身のプロジェクト実績やスキルをまとめたポートフォリオサイトです。Next.jsとTailwind CSSを使用して構築しました。"
technologies: ["Next.js", "TypeScript", "Tailwind CSS", "react-markdown", "Vercel"]
imageUrl: "/images/portfolio.png"
imageFit: contain
projectUrl: "https://gardentree-portfolio.vercel.app/"
repositoryUrl: "https://github.com/Garden-Tree/my-portfolio"
status: "公開中"
period: "2025年5月〜"
team: "個人開発"
---

## 概要
自己紹介と、これまで関わってきた様々なプロジェクトを掲載するポートフォリオサイトです。Markdown形式で記事を管理し、ビルド時にページを生成する静的サイトとして実装しています。

## 背景と課題
これまで開発してきたプロダクトや得られた知見を、一元的に管理・発信できる場所が必要でした。既存のブログサービスなどを利用するのではなく、自分自身でフロントエンド技術をキャッチアップしながら、高いパフォーマンスとカスタマイズ性を持つサイトをゼロから構築することを目指しました。

## 技術スタックとアーキテクチャ
最新のNext.js (App Router) を基盤とし、静的コンテンツの配信に最適化された構成を採用しています。

- フレームワーク: Next.js 16 (App Router), React 19
- 言語: TypeScript
- スタイリング: Tailwind CSS 4, @tailwindcss/typography
- コンテンツ管理: Markdown (gray-matter, react-markdown)
- ホスティング: Vercel

## 主な特徴と技術的な工夫
- `gray-matter`と`react-markdown`を利用し、プロジェクトの追加や編集をMarkdownファイルだけで完結できる、保守性の高いデータ構造を実現しました。
- モダンなUIを実装するため、Tailwind CSS 4によるユーティリティファーストなスタイリングで、レスポンシブかつクリーンなデザインを構築しました。
- Next.jsのApp Routerを活用し、サーバーサイドでのレンダリングによる高速なページロードとSEO対策を両立しました。
- タイポグラフィを最適化するため、`@tailwindcss/typography`プラグインを導入し、Markdownから変換されたHTMLに対しても自動的に美しいスタイルを適用しています。

## 成果と今後の展望
シンプルでありながらも拡張性の高いポートフォリオサイトを公開することができました。今後は、各プロジェクトにおける技術的な詳細記事の追加や、アニメーションの強化など、さらなる機能拡充とUX向上を図っていく予定です。
