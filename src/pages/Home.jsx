import React from 'react'
import { useDispatch } from 'react-redux';
import RecipeReviewCard from '../components/Card';
import { Functionalities } from '../components/Functionalities';

export const Home = () => {

const [itemsData, setItemsData]=React.useState({
  isLoading:false,
  isErr:false,
  data:[]
})

  const token =5;
const itemsFetch=(url,method,bodyData,header)=>{
setItemsData(prev=>({...itemsData,isLoading:true, isErr:false}))
  fetch(url,{
    method
    // body:JSON.stringify(bodyData),
    // header
  })
  .then(res=>res.json())
  .then(result=>{

    setItemsData({
      isLoading:false,
      isErr:false,
      data: result
    })
  })
  .catch(err=>setItemsData({
    isLoading:false,
    isErr:true
  }))
}

React.useEffect(() => {
  itemsFetch( `http://localhost:8080/products`,"GET",null,null)
}, [])


  return (
    <div>
      <Functionalities/>
      {
        itemsData.data.map(ele=> <RecipeReviewCard key={ele.id}  item={ele}/>)
      }
    </div>
  )
}
