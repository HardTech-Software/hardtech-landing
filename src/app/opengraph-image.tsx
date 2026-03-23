import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'HardTech - Desarrollo de Apps y Sitios Web'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ 
          fontSize: 80, 
          fontWeight: 'bold',
          color: 'white',
          marginBottom: 20,
        }}>
          HardTech
        </div>
        <div style={{ 
          fontSize: 40,
          color: '#E91E63',
          marginBottom: 30,
        }}>
          Apps y sitios web con impacto real
        </div>
        <div style={{ 
          fontSize: 30,
          color: '#ffffff',
          opacity: 0.9,
          textAlign: 'center',
          maxWidth: '80%',
        }}>
          Desarrollo sólido y diseño atractivo
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
