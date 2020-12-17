import styles from "../components/homepage.module.css";

export default function ProductHomepage() {
  return (
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
    </div>
  );
}
