import * as React from "react"
import "./NutritionFeed.css"
import NutritionCard from "../NutritionCard/NutritionCard"
import apiClient from "../../services/apiClient"
import { useEffect, useState} from "react"

export default function NutritionFeed(props){
    const overview = [
        {id: 1, name : "apple", url : "", calories : 500, quantity: 2, date: "01/11/2000", category: "fruit"},
        {id: 2, name : "milk", url : "", calories : 100, quantity: 3, date: "12/11/2055", category: "dairy"},
        {id: 3, name : "carrot", url : "", calories : 220, quantity: 1, date: "01/16/2023", category: "vegetables"},
        {id: 4, name : "bread", url : "", calories : 660, quantity: 1, date: "01/16/2023", category: "carbs"}
    ]
    const [isFetching, setIsFetching] = useState(false)
    const [nutrition, setNutrition] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchNutritions = async () => {
          if(!(Object.keys(props.user).length === 0)){
            setIsFetching(true)
        
            const { data, error } = await apiClient.listNutritions(props.user.id)
            if(error){
                setError(error)
            }
            if(data){
                setNutrition(data.nutritions)
            }
            setIsFetching(false)
          }
        }
    
        fetchNutritions()
      }, [])
    return (
        <div className="nutrition-feed">
            {nutrition.length === 0?
            <div className="empty">
                <h2>Nothing here yet.</h2>
            </div>
            :
            nutrition.map((element, idx) => {
                const date = new Date(element.created_at)
                const enUSFormatter = new Intl.DateTimeFormat('en-US')
                return <NutritionCard key={idx} quantity={element.quantity} imageUrl={element.image_url} name={element.name} calories={element.calories} category={element.category} createdAt={enUSFormatter.format(date)} id={element.id}></NutritionCard>
            })}
        </div>
    )
}