import React from "react"
import "./footer.css"
import LinkedInProfile from "components/Media/LinkedInProfile"
import GitHubProfile from "components/Media/GitHubProfile"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="social-section">
        <LinkedInProfile />
        <GitHubProfile />
      </div>
      <div className="copywrite-section">
        <p>
          © 2023. All right reserved.
        </p>
      </div>
    </div>
  )
}
export default Footer
