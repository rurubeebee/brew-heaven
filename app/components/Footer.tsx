export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-logo">Brew <span className="highlight">Haven</span></h3>
          <p className="footer-text">Crafting perfect coffee since 2020</p>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/menu">Menu</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Follow Us</h4>
          <div className="social-icons">
            <a href="#"><span>📘</span></a>
            <a href="#"><span>📷</span></a>
            <a href="#"><span>🐦</span></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Brew Haven. All rights reserved.</p>
      </div>
    </footer>
  )
}
