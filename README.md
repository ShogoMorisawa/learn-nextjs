# 🏔️ The Wild Oasis

> _イタリア・ドロミーティの心臓部に位置する、贅沢で居心地の良いキャビンを予約できる Web アプリ_

このアプリは、**Udemy の Next.js 講座で学びながら構築した練習プロジェクト**です。  
学習内容を自分の手で再現・拡張することを通じて、Next.js 14 の App Router 構成や Supabase との連携、認証処理、予約フローの設計を実践的に習得しました。

---

## ⚠️ 現在のステータス / Current Status

**Google OAuthの認証機能は、現在Googleによる公式な審査を受けている最中です。（2025年6月）**

---

## 🔧 主な機能 / Main Features

- ✅ **キャビン閲覧・検索**
  - 美しい画像と詳細情報を表示
  - 定員数によるフィルター機能
- ✅ **予約システム**
  - カレンダーで直感的な日付選択
  - リアルタイムの価格計算（割引対応）
  - 既存予約との重複チェック
- ✅ **ユーザー管理**
  - Google アカウントでログイン
  - 自分の予約履歴の確認・削除
- ✅ **レスポンシブデザイン**
  - PC・タブレット・スマホ対応
  - モダンで快適な UI/UX

---

## 🧠 技術構成 / Tech Stack

| Layer          | Tech                                 |
| -------------- | ------------------------------------ |
| Frontend       | Next.js 14 / React 18 / Tailwind CSS |
| Backend        | Next.js API Routes / Supabase        |
| Database       | PostgreSQL (via Supabase)            |
| Authentication | NextAuth.js + Google OAuth           |
| Deployment     | Vercel                               |

---

## ☁️ クラウド構成 / Cloud Setup

| 要素           | 使用サービス           | 特徴                                     |
| -------------- | ---------------------- | ---------------------------------------- |
| フロントエンド | **Vercel**             | 高速デプロイ・CDN 配信・Next.js との統合 |
| バックエンド   | **Next.js API Routes** | 軽量で拡張性のあるサーバーレス構成       |
| データベース   | **Supabase**           | RLS やリアルタイム対応の PostgreSQL      |
| 認証           | **NextAuth.js**        | 安心かつ手軽な Google ログイン           |

---

## 📁 プロジェクト構造 / Project Structure

```
learn-nextjs/
├── app/                    # Next.js 14 App Router
│   ├── _components/        # 再利用可能なコンポーネント
│   ├── _lib/              # ユーティリティ・設定ファイル
│   ├── _styles/           # グローバルスタイル
│   ├── account/           # ユーザーアカウント関連
│   ├── api/               # API Routes
│   ├── cabins/            # キャビン関連ページ
│   └── login/             # ログインページ
├── public/                # 静的ファイル
└── middleware.js          # Next.js ミドルウェア
```

---

## 🧪 学習ポイント / What I Learned

- Next.js 14 の App Router 構成（`app/` ディレクトリ）
- サーバーアクションとフォームベースの認証処理
- Supabase の Row-Level Security（RLS）設定とその動作
- 認証ユーザーを Supabase のゲストデータと結びつける設計
- サインイン・サインアウトとセッションの扱い
- 実務に近い予約システムの UX 設計

---

## 🙋‍♂️ 開発者

**森澤 翔吾 / Shogo Morisawa**  
立命館アジア太平洋大学 / Web エンジニア志望

- TOEIC 795 点 / 簿記 3 級 / AtCoder 緑
- Udemy で学びつつ、Next.js や Supabase を使ったアプリ開発に取り組んでいます
- 将来は「技術を通して人に優しく、楽しくできるサービス」を作るエンジニアを目指しています

---

> ご覧いただきありがとうございます。  
> このプロジェクトはあくまで**学習の一環**ですが、「技術を動かしてみる楽しさ」を実感できたアプリです。  
> 今後もこれを土台に、さらに自分のアイデアを形にしていきたいと思っています。

---
