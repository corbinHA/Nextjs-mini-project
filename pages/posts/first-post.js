import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Image
        src='/images/profile.jpg'
        height={144}
        width={144}
        alt="Corbin Armendariz"
      />
      <h1>First Post</h1>
      <Link href='/'>
        <a>Back Home</a>
      </Link>

    </Layout>
  );
};
export default FirstPost;
