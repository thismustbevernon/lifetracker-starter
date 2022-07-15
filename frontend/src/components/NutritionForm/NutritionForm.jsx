import * as React from "react"
import "./NutritionForm.css"
import apiClient from "../../services/apiClient"
import {useState} from "react"
import { useNavigate} from "react-router-dom"

export default function NutritionForm(props){
    console.log("propsNf", props)
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        image_url: "",
        name: "",
        category: "",
        quantity: "",
        calories: ""
    })
    const handleOnInputChange = (event) =>{
        setForm((f) => ({ ...f, [event.target.name]: event.target.value}))
    }
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        props.handleNutritonForm()
        setIsLoading(true)
        const { data , error} = await apiClient.createNutrition({name: form.name, category: form.category, quantity: form.quantity, calories: form.calories, image_url: form.image_url})
        if(error){
            setErrors(error)
        }
        if(data){
            setForm({name: "", category: "", quantity: "", calories: "", image_url: ""})
            console.log("data", data.nutrition)
            props.addNutrition(data.nutrition)
            navigate("/nutrition")
        }
        setIsLoading(false)
    }
    return (
        <div className="nutrition-form">
            <div className="container">
                <h2>Record Nutrition</h2>
                {/* {errors.form && <span className="error">{errors.form}</span>} */}
                {/* {Boolean(errors) && <span className="error">{errors}</span>} */}
                <br/>
                <div className="inputs">
                    <div className="form-input">
                        <label for="name">Name</label>
                        <input type="text" name="name" placeholder="Nutrition name" value={form.name} onChange={handleOnInputChange}/>
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>
                    <div className="form-input">
                        <label for="category">Category</label>
                        <input type="text" name="category" placeholder="Nutrition category" value={form.category} onChange={handleOnInputChange}/>
                        {errors.category && <span className="error">{errors.category}</span>}
                    </div>
                    <div className="split-form-input">
                        <div className="form-input">
                            <label for="quantity">Quantity</label>
                            <input type="number" name="quantity" min="1" max="10000000000" value={form.quantity} onChange={handleOnInputChange}/>
                            {errors.quantity && <span className="error">{errors.quantity}</span>}
                        </div>
                        <div className="form-input">
                            <label for="calories">Calories</label>
                            <input type="number" name="calories" min="0" max="1000000000" step="10" value={form.calories} onChange={handleOnInputChange}/>
                            {errors.calories && <span className="error">{errors.calories}</span>}
                        </div>
                    </div>
                    <div className="form-input">
                        <label for="image_url">Image URL</label>
                        <input type="text" name="image_url" placeholder="url" value={form.image_url} onChange={handleOnInputChange}/>
                        {errors.image_url && <span className="error">{errors.image_url}</span>}
                    </div>
                </div>
                <button className="save-btn" disabled={isLoading} onClick={handleOnSubmit}>{isLoading ? "Loading..." : "Save"}</button>
            </div>
        </div>
    )
}