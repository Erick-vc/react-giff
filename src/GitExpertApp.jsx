import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GitExpertApp = () => {
   const [categories, setCategories] = useState(["One Punch"]);

   // const handleAdd = () => {
   //   setCategories ([...categories, 'Dead Noth'])
   // }

   return (
      <>
         <h2>GitExpertApp</h2>
         <AddCategory setCategories={setCategories} />

         <hr />

         <ul>
            {categories.map((category) => (
               <GifGrid key={category} category={category} />
            ))}
         </ul>
      </>
   );
};

export default GitExpertApp;
