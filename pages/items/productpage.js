import Head from "next/head";
import styles from "../items/product.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faInstagram,
  faPinterestP,
  faTumblr,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

export default function ProductPage() {
  return (
    <div>
      <Head>
        <title>Missota</title>
        <link rel="icon" href="/logo-missota.svg" />
      </Head>

      <main>
        <div className={styles.container}>
          <div className={styles.logobar}>
            <FontAwesomeIcon className={styles.iconicon1} icon={faBars} />
            <img className={styles.misslogo} src="/logo-missota.svg" />
            <FontAwesomeIcon
              className={styles.iconicon1}
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
          <div className={styles.shopbar}>
            <img src="/background-top.jpg" />
            <div className={styles.shoptop}>SHOP</div>
          </div>
          <div>
            <div className={styles.detailcontainer}>
              <div className={styles.pic}>
                <img src="/category2.jpg" />

                <img src="/category3.jpg" />
              </div>
              <div className={styles.detail}>
                <h1>ROUND BAG</h1>
                <h2 id={styles.fontsize}>$75.00</h2>
                <div className={styles.ratingstar}>
                  <img src="/star.svg" />
                  <img src="/star.svg" />
                  <img src="/star.svg" />
                  <img src="/star.svg" />
                  <img src="/star.svg" />
                </div>
                <div>
                  <h2 className={styles.underlinetext}>DESCRIPTION</h2>
                  <p className={styles.textp}>
                    The structured super mini bag is introduced in dusty grey
                    leather for Cruise 2020, with a key ring that can be used to
                    attach this bag to a separate larger bag. The closure
                    features the textured tiger head spur—the unique detail
                    defines the line, referencing the Greek god Dionysus, who in
                    myth is said to have crossed the river Tigris on a tiger
                    sent to him by Zeus. The closure is further enriched with
                    sparkling crystal stones.
                  </p>
                </div>
                <div>
                  <div className={styles.productdetail}>
                    <h4>SKU</h4>
                    <p>: 38</p>
                  </div>
                  <div className={styles.productdetail}>
                    <h4>Category</h4>
                    <p>: Bags</p>
                  </div>
                  <div className={styles.productdetail}>
                    <h4>Tag</h4>
                    <p>: Boho</p>
                  </div>
                  <hr className={styles.new3}></hr>
                </div>
                <div className={styles.productdetail1}>
                  <p>Dimensions: </p>
                  <h4>150x25.00x35.00 (cm)</h4>
                </div>
                <div>
                  <p className={styles.clickedlink}>Color [?]</p>
                  <button className={styles.button}>
                    <p>LIGHT PINK</p>
                    <p style={{ color: "#006602" }}>1 in stock</p>
                  </button>
                </div>
                <div>
                  <p className={styles.clickedlink}>Size [?]</p>
                  <button className={styles.button} type="button">
                    <p>S</p>
                    <p style={{ color: "#006602" }}>1 in stock</p>
                  </button>
                  <button className={styles.buttonnone} type="button" disabled>
                    <p>M</p>
                    <p style={{ color: "#fe0000" }}>no stock</p>
                  </button>
                  <button className={styles.buttonnone} type="button" disabled>
                    <p>L</p>
                    <p style={{ color: "#fe0000" }}>no stock</p>
                  </button>
                </div>
                <div>
                  <p>FREE Delivery in Phnom Penh</p>
                  <p>
                    Delivery to{" "}
                    <span className={styles.underlined}>
                      Kampong Cham, Boeng Keng Kang Ti Mouy, Boeng Keng Kang,
                      Phnom Penh
                    </span>
                  </p>
                </div>
                <div className={styles.iconbar1}>
                  <p>Share Product</p>
                  <div className={styles.iconbar1}>
                    <FontAwesomeIcon
                      className={styles.iconicon}
                      icon={faFacebookF}
                    />
                    <div className={styles.dotv}></div>
                    <FontAwesomeIcon
                      className={styles.iconicon}
                      icon={faTwitter}
                    />
                    <div className={styles.dotv}></div>
                    <FontAwesomeIcon
                      className={styles.iconicon}
                      icon={faGoogle}
                    />
                    <div className={styles.dotv}></div>
                    <FontAwesomeIcon
                      className={styles.iconicon}
                      icon={faPinterestP}
                    />
                  </div>
                </div>
              </div>
            </div>
            <h2>RELATED PRODUCTS</h2>
            {/* <div className={styles.secondlayer}>
            </div> */}
            <div className={styles.productcontainer}>
              <div className={styles.product}>
                <img src="/category1.jpg" />
                <span className={styles.caption}>
                  <p style={{ color: "#df8688" }}>
                    <b>Elegant, Women</b>
                  </p>
                  <p>Gold Ring</p>
                  <p>
                    <b id={styles.linethrough}>$360.00</b>
                    <b>$345.00</b>
                  </p>
                </span>
              </div>
              <div className={styles.product}>
                <img src="/category2.jpg" />
                <span className={styles.caption}>
                  <p style={{ color: "#df8688" }}>
                    <b>Clothes, Dresses, Elegant, Women</b>
                  </p>
                  <p>Pastel Dress</p>
                  <p>
                    <b>$215.00</b>
                  </p>
                </span>
              </div>
              <div className={styles.product}>
                <img src="/category3.jpg" />
                <span className={styles.caption}>
                  <p style={{ color: "#df8688" }}>
                    <b>Elegant, Women</b>
                  </p>
                  <p>Gold Ring</p>
                  <p>
                    <b>$345.00</b>
                  </p>
                </span>
              </div>
              <div className={styles.product}>
                <img src="/category4.jpg" />
                <span className={styles.caption}>
                  <p style={{ color: "#df8688" }}>
                    <b>Elegant, Women</b>
                  </p>
                  <p>Gold Ring</p>
                  <p>
                    <b>$345.00</b>
                  </p>
                </span>
              </div>
            </div>

            <div style={{ margin: "80px 0" }}>
              <div className={styles.categorylink}>
                <a href="https://l192.page.link/?link=https://www.l192.com/product/{$id}&ibi=com.chlat.mbuy.app&apn=com.chlat.mbuy.app&isi=1105837827">
                  GET OUR LATEST PRODUCTS FROM L192.COM
                </a>
              </div>
            </div>
          </div>
          <footer>
            <div className={styles.categoryfooter}>
              <div className={styles.iconbar}>
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
                <FontAwesomeIcon
                  className={styles.iconicon}
                  icon={faInstagram}
                />
                <FontAwesomeIcon className={styles.iconicon} icon={faTwitter} />
                <FontAwesomeIcon
                  className={styles.iconicon}
                  icon={faFacebookF}
                />
                <FontAwesomeIcon
                  className={styles.iconicon}
                  icon={faPinterestP}
                />
                <FontAwesomeIcon className={styles.iconicon} icon={faTumblr} />
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
