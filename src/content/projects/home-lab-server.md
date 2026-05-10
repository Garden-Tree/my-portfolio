---
order: 2
title: "仮想化基盤を用いた自宅サーバーの構築・運用"
slug: "home-lab-server"
shortDescription: "自作PCに仮想化基盤（Proxmox/Docker）を構築。TailscaleによるVPNアクセス網を整備し、複数のサービスを24時間運用しています。"
technologies: ["Proxmox VE", "Docker / Docker Compose", "Linux (Ubuntu Server)", "Tailscale"]
imageUrl: "/images/proxmox.png"
repositoryUrl: "https://github.com/Garden-Tree/home-lab-server"
---

クラウドサービス（IaaS/PaaS）に依存せず、インフラの低レイヤー（OS・ネットワーク）の挙動を実践的に理解するため、自宅で物理サーバーを構築・運用しています。

### Proxmoxによる仮想化基盤の構築

余っていた自作PCにハイパーバイザー（Proxmox VE）を導入し、用途に合わせて仮想マシン（VM）やコンテナを柔軟にデプロイできる基盤を構築しました。限られたハードウェアリソースを分割・管理し、ホスティング環境を整えています。

### VPN網（Tailscale）の構築

ルーターのポート開放によるセキュリティリスクを避けるため、Tailscale（メッシュVPN）を導入。外部から安全にSSH接続やコンテナ群の監視を行える保守運用ネットワークを構築しました。

### コンテナ技術を活用した実運用

構築した基盤上で、自作アプリケーションやMinecraftサーバーなどをDockerコンテナとして稼働させています。環境のコード化によるデプロイ効率化に加え、24時間稼働に伴う熱対策やリソース監視など、泥臭い運用サイクルを個人で実践しています。
