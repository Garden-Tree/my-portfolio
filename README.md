# GardenTree Portfolio

GardenTreeの個人ポートフォリオサイトです。
これまでに手がけたハードウェアからクラウドまでの幅広いプロジェクトや、個人のスキル・経歴を紹介しています。

## 🚀 Getting Started

このプロジェクトは Node.js (v20以上推奨) と npm を使用しています。

### セットアップと起動

1. 依存関係のインストール
   ```bash
   npm install
   ```

2. 開発サーバーの起動
   ```bash
   npm run dev
   ```

3. ブラウザで [http://localhost:3000](http://localhost:3000) を開き、サイトを確認します。

## 📂 ディレクトリ構成

- `src/app/`: Next.js App Routerに基づく各ページ・ルート要素。
- `src/components/`: 再利用可能なUIコンポーネント群（`HeroSection` 等）。
- `src/data/`: ポートフォリオ用のコンテンツデータ (JSON形式)。静的データはここで一元管理され、コンポーネントに流し込まれます。
- `src/types/`: TypeScriptの型定義ファイル。
- `docs/`: 開発・運用向けのドキュメント。

## 📖 開発者向けドキュメント

このプロジェクトで使用されている技術スタックや選定理由については、[docs/tech-stack.md](./docs/tech-stack.md) をご覧ください。

## 🌐 デプロイとホスティング

このサイトは [Vercel](https://vercel.com/) を利用してホスティング可能に最適化されています。
`npm run build` はエラーゼロで成功するよう設定されており、GitHubリポジトリのメインブランチに変更をプッシュするだけで、Vercel側で自動的にビルドとデプロイが行われます。
