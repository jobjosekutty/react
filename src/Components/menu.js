import React, { useEffect,useState } from 'react'
import axios from 'axios';

const Menu = () => {

    const [count,setCount] = useState(0);
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchData(){
        setLoading(true);
        try {
          const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a'); // Replace with your API endpoint
          setMenu(response.data.meals);
          console.log(response.data.meals)
      } catch (err) {
          setError(err);
      } finally {
     setLoading(false);
      }
      
        }

        useEffect(()=>{
            console.log("inside useeffect=====>>>");
            fetchData()

        },[])


 let menuImage =       menu.map((item)=>{
            return (
             <img src={item.strMealThumb}/>

            )

        })


        return (
            <div>
                {loading ? 
                    <div>Loading...</div>
                 : error ?
                    <div>Error loading menu: {error.message}</div>
                 : 
                    menuImage
                }
            </div>
        );
}

export default Menu