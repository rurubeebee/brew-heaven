'use client'
import Image from 'next/image'

export default function Gallery() {
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1>Atmosphere</h1>
        <p>A glimpse into our coffee sanctuary</p>
      </div>

      <div className="gallery-grid">
        {images.map((num) => (
          <div key={num} className="gallery-item">
            <Image
              src={`/images/gallery/gallery-${num}.jpg`}
              alt={`Gallery photo ${num}`}
              fill
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
