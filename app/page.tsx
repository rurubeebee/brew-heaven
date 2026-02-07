'use client'

import Hero from './components/Hero'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const signatures = ['espresso', 'latte', 'cappuccino', 'mocha']
  const gallery = [1, 2, 3, 4]

  return (
    <main className="home-page">

      {/* Hero Section */}
      <Hero />

      {/* Info Strip */}
      <div className="info-strip">
        <div className="info-container">
          <span>Ethically Sourced</span>
          <span>Roasted in Brooklyn</span>
          <span>Open Daily 7am — 8pm</span>
        </div>
      </div>

      {/* Featured Signatures */}
      <section className="featured-signatures">
        <div className="section-header">
          <h2>Signatures</h2>
          <Link href="/menu" className="view-menu">View Full Menu</Link>
        </div>
        <div className="signature-grid">
          {signatures.map((item) => (
            <div key={item} className="signature-card">
              <div className="image-wrapper">
                <Image
                  src={`/images/menu/${item}.jpg`}
                  alt={item}
                  fill
                  className="signature-image"
                />
              </div>
              <h3>{item}</h3>
              <p>House Specialty</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Teaser */}
      <section className="gallery-teaser">
        <h2 className="section-title">Atmosphere</h2>
        <p className="section-subtitle">A glimpse into our coffee sanctuary</p>
        <div className="gallery-grid">
          {gallery.map((num) => (
           <div key={num} className="gallery-card">
  <div className="gallery-card-wrapper">
    <Image
      src={`/images/gallery/gallery-${num}.jpg`}
      alt={`Gallery ${num}`}
      fill
      className="gallery-image"
      priority
    />
  </div>
</div>

          ))}
        </div>
      </section>

      {/* Team Teaser */}
      

    </main>
  )
}
