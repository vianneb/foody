import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

import { HomePage } from "./Home";
import { SharePage } from "./Add_Restaurant";
import { SearchPage } from "./Search";
import { MoreInformationPage } from "./More_Information";
import { MyListPage } from "./My_List";
import { SignInPage } from "./SignIn_Page";
import { NavBar } from "./Navbar";

import { getDatabase, ref, onValue, push as firebasePush } from 'firebase/database';

import { getAuth, onAuthStateChanged } from "firebase/auth";


export default function App(props) {

  //state for current user
  const nullUser = { uid: null, displayName: null };
  const [currentUser, setCurrentUser] = useState(nullUser);

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (firebaseUser) => {
      console.log(firebaseUser);
      if (firebaseUser) {
        setCurrentUser(firebaseUser);
      } else {
        setCurrentUser(nullUser);
      }


    })

  }, [])


  // declare state variables for more information page
  // to track when users click more information button
  const [selectedRestaurant, setSelectedRestaurant] = useState('');

  //declare state variables to track My List
  const [myList, setMyList] = useState([]);

  const [restaurantsArray, setRestaurantsArray] = useState([]);

  //state for search results array 
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantsArray);

  
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

      //convert obj to array for rendering
      const keys = Object.keys(newValObj);
      const newObjArray = keys.map((keyString) => {

        return newValObj[keyString];

      })

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
          <Route element={<AppLayout currentUser={currentUser} />}>
            <Route path="home" element={
              <HomePage />
            } />

            <Route path="search" element={
              <SearchPage filteredRestaurants={filteredRestaurants} setFilteredRestaurants={setFilteredRestaurants} setSelectedRestaurant={setSelectedRestaurant} myList={myList} setMyList={setMyList} restaurantsArray={restaurantsArray} currentUser={currentUser} />
            } />

            <Route path="details/:restaurantName" element={
              <MoreInformationPage selectedRestaurant={selectedRestaurant} />
            } />

            <Route path="signin" element={
              <SignInPage currentUser={currentUser} setCurrentUser={setCurrentUser} />
            } />

            {/* Protected routes */}
            <Route element={<ProtectedPage currentUser={currentUser} />}>


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

              <Route path="mylist" element={
                <MyListPage myList={myList} setMyList={setMyList} setSelectedRestaurant={setSelectedRestaurant} currentUser={currentUser} />
              } />
            </Route>
          </Route>

          {/* route to handle incorrect URLS */}
          <Route path="*" element={<Navigate to="/home" />} />

        </Routes>
      </div>
    </div>
  )

}

function ProtectedPage(props) {
  //...determine if user is logged in
  if (!props.currentUser.uid) { //if no user, send to sign in
    return <Navigate to="/signin" />
  }
  else { //otherwise, show the child route content
    return <Outlet />
  }

}

function AppLayout({ currentUser }) {
  return (
    <>
      <NavBar currentUser={currentUser} />
      {/* the nested route */}
      <Outlet />
    </>
  )
}

