import styles from '../styles/about.module.css'
import React from "react"
import LzyCrazyFooter from '../components/common/LzyCrazyFooter'
import LzyCrazyHeader from '../components/common/LzyCrazyHeader'
function About() {

  return (
    <div>
      <LzyCrazyHeader />
      <div>
        <section className={styles.banner_section}>
          <div className={styles.banner_imga}>
          </div>
          <div className={styles.banner_heading}>
            <h1>Crazy idea Can Change
              Your Life</h1>
          </div>
        </section>
      </div>
      <section className={styles.about_section}>
        <div className={styles.about_content}>
          <div className={styles.about_heading}>
            <h1>Who We Are</h1>
            <p>
              LzyCrazy has a concept of being the upcoming largest platform in the world by providing Business,
              Shopping & Entertainment under the same platform.
            </p>
            <button className={styles.banner_btn}>More</button>
          </div>
          <div className={styles.about_imga}>
          </div>
        </div>
      </section>
      <div>
        <video autoPlay loop muted playsInline={true}>
          <source src="/assets/about/info_video1.mp4" type="video/mp4" />
        </video>
      </div>
      <section className={styles.divider}>
        <div className={styles.divider_content}>
          <h1>Your Dream, Our Desire</h1>
          <h1>Make It True</h1>
        </div>
        <div className={styles.divider_content_img}>
          <div className={styles.divider_images}>
            <div className={styles.img1a}>
              <img src="/assets/images/about-us.jpg" alt="" />
            </div>
            <h4>Work With LzyCrazy</h4>
            <div className={styles.img2a}>
              <img src="/assets/images/about-us-2.jpg" alt="" />
            </div>
          </div>
          <h1>Every work is available</h1>
          <div className={styles.divider_images_2} style={{ marginTop: "4rem" }}>
            <div className={styles.img1a}>
              <img src="/assets/images/banner1.jpg" alt="" />
            </div>
            <h4></h4>
            <div className={styles.img2a}>
              <img src="/assets/images/ceo.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.lower_about}>
          <div>
            <div className={styles.img_section_about}>
              <img src="/assets/about/standy2.jpg" alt="" />
            </div>
          </div>
          <div>
            <div className={styles.img_section_about}>
              <img src="/assets/about/realstate.jpg" alt="" />
            </div>
          </div>
          <div>
            <div className={styles.img_section_about}>
              <img src="/assets/about/direct-by-farm.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <LzyCrazyFooter />
    </div>
  );
}

export default About