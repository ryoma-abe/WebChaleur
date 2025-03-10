import seoData from "../seo.json";

export default function Products() {
  return (
    <main>
      <h1>製品一覧</h1>
      <p>WebChaleurの製品ラインナップをご覧ください</p>
      {/* ページコンテンツ */}
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {
      seoData: seoData.pages.products || {},
    },
  };
}
