import seoData from "../seo.json";

export default function Contact() {
  return (
    <main>
      <h1>お問い合わせ</h1>
      <p>WebChaleurへのお問い合わせはこちらから</p>
      {/* ページコンテンツ */}
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {
      seoData: seoData.pages.contact || {},
    },
  };
}
