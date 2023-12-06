import { React, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons/faGithubSquare"
import { faUserLock } from "@fortawesome/free-solid-svg-icons/faUserLock"

// Styles
import "./portfolioItem.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { debounce } from 'lodash';


const PortfolioItem = ({ item }) => {
  useEffect(() => {
    AOS.init();
    const handleScroll = debounce(() => {
      AOS.refresh();
    }, 200);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="portfolio-item" data-aos="zoom-in-up" data-aos-offset="0">
      <div className="image-container">
        <img src={process.env.PUBLIC_URL + item?.img} alt={item.title} />
      </div>
      <div className="content-container">
        <div>
          <h3>{item.title}</h3>
          {item.tagline && <p>{item.tagline}</p>}
        </div>

        <div className="media-icons">
          {/* <p>just a random text</p> */}
          {item.repositoryUrl !== "private" ? (
            <a href={item.repositoryUrl}>
              <FontAwesomeIcon
                icon={faGithubSquare}
                size="2x"
                className="icon"
                title="Github Repo"
              />
            </a>
          ) : (
            <a href="#_">
              <FontAwesomeIcon
                icon={faUserLock}
                size="2x"
                className="icon"
                title="Private Repo"
              />
            </a>
          )}

          {item.liveUrl !== "" && (
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faExternalLinkSquareAlt}
                size="2x"
                className="icon"
                title="Live view"
              />{" "}
            </a>
          )}
        </div>

      </div>
    </div>
  );
};

export default PortfolioItem;
