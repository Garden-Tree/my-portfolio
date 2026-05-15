---
order: 2
title: "Proxmoxを用いた高可用自宅サーバー基盤の構築・運用"
slug: "home-lab-server"
shortDescription: "物理サーバー上に仮想化環境（Proxmox/Docker）を構築。Tailscale VPNを活用し、安全でスケーラブルな個人インフラを24時間運用しています。"
technologies: ["Proxmox VE", "Docker", "Ubuntu Server", "Tailscale"]
imageUrl: "/images/proxmox.png"
repositoryUrl: "https://github.com/Garden-Tree/home-lab-server"
---

## 概要
自作PCをベースに、ハイパーバイザー（Proxmox VE）とコンテナ技術を組み合わせた「個人専用のクラウド基盤」です。開発環境の即時デプロイからVPN経由の安全な外部アクセスまでを統合し、インフラの低レイヤーから実地で運用しています。

## 背景と課題
クラウドサービス（AWS/GCP等）は便利ですが、リソースを贅沢に使うとコストがかさみます。また、インフラエンジニアとして、OSのカーネルや仮想ネットワークの挙動をブラックボックス化せず、物理レイヤーから制御・理解したいという知的好奇心が開発の動機です。

## 技術スタックとアーキテクチャ
ハードウェアリソースを論理的に分割し、ゲームサーバーからBot、ネットワーク基盤までを並列稼働させています。

- **ハイパーバイザー**: Proxmox VE (Debian base)
- **仮想化技術**: LXC (Linux Containers) / Docker
- **ネットワーク**: Tailscale (Mesh VPN)
- **主な稼働サービス**: Minecraft サーバー / Discord Bot / VPN基盤

## 主な特徴と技術的な工夫
- **多目的サーバー運用**: 友人用のMinecraftサーバーから自作のDiscord Botまで、必要なサービスを24時間低コストで提供。
- **開発環境のサンドボックス化**: VMやコンテナを即座に作成・破棄できるため、メイン環境を汚さずに新しい技術の実験が可能。
- **ゼロトラストな外部アクセス**: Tailscale（Mesh VPN）を採用し、外部からSSHや管理画面へ安全にアクセスできるセキュアなリモート環境を構築。

## 成果と今後の展望
構築以来、**24時間365日の安定稼働**を継続しています。現在は、ハードウェアの故障に備えた自動バックアップ体制の強化や、IaC（Terraform/Ansible）を用いた構成管理の自動化を計画しています。
