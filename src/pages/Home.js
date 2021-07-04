import React, { Suspense, lazy } from 'react';
import Loading from '../components/Loading/Loading';
const ItemListContainer = lazy(() => import('../components/ItemListContainer/ItemListContainer'));

function Home() {
  return (

    <Suspense fallback={<Loading />}><ItemListContainer /></Suspense>
  )
}

export default Home;
