import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'CalorieData - Nutrition Facts for 300,000+ Foods'
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
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              background: 'white',
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 48,
              fontWeight: 'bold',
              color: '#059669',
              marginRight: 20,
            }}
          >
            C
          </div>
          <span
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            CalorieData
          </span>
        </div>
        <div
          style={{
            fontSize: 32,
            color: 'rgba(255, 255, 255, 0.9)',
            textAlign: 'center',
            maxWidth: 800,
          }}
        >
          Nutrition Facts for 300,000+ Foods
        </div>
        <div
          style={{
            fontSize: 24,
            color: 'rgba(255, 255, 255, 0.7)',
            marginTop: 20,
          }}
        >
          Free Calorie Counts &bull; Compare Foods &bull; USDA Data
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
