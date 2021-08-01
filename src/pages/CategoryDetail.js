import React, { useState, useEffect, Suspense, lazy } from 'react';
import ItemSemantic from '../components/ItemSemantic/ItemSemantic';
import { db } from '../firebase';

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

      <div className="row">
        {ite.map(function (num) {
          return <div key={num.id}><ItemSemantic name={num.name} price={num.price} description={num.description} id={num.id} img={num.photo} /></div>

        })}
      </div>
    </div >
  );
};

export default CategoryDetail;