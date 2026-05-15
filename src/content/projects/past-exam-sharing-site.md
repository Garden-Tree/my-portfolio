---
order: 5
title: "大学内過去問共有プラットフォームの構築"
slug: "past-exam-sharing-site"
shortDescription: "大学内の過去問データをデジタル化・集約し、認証・検索・投稿機能を備えた快適な情報共有基盤を開発しました。"
technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Vercel"]
imageUrl: "/images/kakomon.png"
projectUrl: "https://chodai-kakomon-hub.vercel.app"
repositoryUrl: "https://github.com/Garden-Tree/chodai-kakomon-hub"
---

## 概要
学内で属人的に管理されていた試験の過去問を、クラウド上で一元管理・共有できるプラットフォームです。セキュアな認証と高度な検索機能により、必要な情報を必要なときに素早く見つけられる環境を提供します。

## 背景と課題
大学の試験対策において過去問は重要ですが、「先輩との繋がりの有無で情報格差が生まれる」「個人間での手渡しが非効率」という課題がありました。この情報の非対称性を解消し、全学生が公平かつ効率的に学習に専念できる仕組みを作りたいと考え開発しました。

## 技術スタックとアーキテクチャ
Next.jsによるモダンなフロントエンドと、Supabaseによる強力なBaaSを組み合わせた、保守性の高い構成です。

- **フロントエンド**: Next.js (App Router), TypeScript
- **データベース/認証**: Supabase (PostgreSQL)
- **ストレージ**: Supabase Storage (PDF/画像保存)
- **デプロイ**: Vercel

## 主な特徴と技術的な工夫
- **高速な絞り込み検索**: 学部・学科・科目名などのタグを用いたフィルタリングにより、数千件のデータから目的のファイルを数秒で発見可能。
- **モバイルファースト設計**: スマホでの閲覧を主眼に置き、試験直前でも使いやすいレスポンシブUIと操作性を追求。
- **RLSによる厳格なデータ管理**: SupabaseのRow Level Security (RLS) を活用し、ユーザー権限に基づいたDBレベルでのアクセス制御により安全なデータ共有を実現。

## 成果と今後の展望
Vercel上で安定稼働しており、継続的にデータの蓄積が行われています。今後は、ファイルアップロード時の自動OCR機能や、学外への露出を防ぐための大学ドメイン認証の強化を検討しています。
