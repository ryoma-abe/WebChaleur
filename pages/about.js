import seoData from "../seo.json";

export default function About() {
  return (
    <main>
      <h1>会社概要</h1>
      <p>WebChaleurについて詳しくご紹介します</p>
      {/* ページコンテンツ */}
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {
      seoData: seoData.pages.about || {},
    },
  };
}
