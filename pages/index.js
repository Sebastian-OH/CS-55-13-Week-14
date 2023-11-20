import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedList } from '../lib/data';
import { datingSortedList } from '../lib/newdata';
import { otherSortedList } from '../lib/extradata';






// define a getStaticProps() function - this name is defined by next.js
export async function getStaticProps() {
  const allData = await getSortedList();
  const moreData = await datingSortedList();
  const extraData = await otherSortedList();
  return {
    props: { 
      allData,
      moreData,
      extraData
     }, 
     revalidate: 60
  };
}

// export our home page component Home
export default function Home( { allData, moreData, extraData } ) {
  console.log(allData);
  return (
    <Layout home>
      <h1 className='text-center'>Contacts</h1>
      <div className='container'>
        <div className="list-group">
          {allData && allData.map(
              ({id, name}) => (
                <Link key={id} href={`/cards/${id}`} className="list-group-item list-group-item-action">
                  {name}
                </Link>
              )
            )
          }
        </div>
      </div>
      <h1 className='text-center'>Products</h1>
      <div className='container'>
        <div className="list-group">
          {moreData && moreData.map(
              ({id, name}) => (
                <Link key={id} href={`/dating/${id}`} className="list-group-item list-group-item-action">
                  {name}
                </Link>
              )
            )
          }
        </div>
      </div>
      <h1 className='text-center'>Reviews</h1>
      <div className='container'>
        <div className="list-group">
          {extraData && extraData.map(
              ({id, name}) => (
                <Link key={id} href={`/review/${id}`} className="list-group-item list-group-item-action">
                  {name}
                </Link>
              )
            )
          }
        </div>
      </div>
    </Layout>
  );
}


