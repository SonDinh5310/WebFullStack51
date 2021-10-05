import Layout from "../components/layout/layout";
import "tailwindcss/tailwind.css";
import { AppWrapper } from "../context/state";
function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <AppWrapper>
                <Component {...pageProps} />
            </AppWrapper>
        </Layout>
    );
}

export default MyApp;
