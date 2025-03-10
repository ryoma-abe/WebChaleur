import seoData from "../seo.json";

export default function Home() {
  return (
    <main>
      <h1>WebChaleur</h1>
      <p>高品質な暖房ソリューションを提供します</p>
      {/* ページコンテンツ */}
    </main>
  );
}

// SEOデータを静的に生成
export async function getStaticProps() {
  return {
    props: {
      seoData: seoData.pages.home || {},
    },
  };
}
