import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'StabilTech - Professional IT Solutions';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #2563eb, #1d4ed8)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <h1 style={{ fontSize: 80, fontWeight: 'bold', margin: 0 }}>
          StabilTech
        </h1>
        <p style={{ fontSize: 40, margin: 20 }}>
          Professional IT Solutions
        </p>
        <p style={{ fontSize: 30, opacity: 0.9 }}>
          Mobile Apps • Websites • ERP Integration
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
