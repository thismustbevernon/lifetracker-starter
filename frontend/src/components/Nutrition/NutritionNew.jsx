// import * as React from "react";

// export default function NutritionNew() {
//   return <div>THIS IS THE NUTRITION NEW PAGE</div>;
// }

// import { Button, InputField } from "components"
// // import { useNutritionNewForm } from "hooks/useNutritionNewForm"
import "./NutritionNew.css"

export default function NutritionNew() {
  //   const { form, errors, isLoading, handleOnSubmit, handleOnChange } = useNutritionNewForm()

  return (
    <div className="NutritionNew">
      <h2>Record Nutrition</h2>

      <div className="form">
        {/* {errors.form && <span className="error">{errors.form}</span>} */}
  
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="Name"
            placeholder="Nurition Name"
            // value={form.l}
            // onChange={handleOnInputChange}
          />
          {/* {errors.lastName && <span className="error">{errors.lastName}</span>} */}
        </div>

        <div className="input-field">
          <label htmlFor="name">Category</label>
          <input
            type="text"
            name="category"
            placeholder="Nurition category"
            // value={form.l}
            // onChange={handleOnInputChange}
          />
          {/* {errors.lastName && <span className="error">{errors.lastName}</span>} */}
        </div>



        <div className="split-input-field">
          <label htmlFor="name">quantity</label>
          <input
            type="number"
            name="quantity"
            placeholder="Nurition quantity"
            // value={form.quantity}
            // error={errors.quantity}
            // min={1}
            // max={100000000}
            // handleOnChange={handleOnChange}
            
          />
          {/* {errors.lastName && <span className="error">{errors.lastName}</span>} */}
        </div>


        <div className="split-input-field">
          <label htmlFor="name">calories</label>
          <input
            type="number"
            name="calories"

            label="Calories"
            // value={form.calories}
            // error={errors.calories}
            // handleOnChange={handleOnChange}
            // min={0}
            // max={10000000000}
            // step={10}
          />
           
    
          {/* {errors.lastName && <span className="error">{errors.lastName}</span>} */}
        </div>



        <div className="input-field">
          <label htmlFor="name">imageUrl</label>
          <input
            type="text"
            name="imageUrl"
            label="Image URL"
            // value={form.imageUrl}
            // error={errors.imageUrl}
            // placeholder="http://www.food-image.com/1"
            // handleOnChange={handleOnChange}
        
          />{" "}
            {/* {errors.lastName && <span className="error">{errors.lastName}</span>} */}
         </div>

        <button
          type="primary"
          color="aqua"
          //   isLoading={isLoadings}
          //   isDisabled={isLoading}
          //   onClick={() => handleOnSubmit()}
        >
          Save
        </button> 
      </div>
    </div>
  );
}
