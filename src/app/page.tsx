import Layout from "@/components/Layout";
import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("@/screens/home"));
export default function Home() {
  return (
    <main>
      <Layout>
        <HomePage />
      </Layout>
    </main>
  );
}
