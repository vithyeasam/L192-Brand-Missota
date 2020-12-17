import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faTumblr,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
// import ProductHomepage from "./components/homepage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Missota</title>
        <link rel="icon" href="/logo-missota.svg" />
      </Head>

      <main>
        <div className={styles.container}>
          <div className={styles.appwrapper}>
            <a href="https://l192.page.link/?link=https://www.l192.com&ibi=com.chlat.mbuy.app&apn=com.chlat.mbuy.app&isi=1105837827">
              <img className={styles.appbanner} src="/bannerapp.png" />
            </a>
          </div>
          <div className={styles.logobar}>
            <FontAwesomeIcon className={styles.iconicon1} icon={faBars} />
            <img className={styles.misslogo} src="/logo-missota.svg" />
            <FontAwesomeIcon
              className={styles.iconicon2}
              icon={faShoppingBag}
            />
          </div>
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
          <div>            
          <div className={styles.container}>
        <div className={styles.pic}>
          <img src="/intro-model.jpg" />
        </div>
        <div className={styles.secondlayer}>
          <img id={styles.rect} src="/left-model1.jpg" />

          <img id={styles.rect1} src="/right-model1.jpg" />
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
                <b>Clothes, Dresses, Elegant, Women</b>
              </p>
              <p>Pastel Dress</p>
              <p>
                <b>$215.00</b>
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
          <div className={styles.product1}>
            <img src="/category1.jpg" />
          </div>
          <div className={styles.product1}>
            <img src="/category2.jpg" />
          </div>
          <div className={styles.product1}>
            <img src="/category3.jpg" />
          </div>
        </div>
        <div>
          <div className={styles.product1}>
            <img src="/category4.jpg" />
            <span className={styles.d}>
              <h2>
                <b>DRESSES</b>
              </h2>
              <p>New color dresses for every occasion</p>
            </span>
          </div>
          <div className={styles.product1}>
            <img src="/category5.jpg" />
            <span className={styles.d}>
              <h2>
                <b>SHOES</b>
              </h2>
              <p>New color shoes for every occasion</p>
            </span>
          </div>
          <div className={styles.product1}>
            <img src="/category6.jpg" />
            <span className={styles.d}>
              <h2>
                <b>ACCESSORIES</b>
              </h2>
              <p>New color accessories for every occasion</p>
            </span>
          </div>
        </div>
      </div>

<<<<<<< HEAD
            <div style={{ margin: "80px 0" }}>
=======
              <img id={styles.rect1} src="/right-model1.jpg" />
            </div>
            <div className={styles.productcontainer}>
              <div className={styles.product}>
                <img src="/product1.jpg" srcSet="product1-300.jpg 300w, /product1.jpg 750w" sizes="(max-width: 300px) 300px,(min-width: 1024px) 210px, 100vw" alt="Include productname as alternative text" />                  
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
                <img src="/product2.jpg" srcSet="product2-300.jpg 300w, /product2.jpg 750w" sizes="(max-width: 300px) 300px,(min-width: 1024px) 210px, 100vw" alt="Include productname as alternative text" />
                <span className={styles.caption}>
                  <p style={{ color: "#F08080" }}>
                    <b>Clothes, Dresses, Elegant, Women</b>
                  </p>
                  <p>Pastel Dress</p>
                  <p>
                    <b>$215.00</b>
                  </p>
                </span>
              </div>
              <div className={styles.product}>
                <img src="/product3.jpg" srcSet="product3-300.jpg 300w, /product3.jpg 750w" sizes="(max-width: 300px) 300px,(min-width: 1024px) 210px, 100vw" alt="Include productname as alternative text" />
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
                <img src="/product4.jpg" srcSet="product4-300.jpg 300w, /product4.jpg 750w" sizes="(max-width: 300px) 300px,(min-width: 1024px) 210px, 100vw" alt="Include productname as alternative text" />
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
                <img src="/product5.jpg"  srcSet="product5-300.jpg 300w,  /product5.jpg 750w" sizes="(max-width: 300px) 300px,(min-width: 1024px) 210px, 100vw" alt="Include productname as alternative text" />
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
              <div className={styles.product1}>
                <img src="/category1.jpg" />
              </div>
              <div className={styles.product1}>
                <img src="/category2.jpg" />
              </div>
              <div className={styles.product1}>
                <img src="/category3.jpg" />
              </div>
            </div>
            <div>
              <div className={styles.product1}>
                <img src="/category4.jpg" />
                <span className={styles.d}>
                  <h2>
                    <b>DRESSES</b>
                  </h2>
                  <p>New color dresses for every occasion</p>
                </span>
              </div>
              <div className={styles.product1}>
                <img src="/category5.jpg" />
                <span className={styles.d}>
                  <h2>
                    <b>SHOES</b>
                  </h2>
                  <p>New color shoes for every occasion</p>
                </span>
              </div>
              <div className={styles.product1}>
                <img src="/category6.jpg" />
                <span className={styles.d}>
                  <h2>
                    <b>ACCESSORIES</b>
                  </h2>
                  <p>New color accessories for every occasion</p>
                </span>
              </div>
            </div>
            <div className={styles.footerappbanner}>
>>>>>>> 2f88a92c8ed34195bc0189912def1a7300973ca4
              <div className={styles.categorylink}>
                <a href="https://l192.page.link/?link=https://www.l192.com&ibi=com.chlat.mbuy.app&apn=com.chlat.mbuy.app&isi=1105837827">
                  GET OUR LATEST PRODUCTS FROM L192.COM
                </a>
              </div>
            </div>
          </div>
          <footer>
            <div className={styles.categoryfooter}>
              <div className={styles.iconbar1}>
                <a className={styles.category1} href="/">
                  WHAT'S NEW
                </a>
                <a className={styles.category1} href="/">
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
              <div className={styles.iconbar}>
                <FontAwesomeIcon className={styles.iconicon} icon={faInstagram} />
                <FontAwesomeIcon className={styles.iconicon} icon={faTwitter} />
                <FontAwesomeIcon className={styles.iconicon} icon={faFacebookF} />
              </div>
            </div>
            <div className={styles.copyrightlayer}>
                <p>Copyright Elated Themes</p>
              </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
