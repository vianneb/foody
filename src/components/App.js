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

  //set currently logged-in user
  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setCurrentUser(firebaseUser);
      } else {
        setCurrentUser(nullUser);
      }


    })

  }, [])


  //state to track My List (favorites)
  const [myList, setMyList] = useState([]);

  //state for list of all restaurants
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
  const [description, setDescription] = useState('');



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
  const addRestaurant = (name, area, image, cuisine, category, price, description) => {

    const newRestaurant = {
      Name: name,
      Area: area,
      Image: image,
      Cuisine: cuisine,
      Category: category,
      Price: price,
      Description: description
    }

    //modify Firebase
    const db = getDatabase(); //database reference, not the database itself
    const allRestaurantsRef = ref(db, "allRestaurants/");

    firebasePush(allRestaurantsRef, newRestaurant);

  }


  return (
    <div className="App">
      <div className="main-body">

        <Routes>
          <Route element={<AppLayout currentUser={currentUser} />}>
            <Route path="home" element={
              <HomePage setFilteredRestaurants={setFilteredRestaurants} filteredRestaurants={filteredRestaurants} restaurantsArray={restaurantsArray}/>
            } />

            <Route path="search" element={
              <SearchPage filteredRestaurants={filteredRestaurants} setFilteredRestaurants={setFilteredRestaurants} myList={myList} setMyList={setMyList} restaurantsArray={restaurantsArray} currentUser={currentUser} />
            } />

            <Route path="details/:restaurantName" element={
              <MoreInformationPage restaurantsArray={restaurantsArray}/>
            } />

            <Route path="signin" element={
              <SignInPage currentUser={currentUser} setCurrentUser={setCurrentUser} />
            } />

            {/* Protected routes; user has to be logged in to access */}
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
                  description={description}
                  setDescription={setDescription}
                  addRestaurant={addRestaurant}
                  setFilteredRestaurants={setFilteredRestaurants}
                  restaurantsArray={restaurantsArray}
                />
              } />

              <Route path="mylist" element={
                <MyListPage myList={myList} setMyList={setMyList} currentUser={currentUser} />
              } />
            </Route>
          </Route>

          {/* route to handle incorrect URLS */}
          <Route path="*" element={<Navigate to="/home" />} />

        </Routes>
      </div>

      <footer>
        <p> © 2022 Foody</p>
      </footer>
    </div>
  )

}

function ProtectedPage(props) {
  //determine if user is logged in
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

