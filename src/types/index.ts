// 構成図（矢印でつないだ箱の並び）
export interface ProjectDiagram {
  caption: string;
  steps: {
    title: string;
    items: string[];
    via?: string; // 前の箱からこの箱への矢印に添える語
  }[];
}

// Project interface
export interface Project {
  slug: string; // IDとしても使用
  title: string;
  shortDescription: string;
  content?: string; // Markdownの本文
  imageUrl: string;
  status?: string; // 稼働状況（公開中、研究など）
  period?: string; // 期間
  team?: string; // 体制（個人開発など）
  role?: string; // 担当
  diagram?: ProjectDiagram; // 本文の {{diagram}} の位置に表示する
  technologies: string[];
  projectUrl?: string;
  repositoryUrl?: string;
  order?: number; // 表示順（小さいほど先に表示、未指定は末尾）
  imageFit?: 'cover' | 'contain'; // 詳細ページでの画像の収め方（既定はcover）
  imageMaxWidth?: number; // 小さい画像を引き伸ばさないための最大幅(px)
}

// Profile 内で使われる型
export interface SkillGroup {
  category: string;
  items: string[];
}


// プロフィール関連のデータ
export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  profileImageUrl: string;
  skills: SkillGroup[];
  certifications: string[];
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
