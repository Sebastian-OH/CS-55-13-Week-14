import Layout from '../../components/layout';
import { otherIds, otherData } from '../../lib/extradata';

export async function getStaticProps({ params }) {
  const itemData = await otherData(params.id);
  // console.log(itemData);
  return {
    props: {
      itemData
    },
    revalidate: 60
  };
}

export async function getStaticPaths() {
  const paths = await otherIds();
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
          <h3 className="card-subtitle card-title mb-2 text-muted">{itemData.post_title} </h3>
          <h5 className="card-subtitle card-title mb-2 text-muted">{itemData.first_name} {itemData.last_initial} {itemData.rating}</h5>
          <p className="card-text"> {itemData.description}  </p>
        </div>
      </article>
    </Layout>
  );
}