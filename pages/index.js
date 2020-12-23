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
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Link from "next/link";

const HELLO_QUERY = gql`
  query hello_query {
    productSearch(filter: { brandId: 262 }, offset: 0, limit: 30) {
      items {
        id
        title
        picture
        price
        price_before_discount
      }
    }
  }
`;

// function showProduct(d) {
//   console.log(d);

//   if (loading) return <div>Hello</div>;
//   if (error) return <p>ERROR</p>;
//   if (!data) return <p>Not found</p>;

//   return (
//     <div>
//       {data.productSearch &&
//         data.productSearch.items &&
//         data.productSearch.items.map(launch => (
//           // <LaunchTile key={launch.id} launch={launch} />
//           <div>{launch.picture}</div>
//         ))}
//     </div>
//   );
// };

function shoot() {
  alert("Great Shot!");
}

function smaller(d) {
  var c = d.toString().replace("w=350,h=490", "w=180,h=252");
  return c;
}

function bigger(d) {
  var c = d.toString().replace("w=350,h=490", "w=750,h=1050");
  console.log(c);
  return c;
}

const Launches = () => {
  const { data, loading, error } = useQuery(HELLO_QUERY);

  if (loading) return <div>Hello</div>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  // console.log(data.productSearch.items.map((child) =>
  // child.picture));

  const img =
    "https://s5.kh1.co/__image/w=350,h=490,fit=contain/1f/1f25fdb17923776d201d850ae2a936f17d793f1d.jpg";

  console.log(data)

  return (
    
    <div className={styles.productcontainer}>
      {data.productSearch &&
        data.productSearch.items &&
        data.productSearch.items.map((launch) => (
          // <LaunchTile key={launch.id} launch={launch} />
          // <div>{launch.picture}</div>
          <div className={styles.product} key={launch.id}>
            {/* {smaller(launch.picture)} */}
            <Link href={`/items/${launch.id}`}>
            <a>
            <img
              src={launch.picture?.toString() || ""}
              // srcSet="product1-300.jpg 300w, /product1.jpg 750w"
              srcSet={`${smaller(launch.picture)} 300w, ${bigger(
                launch.picture
              )} 750w`}
              sizes="(max-width: 300px) 300px,(min-width: 1024px) 210px, 100vw"
              alt="Include productname as alternative text"
            />
            <span className={styles.caption}>
              <p style={{ color: "#F08080" }}>
                <b id={styles.b1}>{launch.title ? launch.title : "No Title"}</b>
              </p>
              <p>Gold Ring</p>
              <p>
                <b id={styles.linethrough}>${launch.price_before_discount}</b>
                <b>${launch.price}</b>
              </p>
            </span>
            </a>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default function Home() {
  // const { data } = useQuery(HELLO_QUERY);

  return (
    <div>
      <Head>
        <title>Missota</title>
        <link rel="icon" href="/logo-missota.svg" />
      </Head>

      <main>
        {/* <div>{Launches()}</div> */}
        <div className={styles.container}>
          <div className={styles.appwrapper}>
            <a href="https://l192.page.link/?link=https://www.l192.com&ibi=com.chlat.mbuy.app&apn=com.chlat.mbuy.app&isi=1105837827">
              <img className={styles.appbanner} src="/bannerapp.png" />
            </a>
          </div>
          <div className={styles.logobar}>
            <FontAwesomeIcon className={styles.iconicon1} icon={faBars} />
            <a href="/"><img className={styles.misslogo} src="/logo-missota.svg" /></a>         
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
            <div className={styles.pic}>
              <img src="/intro-model.jpg" />
            </div>
            <div className={styles.secondlayer}>
              <img id={styles.rect} src="/left-model1.jpg" />

              <img id={styles.rect1} src="/right-model1.jpg" />
            </div>
            {/* <div className={styles.productcontainer}> */}

            {Launches()}

            {/* </div> */}
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
                <FontAwesomeIcon
                  className={styles.iconicon}
                  icon={faInstagram}
                />
                <FontAwesomeIcon className={styles.iconicon} icon={faTwitter} />
                <FontAwesomeIcon
                  className={styles.iconicon}
                  icon={faFacebookF}
                />
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
