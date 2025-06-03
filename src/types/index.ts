// src/types/index.ts

// Project interface (前回定義したもの)
export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription?: string; // オプショナルなプロパティ
  imageUrl: string;
  technologies: string[];
  projectUrl?: string;
  repositoryUrl?: string;
}

// Profile 内で使われる型 (必要に応じて定義)
export interface CTAButton {
  text: string;
  href: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}


// Profile interface (新規追加)
export interface Profile {
  name: string;
  title: string;
  bio: string;
  heroSubtitle?: string;       // ? はオプショナル（任意）なプロパティ
  heroCTA?: CTAButton;
  profileImageUrl?: string;
  skills?: SkillGroup[];       // スキル情報も Profile に含める場合
  // 他にもプロフィール関連のデータがあればここに追加
}

// 他の共通の型定義があればここに追加