import Layout from '../../components/layout';
import { getAllIds, getData } from '../../lib/data';

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  // console.log(itemData);
  return {
    props: {
      itemData
    },
    revalidate: 60
  };
}

export async function getStaticPaths() {
  const paths = await getAllIds();
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
          <h5 className="card-title">{itemData.post_title}</h5>
          <h5 className="card-subtitle mb-2 text-muted">{itemData.firstname} {itemData.lastname}</h5>
          <p className="card-text">{itemData.email}</p>
          <p className="card-text">{itemData.phonenumber}</p>
        </div>
      </article>
    </Layout>
  );
}