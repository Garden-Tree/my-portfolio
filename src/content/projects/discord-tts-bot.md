---
order: 7
title: "Discord向けテキスト読み上げ(TTS) Botの開発・運用"
slug: "discord-tts-bot"
shortDescription: "PythonとTTS APIを組み合わせた読み上げBot。Docker化による安定した実行環境を構築し、24時間運用しています。"
technologies: ["Python", "discord.py", "GCP (TTS API)", "VOICEVOX", "Docker", "Linux"]
imageUrl: "/images/yomi-KAI.webp"
imageMaxWidth: 473
repositoryUrl: "https://github.com/Garden-Tree/yomi-KAI"
status: "運用中"
period: "2021年8月〜"
team: "個人開発"
---

## 概要
Discordのボイスチャット上で、テキストチャットを自動的に音声で読み上げるBotです。マイクを使えない環境のユーザーとボイスチャット参加者の円滑なコミュニケーションを技術で支援します。

## 背景と課題
ゲームコミュニティや勉強会において、「聞き専（マイクを使わずにテキストで参加する）」ユーザーが疎外感を感じたり、会話のテンポが遅れたりする課題がありました。これを解消し、誰もがリアルタイムに参加できるアクセシブルなチャット環境を作るために開発しました。

## 技術スタックとアーキテクチャ
非同期処理をベースとしたPythonアプリケーションとして構築し、自宅サーバー上で稼働させています。

- 言語: Python
- ライブラリ: discord.py
- 音声合成エンジン: Google Cloud Text-to-Speech API / VOICEVOX
- プラットフォーム: Docker (on Proxmox/Ubuntu)

## 主な特徴と技術的な工夫
- ユーザーごとに声の種類や速度、ピッチを自由に変更できる機能を実装しました。
- 特殊な読み方やネットスラングを正しく読み上げるための辞書登録機能を備え、精度の高いコミュニケーションを可能にしました。
- Pythonの `asyncio` をフル活用した非同期処理により、複数ユーザーの同時発言時でも音声合成と再生の遅延を抑える並列処理を実装しました。

## 成果と今後の展望
自分のサーバーで24時間稼働中であり、コミュニティの日常的なインフラとして利用されています。今後は、VOICEVOXなどのローカルエンジンへの完全移行によるランニングコストの削減や、AIによる感情表現の付加を検討しています。
