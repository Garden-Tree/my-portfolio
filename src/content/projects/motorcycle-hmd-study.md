---
order: 1
title: "二輪車用HMDにおける表示情報と表示位置の検討（卒業研究）"
slug: "motorcycle-hmd-study"
shortDescription: "外部シミュレータと連動するHMD用UIシステムをWeb技術とPythonで構築し、運転時の反応時間を定量評価しました。学会にて学生奨励賞を受賞しています。"
technologies: ["Python", "JavaScript", "HTML/CSS", "WebSocket", "VR/AR"]
imageUrl: "/images/hmd.png"
repositoryUrl: "https://github.com/Garden-Tree/research"
---

ライダーの安全性を高める次世代モビリティのUI/UX研究です。「運転時にどの情報を、どこに表示すべきか」という課題に対し、人間工学的なアプローチで検証を行いました。

### 独自の実験環境の構築

既存のドライビングシミュレータ（Assetto Corsa）を活用し、そこから得られる走行データをPythonで抽出。WebSocket通信を経由して、HMD（XREAL Air 2 Ultra）上にリアルタイムで情報を提示する独自の連携システムを構築しました。
HMD側のUI描画には、あえてHTML/CSS/JSのWeb標準技術を採用しています。これにより、検証時の柔軟なUI調整と、将来的な別デバイスへの移植性を担保する設計としました。

### 定量的なUX評価と分析

構築した環境を用いて被験者実験を実施。標識や矢印などの情報を様々な位置に表示し、ドライバーの認知負荷や反応時間を定量的に測定することで、安全性と利便性を両立する最適な表示位置を検証しました。

複数の技術要素を統合した検証環境の構築からデータ分析までを一貫して行い、情報処理学会全国大会にて学生奨励賞を受賞しています。
