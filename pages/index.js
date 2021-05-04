import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Weeeeeeeeeeeeee</title>
        <meta name="keywords" content="Next.js Weeeeeeeeeeeeeeeeee" />
      </Head>
      <main className={styles.container}>
        <h1>Hello Next.js</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut laudantium
          explicabo asperiores expedita earum aspernatur iusto, voluptatem vitae
          quia praesentium nemo suscipit officia corporis, accusantium debitis,
          nihil et pariatur eaque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, in
          odio quibusdam libero at nam vero corrupti sapiente modi odit quas
          recusandae facilis, non possimus tenetur distinctio voluptatum, saepe
          esse?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut laudantium
          explicabo asperiores expedita earum aspernatur iusto, voluptatem vitae
          quia praesentium nemo suscipit officia corporis, accusantium debitis,
          nihil et pariatur eaque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, in
          odio quibusdam libero at nam vero corrupti sapiente modi odit quas
          recusandae facilis, non possimus tenetur distinctio voluptatum, saepe
          esse?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut laudantium
          explicabo asperiores expedita earum aspernatur iusto, voluptatem vitae
          quia praesentium nemo suscipit officia corporis, accusantium debitis,
          nihil et pariatur eaque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, in
          odio quibusdam libero at nam vero corrupti sapiente modi odit quas
          recusandae facilis, non possimus tenetur distinctio voluptatum, saepe
          esse?
        </p>

        <Link href="/user">
          <a>List of Weeeee users</a>
        </Link>
      </main>
    </div>
  );
}
