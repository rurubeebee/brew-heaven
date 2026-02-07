import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Background Image */}
      <Image
        src="/images/hero/hero-coffee-shop.jpg"
        alt="Brew Haven Interior"
        fill
        className="hero-image"
        priority
      />
      
      {/* Decorative Gradient Overlay */}
      <div className="hero-overlay" />
      
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-est">Est. 2020 • Brooklyn</span>
          
          <h1 className="hero-title">
            Morning <br /> 
            <span>Refined.</span>
          </h1>
          
          <p className="hero-desc">
            Small-batch roasts delivered from farm to cup. 
            Experience the ritual of Brew Haven.
          </p>

          <Link href="/menu" className="hero-btn">
            <span>The Collection</span>
          </Link>
        </div>
      </div>
    </section>
  )
}