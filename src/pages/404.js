import React from 'react';

import Layout from '../layouts/layout';
import SEO from '../components/seo';
import Image from '../components/image';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Страница не найдена" />
    <h3 className="title">Страница не найдена</h3>
    <p>Извините! Страница, которую Вы ищете, не может быть найдена.</p>

    <Image imageName="404.png" />
  </Layout>
);

export default NotFoundPage;
