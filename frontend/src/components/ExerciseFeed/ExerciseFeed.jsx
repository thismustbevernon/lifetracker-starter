import * as React from "react"
import "./ExerciseFeed.css"
import ExerciseCard from "../ExerciseCard/ExerciseCard"
import apiClient from "../../services/apiClient"
import { useEffect, useState } from "react"

export default function ExerciseFeed(props){
    const overview = [
        {id: 1, name : "apple", url : "", calories : 500, quantity: 2, date: "01/11/2000", category: "fruit"},
        {id: 2, name : "milk", url : "", calories : 100, quantity: 3, date: "12/11/2055", category: "dairy"},
        {id: 3, name : "carrot", url : "", calories : 220, quantity: 1, date: "01/16/2023", category: "vegetables"},
        {id: 4, name : "bread", url : "", calories : 660, quantity: 1, date: "01/16/2023", category: "carbs"}
    ]
    const [isFetching, setIsFetching] = useState(false)
    const [exercise, setExercise] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchExercises = async () => {
          if(!(Object.keys(props.user).length === 0)){
            setIsFetching(true)
            console.log("users.", props.user)
        
            const { data, error } = await apiClient.listExercises(props.user.id)
            if(error){
                setError(error)
            }
            if(data){
                console.log("data", data)
                setExercise(data.exercises)
            }
            setIsFetching(false)
          }
        }
    
        fetchExercises()
      }, [])
    return (
        <div className="exercise-feed">
            {exercise.length === 0 ?
            <div className="empty">
                <h2>Nothing here yet.</h2>
            </div>
            :
            exercise.map((element, idx) => {
                const date = new Date(element.created_at)
                const enUSFormatter = new Intl.DateTimeFormat('en-US')
                return <ExerciseCard key={idx} name={element.name} duration={element.duration} intensity={element.intensity} category={element.category} created_at={enUSFormatter.format(date)}></ExerciseCard>
            })}
        </div>
    )
}