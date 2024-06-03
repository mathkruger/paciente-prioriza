import { Layout } from "../templates/layout";

export const HomeController = {
  getHome: () => {
    return (
      <Layout>
        <h1>Homepage</h1>
      </Layout>
    );
  }
};
