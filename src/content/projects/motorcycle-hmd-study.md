---
order: 1
title: "二輪車用HMDにおける表示情報と表示位置の検討（卒業研究）"
slug: "motorcycle-hmd-study"
shortDescription: "実機HMDとドライビングシミュレータを連動させ、ライダーの安全性を向上させる最適なUI/UXを定量評価した人間工学研究です。"
technologies: ["Python", "HTML", "CSS", "JavaScript", "WebSocket", "HMD (XREAL)", "Assetto Corsa"]
imageUrl: "/images/hmd.jpg"
status: "研究"
diagram:
  caption: "実験システムの構成"
  steps:
    - title: "シミュレータ"
      items:
        - "Assetto Corsa"
    - title: "実験バックエンド"
      via: "走行データ"
      items:
        - "Python"
        - "走行データを配信"
    - title: "HMD"
      via: "WebSocket"
      items:
        - "XREAL Air 2 Ultra"
        - "Web UIに情報を表示"
    - title: "測定"
      via: "被験者の反応"
      items:
        - "反応時間をミリ秒単位で記録"
---

## 概要
二輪車の運転中にライダーへ情報を提示するHMD（ヘッドマウントディスプレイ）において、視線移動を最小限にしつつ、認知負荷を抑える「最適な表示位置とコンテンツ」を解明した研究プロジェクトです。

## 背景と課題
次世代モビリティにおいてHMDの活用が期待されていますが、二輪車は四輪車以上に繊細な操作と前方注視が求められます。「不適切な情報提示はかえって事故を誘発する」という課題に対し、人間工学的知見に基づいた定量的なエビデンスが必要でした。

## 技術スタックとアーキテクチャ
シミュレータからの車両データ取得、HMDへの描画、反応速度の測定を統合した実験システムを自作しました。

- シミュレータ: Assetto Corsa
- 実験バックエンド: Python
- HMD UI: HTML/CSS/JavaScript
- HMD: XREAL Air 2 Ultra

{{diagram}}

## 主な特徴と技術的な工夫
- 定量的な評価指標として、被験者実験を通じ、特定の情報（標識、速度等）に対する反応時間をミリ秒単位でログ化しました。
- Web技術（HTML/CSS）の活用により、表示位置やフォントサイズなどの条件変更を即座に行える、UIプロトタイピングの柔軟性を確保しました。
- シミュレータの走行データをPython経由でミリ秒単位で取得し、WebSocketを用いてHMD上のWeb UIへリアルタイム配信する、低遅延なデータ連携基盤を構築しました。

## 成果と今後の展望
本研究の成果を情報処理学会全国大会で発表し、**学生奨励賞**を受賞しました。今後はAR技術を活用し、カーブの曲がり角などの環境情報を実景に重畳させるシステムの構築を目指しています。
