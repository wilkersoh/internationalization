import React from "react";
import Layout from "../components/Layout";
import useTranslation from "next-translate/useTranslation";

import styles from "../styles/Home.module.css";

export default function about() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Layout>
        <h1>About Page</h1>
        <p>{t("about:title")}</p>
        <p>
          {t("about:introduction", {
            name: "Patrick",
            age: 27,
          })}
        </p>
      </Layout>
    </div>
  );
}
