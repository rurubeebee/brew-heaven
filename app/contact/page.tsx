'use client'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill all fields')
      return
    }
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
   <div className="contact-page">
  <h1>Contact Us</h1>

  <div className="contact-grid">
    {/* Contact Form */}
    <div className="contact-form-card">
      <h2>Send us a message</h2>
      <form> ... </form>
    </div>

    {/* Contact Info */}
    <div className="space-y-6">
      <div className="contact-info-card">
        <h3>📍 Location</h3>
        <p>123 Coffee Street, Bean City, BC 12345</p>
      </div>
      <div className="contact-info-card">
        <h3>📞 Phone</h3>
        <p>(555) 123-4567</p>
      </div>
      <div className="contact-info-card">
        <h3>✉️ Email</h3>
        <p>hello@brewhaven.com</p>
      </div>
      <div className="contact-info-card">
        <h3>🕐 Hours</h3>
        <p>Mon-Fri: 7AM - 8PM</p>
        <p>Sat-Sun: 8AM - 9PM</p>
      </div>
    </div>
  </div>
</div>

  )
}