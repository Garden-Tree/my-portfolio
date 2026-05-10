---
order: 6
title: "Discord向けテキスト読み上げ(TTS) Botの開発・運用"
slug: "discord-tts-bot"
shortDescription: "Pythonを用いてテキスト読み上げBotをゼロから開発。Dockerでコンテナ化し、自身の自宅サーバー環境で24時間安定稼働させています。"
technologies: ["Python", "discord.py", "Google Cloud Text-to-Speech API", "Docker", "Git / GitHub"]
imageUrl: "/images/yomi-KAI.webp"
repositoryUrl: "https://github.com/Garden-Tree/yomi-KAI"
---

サークル内のボイスチャットにおけるコミュニケーションを円滑にするため、テキストチャットを指定した音声で自動的に読み上げるBotをPython (discord.py) で開発しました。

### 外部API連携と非同期処理

各種TTS (Text-to-Speech) APIと連携するプログラムを記述し、ボイスチャット上で遅延のない自然な読み上げを実現するために、非同期処理を用いたルーティングを実装しています。

### ユーザー体験を意識した機能実装

辞書登録機能や、ユーザーごとの声色・速度のカスタマイズなど、実際のコミュニティでの利用を想定した機能拡張を行い、利便性を大きく向上させました。

### Dockerを用いたデプロイと運用

ローカルスクリプトでの実行にとどまらず、Docker Composeを用いて実行環境をコンテナ化しました。自身の自宅Linuxサーバーへデプロイし、安定してサービスを提供し続ける運用サイクルを実践しています。
