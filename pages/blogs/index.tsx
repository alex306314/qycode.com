import Head from 'next/head';
import { mainMenu } from '../../src/constants';

const Blogs = () => {

  return (
    <>
      <Head>
        <title>About 23</title>
      </Head>
      <div>
        about page
      </div>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  console.log('----', params);
  return {
    props: {
      
    },
  };
};

export default Blogs;