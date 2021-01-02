import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import useTranslation from "next-translate/useTranslation";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Layout>
        <h1>I am home</h1>
        <h1>{t("common:greeting")}</h1>
      </Layout>
    </div>
  );
}
