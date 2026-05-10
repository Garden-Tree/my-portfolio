---
order: 7
title: "Raspberry Piを用いたスマートリモコンの開発"
slug: "smart-remote-control-for-raspberry-pi"
shortDescription: "Raspberry Piを用いて、外部ネットワークやSNSから家電を操作できるスマートリモコンを自作しました。"
technologies: ["Raspberry Pi", "Python", "NODE-RED", "hubot", "IFTTT", "irrp.py"]
imageUrl: "/images/smartrimocon.jpg"
---

Raspberry Pi Zero WHを用いて、赤外線信号を送受信し、家庭内の家電を外部から操作できる自作のスマートリモコンシステムを構築しました。市販のスマートリモコンに頼らず、低レイヤーのハードウェア制御から実装を行っています。

### ハードウェアの制御と赤外線通信

赤外線LEDと受信モジュールをRaspberry PiのGPIOピンに接続し、Pythonスクリプト（irrp.pyなど）を用いて家電のリモコン信号の学習と送信を実装しました。これにより、古い家電であってもプログラムからの制御が可能となりました。

### 外部サービスとの連携パイプライン

スマートスピーカー（Google Home / Amazon Echo）やSlackからの入力をトリガーとするため、IFTTTやHubot（Node-RED）を活用したAPI連携パイプラインを構築しました。音声コマンドやチャット経由でWebhookを発行し、ローカルのRaspberry Piに命令を伝達する仕組みです。

### 生活を効率化するIoTの実践

これらの技術を組み合わせることで、「外出先からエアコンをつける」「声で部屋の照明を消す」といったシームレスな家電操作を実現。自らの手で生活を自動化・効率化するIoTシステムの構築サイクルを実践しました。
