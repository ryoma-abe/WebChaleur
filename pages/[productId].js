import seoData from "../seo.json";
import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <main>
      <h1>製品詳細: {productId}</h1>
      <p>製品の詳細情報をご覧いただけます</p>
      {/* ページコンテンツ */}
    </main>
  );
}

export async function getServerSideProps({ params }) {
  const { productId } = params;

  // 製品詳細ページ用のカスタムSEOデータを生成
  const customSeoData = {
    title: `${seoData.default.title} | 製品詳細: ${productId}`,
    description: `${productId}の詳細情報をご覧いただけます。`,
    keywords: `${productId}, ${seoData.pages.products.keywords}`,
    og: {
      ...seoData.pages.products.og,
      title: `製品詳細: ${productId}`,
      description: `${productId}の詳細情報をご覧いただけます。`,
      url: `${seoData.default.canonical}/products/${productId}`,
    },
  };

  return {
    props: {
      seoData: customSeoData,
    },
  };
}
