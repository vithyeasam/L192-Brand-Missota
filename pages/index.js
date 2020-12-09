import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Missota</title>
        <link rel="icon" href="/logo-missota.svg" />
      </Head>

      <main>
        <div className={styles.container}>
          <img className={styles.misslogo} src="/logo-missota.svg" />
          <div className={styles.categorybar}>
            <a className={styles.category} href="/">
              WHAT'S NEW
            </a>
            <a
              style={{ color: "#FF8040" }}
              className={styles.category}
              href="/"
            >
              HOME
            </a>
            <a className={styles.category} href="/">
              DRESS
            </a>
            <a className={styles.category} href="/">
              SHOES
            </a>
            <a className={styles.category} href="/">
              JUMPSUITS
            </a>
            <a className={styles.category} href="/">
              ACCESSORIES
            </a>
            <a className={styles.category} href="/">
              JACKETS
            </a>
          </div>
          <div className={styles.piccontainer}>
            <div>
              <img className={styles.pic} src="/intro-model.jpg" />
            </div>
            <div>
              <img src="/left-model1.jpg" />
              <img src="/right-model1.jpg" />
            </div>
            <div className={styles.productcontainer}>
              <div className={styles.product}>
                <img src="/product1.jpg" />
                <span className={styles.caption}>
                  <p style={{ color: "#F08080" }}>
                    <b>Elegant, Women</b>
                  </p>
                  <p>Gold Ring</p>
                  <p>
                    <b>$345.00</b>
                  </p>
                </span>
              </div>
              <div className={styles.product}>
                <img src="/product2.jpg" />
                <span className={styles.caption}>
                  <p style={{ color: "#F08080" }}>
                    <b>Elegant, Women</b>
                  </p>
                  <p>Gold Ring</p>
                  <p>
                    <b>$345.00</b>
                  </p>
                </span>
              </div>
              <div className={styles.product}>
                <img src="/product3.jpg" />
                <span className={styles.caption}>
                  <p style={{ color: "#F08080" }}>
                    <b>Elegant, Women</b>
                  </p>
                  <p>Gold Ring</p>
                  <p>
                    <b>$345.00</b>
                  </p>
                </span>
              </div>
              <div className={styles.product}>
                <img src="/product4.jpg" />
                <span className={styles.caption}>
                  <p style={{ color: "#F08080" }}>
                    <b>Elegant, Women</b>
                  </p>
                  <p>Gold Ring</p>
                  <p>
                    <b>$345.00</b>
                  </p>
                </span>
              </div>
              <div className={styles.product}>
                <img src="/product5.jpg" />
                <span className={styles.caption}>
                  <p style={{ color: "#F08080" }}>
                    <b>Elegant, Women</b>
                  </p>
                  <p>Gold Ring</p>
                  <p>
                    <b>$345.00</b>
                  </p>
                </span>
              </div>
            </div>
            <div>
              <div className={styles.product}>
                <img src="/category1.jpg" />
              </div>
              <div className={styles.product}>
                <img src="/category2.jpg" />
              </div>
              <div className={styles.product}>
                <img src="/category3.jpg" />
              </div>
            </div>
            <div>
              <div className={styles.product}>
                <img src="/category4.jpg" />
                <span>
                  <h2>
                    <b>DRESSES</b>
                  </h2>
                  <p>New color dresses for every occasion</p>
                </span>
              </div>
              <div className={styles.product}>
                <img src="/category5.jpg" />
                <span>
                  <h2>
                    <b>SHOES</b>
                  </h2>
                  <p>New color shoes for every occasion</p>
                </span>
              </div>
              <div className={styles.product}>
                <img src="/category6.jpg" />
                <span>
                  <h2>
                    <b>ACCESSORIES</b>
                  </h2>
                  <p>New color accessories for every occasion</p>
                </span>
              </div>
            </div>
            <div style={{ margin: "80px 0" }}>
              <div className={styles.categorylink}>
                <a
                  href="https://www.l192.com/"
                >
                  GET OUR LATEST PRODUCTS FROM L192.COM
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer style={{ margin: "80px 0" }}>
        <div className={styles.categoryfooter}>
          <div className={styles.footercontainer}>
            <h2 style={{ color: "#424949" }}>SUBCRIBE TO NEWSLETTER</h2>
            <input type="text" placeholder="E-mail address"></input>
            <input type="submit"></input>
          </div>
          <div>
            <a className={styles.category1} href="/">
              WHAT'S NEW
            </a>
            <a
              className={styles.category1}
              href="/"
            >
              HOME
            </a>
            <a className={styles.category1} href="/">
              DRESS
            </a>
            <a className={styles.category1} href="/">
              SHOES
            </a>
            <a className={styles.category1} href="/">
              JUMPSUITS
            </a>
            <a className={styles.category1} href="/">
              ACCESSORIES
            </a>
            <a className={styles.category1} href="/">
              JACKETS
            </a>
          </div>
          <div>
          <i class="fab fa-twitter"></i>
          </div>
        </div>
      </footer>
    </div>
  );
}
