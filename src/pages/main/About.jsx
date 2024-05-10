import styles from '../../styles/outerPages/about.module.css'
import React from "react"
import LzyCrazyFooter from '../../components/common/LzyCrazyFooter'
import LzyCrazyHeader from '../../components/common/LzyCrazyHeader'
import Banner5 from "../../assets/updatedBanners/BANNER 5.jpg"
function About() {

  return (
    <div>
      <LzyCrazyHeader />
      <div>
        <section className={styles.banner_section}>
          <div className={styles.banner_imga}>
          </div>
          <div className={styles.banner_heading}>
            <h3>Crazy idea Can Change
              Your Life</h3>
          </div>
        </section>
      </div>
      <section className={styles.about_section}>
        <div className={styles.about_content}>
          <div className={styles.about_heading}>
            <h3>Who We Are</h3>
            <p>
              LzyCrazy has a concept of being the upcoming largest platform in the world by providing Business,
              Shopping & Entertainment under the same platform.
            </p>
          </div>
          <div className={styles.about_imga}>
          </div>
        </div>
      </section>
      <div class="container-fluid"> 
  <div class="row"> 
    <div class="col-12"> 
      <div class="ratio ratio-16x9" style={{height:'80%'}}> 
        <video autoPlay loop muted playsInline >
          <source src="/assets/about/info_video1.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
</div>

      {/* <div>
        <video autoPlay loop muted playsInline={true}>
          <source src="/assets/about/info_video1.mp4" type="video/mp4" />
        </video>
      </div> */}
      <section className={styles.divider}>
        <div className={styles.divider_content}>
          <h1>Your Dream, Our Desire</h1>
          <h1>Make It True</h1>
        </div>
        <div className={styles.divider_content_img}>
          <div className={styles.divider_images}>
            <div className={styles.img1a}>
              <img src="/assets/images/about-us.jpg" alt="" style={{height:300}}/>
            </div>
            <h4 style={{marginBottom:200, marginLeft:35}}>Work With LzyCrazy</h4>
            <div className={styles.img2a}>
              <img src="/assets/images/about-us-2.jpg" alt="" style={{height:300}} />
            </div>
          </div>
          <h3>Every work is available</h3>
          <div className={styles.divider_images_2} style={{ marginTop: "4rem" }}>
            <div className={styles.img1a}>
              {/* <img src="/assets/images/BANNER 5.jpg" alt="" /> */}
              <img src={Banner5} alt=""/>

            </div>
            <h1></h1>
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