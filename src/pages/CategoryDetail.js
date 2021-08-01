import React, { useState, useEffect, Suspense, lazy } from 'react';
import { db } from '../firebase';
import Loading from '../components/Loading/Loading';
const ItemSemantic = lazy(() => import('../components/ItemSemantic/ItemSemantic'))

const CategoryDetail = ({ match }) => {
  let CatID = match.params.id;
  const initialState = []
  const [ite, setIte] = useState(initialState);


  useEffect(() => {



    const docc = [];
    db.collection("products").where("categorie", "==", CatID)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots

          console.log(doc.id, " => ", doc.data());

          docc.push({ ...doc.data(), id: doc.id });


        });
        setIte(docc);
      })






  }, [CatID]);

  return (
    <div className="container">
      <center><h1>{CatID}</h1></center>
      <div className="row">
        {ite.map(function (num) {
          return <div key={num.id} className="col-md-3">

            <Suspense fallback={<Loading></Loading>}><ItemSemantic name={num.name} price={num.price} description={num.description} id={num.id} img={num.photo} stock={num.stock} /></Suspense>

          </div>

        })

        }


      </div>
    </div >
  );
};

export default CategoryDetail;