import { ImageResponse } from 'next/og';

export const alt = "GardenTree's Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// 標準フォントで描画するため、画像内の文字は英語にしている
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#09090b',
          color: '#f4f4f5',
        }}
      >
        <div style={{ fontSize: 120, letterSpacing: -4 }}>GardenTree</div>
        <div style={{ width: 120, height: 8, background: '#fbbf24', margin: '24px 0 32px' }} />
        <div style={{ fontSize: 40, color: '#a1a1aa' }}>Portfolio</div>
      </div>
    ),
    size,
  );
}
