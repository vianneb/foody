import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';

import { HomePage } from "./Home";
import { SharePage } from "./Add_Restaurant";
import { SearchPage } from "./Search";
import { MoreInformationPage } from "./More_Information";
import { MyListPage } from "./My_List";

import { getDatabase, ref, set as firebaseSet, onValue, push as firebasePush } from 'firebase/database';






export default function App(props) {

  // declare state variables for more information page
  // to track when users click more information button
  const [selectedRestaurant, setSelectedRestaurant] = useState('');

  //declare state variables to track My List
  const [myList, setMyList] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const [restaurantsArray, setRestaurantsArray] = useState([]);

  //state for search results array 
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantsArray);

  const favoriteRestaurant = (name) => {
    const restaurantsCopy = filteredRestaurants.map((restaurant) => {

      let copy = { ...restaurant };

      if (copy.Name == name) {
        copy.favorite = !isFavorite;
        setIsFavorite(copy.favorite);
        console.log(copy.favorite);
      }

      return copy;
    })

    setFilteredRestaurants(restaurantsCopy);
  }



  //define state for add restaurant form elements
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [imageFile, setImageFile] = useState('');
  const [imageURL, setImageURL] = useState(undefined);
  const [cuisine, setCuisine] = useState('');
  const [category, setCategory] = useState('Vegan');
  const [price, setPrice] = useState('$');

 

  useEffect(() => {

    const db = getDatabase(); //database reference, not the database itself
    const allRestaurantsRef = ref(db, "allRestaurants"); //another listener for restaurants array data
    const offFunction = onValue(allRestaurantsRef, (snapshot) => {
      const newValObj = snapshot.val();
      console.log(newValObj);

      //convert obj to array for rendering
      const keys = Object.keys(newValObj);
      console.log(keys);
      const newObjArray = keys.map((keyString) => {

        return newValObj[keyString];

      })

      console.log(newObjArray);

      setRestaurantsArray(newObjArray);
      setFilteredRestaurants(newObjArray);

    })

    //what to do when component unmounts (is removed, not shown)
    const cleanup = () => {
      //turn out the lights (remove the value listener)
      offFunction();
    }
    //what should the effect hook callback return??
    return cleanup;

  }, [])

  //callback for form onSubmit
  const addRestaurant = (name, area, cuisine, category, price) => {

    const newRestaurant = {
      Name: name,
      Area: area,
      Cuisine: cuisine,
      Category: category,
      Price: price
    }

    //modify Firebase
    const db = getDatabase(); //database reference, not the database itself
    const allRestaurantsRef = ref(db, "allRestaurants");

    firebasePush(allRestaurantsRef, newRestaurant);

    // const updatedRestaurants = [...restaurantsArray, newRestaurant];
    // setRestaurantsArray(updatedRestaurants);

  }


  return (
    <div className="App">
      <div className="main-body">

        <Routes>
          {/* default to Home page */}
          <Route path="/" element={
            <HomePage />
          } />
          <Route path="share" element={
            <SharePage
              name={name}
              setName={setName}
              address={address}
              setAddress={setAddress}
              imageFile={imageFile}
              setImageFile={setImageFile}
              imageURL={imageURL}
              setImageURL={setImageURL}
              cuisine={cuisine}
              setCuisine={setCuisine}
              category={category}
              setCategory={setCategory}
              price={price}
              setPrice={setPrice}
              addRestaurant={addRestaurant}
              setFilteredRestaurants={setFilteredRestaurants}
              restaurantsArray={restaurantsArray}
            />
          } />

          <Route path="search" element={
            <SearchPage filteredRestaurants={filteredRestaurants} setFilteredRestaurants={setFilteredRestaurants} setSelectedRestaurant={setSelectedRestaurant} myList={myList} setMyList={setMyList} favoriteRestaurant={favoriteRestaurant} restaurantsArray={restaurantsArray} />
          } />

          <Route path="details/:restaurantName" element={
            <MoreInformationPage selectedRestaurant={selectedRestaurant} />
          } />

          <Route path="mylist" element={
            <MyListPage myList={myList} setSelectedRestaurant={setSelectedRestaurant} />
          } />

          {/* route to handle incorrect URLS */}
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </div>
    </div>
  )

}
