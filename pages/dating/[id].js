import Layout from '../../components/layout';
import { datingIds, datingData } from '../../lib/newdata';

export async function getStaticProps({ params }) {
  const itemData = await datingData(params.id);
  // console.log(itemData);
  return {
    props: {
      itemData
    },
    revalidate: 60
  };
}

export async function getStaticPaths() {
  const paths = await datingIds();
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData }) {
    console.log(itemData)
    return (
    <Layout>
      <article className="card col-6 mx-auto mt-4">
        <div className="card-body">
          <h5 className="card-subtitle card-title mb-2 text-muted">{itemData.product_name} {itemData.product_price} </h5>
          <p className="card-text"> {itemData.product_description}  </p>
          <div className="card-text buttonDiv" dangerouslySetInnerHTML={{__html: itemData.post_content}} />
        </div>
      </article>
    </Layout>
  );
}


