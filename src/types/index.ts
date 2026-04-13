// src/types/index.ts

// Project interface
export interface Project {
  slug: string; // IDとしても使用
  title: string;
  shortDescription: string;
  longDescription?: string; // オプショナルなプロパティ
  imageUrl: string;
  technologies: string[];
  projectUrl?: string;
  repositoryUrl?: string;
}

// Profile 内で使われる型
export interface CTAButton {
  text: string;
  href: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}


// プロフィール関連のデータ
export interface Profile {
  name: string;
  title: string;
  bio: string;
  heroSubtitle?: string;
  heroCTA?: CTAButton;
  profileImageUrl?: string;
  skills?: SkillGroup[];
  certifications?: string[];
}

// タイムラインイベント型
export interface TimelineEvent {
  year: number;
  title: string;
  description?: string;
}

// アクティビティ（リーダーシップ等）型
export interface Activity {
  title: string;
  role: string;
  description: string;
  imageUrl: string;
}