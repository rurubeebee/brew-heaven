'use client'
import Image from 'next/image'

export default function About() {
  return (
    <div className="about-page">
      <div className="max-w-7xl mx-auto px-4">

        {/* Page Header */}
        <h1 className="about-title">About Us</h1>

        {/* Our Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="section-title">Our Story</h2>
            <p className="section-text">
              Founded in 2020, Brew Haven started with a simple mission: to serve the best coffee
              in town. Our passion for quality and community has driven us to source the finest
              beans from sustainable farms around the world.
            </p>
            <p className="section-text">
              Every cup we serve is crafted with care by our expert baristas who have trained
              for years to perfect their craft. We believe coffee is more than just a drink—it's
              an experience that brings people together.
            </p>
            <p className="section-text">
              From our carefully curated menu to our cozy atmosphere, everything we do is designed
              to make your visit memorable. Join us and become part of our coffee-loving family!
            </p>
          </div>

          <div className="story-image relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/about/about-us.jpg"
              alt="Our barista team"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mb-16">
          <h2 className="section-title text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-6">
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Quality</h3>
              <p>We source only the finest, ethically-grown beans and use precision brewing methods</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Community</h3>
              <p>Building connections and creating a welcoming space for all coffee lovers</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>Eco-friendly practices from farm to cup, supporting sustainable coffee farming</p>
            </div>
          </div>
        </div>

        {/* Meet Our Team Section */}
        <div className="team-section bg-amber-50 rounded-lg p-8">
          <h2 className="section-title text-center mb-8">Meet Our Team</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Sarah Johnson', role: 'Head Barista', emoji: '👩‍🍳' },
              { name: 'Mike Chen', role: 'Coffee Roaster', emoji: '👨‍🔧' },
              { name: 'Emma Davis', role: 'Manager', emoji: '👩‍💼' },
              { name: 'Alex Martinez', role: 'Barista', emoji: '👨‍🍳' },
            ].map((member) => (
              <div key={member.name} className="team-card text-center">
                <div className="team-emoji">{member.emoji}</div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
