import React, { useState } from 'react';
import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

export const About = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutMeImg.png")}
          alt="Me sitting with a laptop :)"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
                I'm a frontend developer,
                with a keen eye for detail and a love for clean code.
                I'm all about making things look great and work smoothly.
              </p>
              {showMore && (
                <p>
                  <br></br>
                 Discover a detailed overview of my skills, projects, and career journey as you scroll down.
                </p>
              )}
              <button className={styles.readMoreButton} onClick={toggleShowMore}>
                {showMore ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
