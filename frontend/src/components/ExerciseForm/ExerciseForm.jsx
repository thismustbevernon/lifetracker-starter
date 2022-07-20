import * as React from "react";
import "./ExerciseForm.css";
import apiClient from "../../services/apiClient";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ExerciseForm(props) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    category: "",
    duration: "",
    intensity: "",
  });
  const handleOnInputChange = (event) => {
    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { data, error } = await apiClient.createExercise({
      name: form.name,
      category: form.category,
      duration: form.duration,
      intensity: form.intensity,
    });
    if (error) {
      setErrors(error);
    }
    if (data) {
      setForm({ name: "", category: "", duration: "", intensity: "" });
      props.addExercise(data.exercise);
      navigate("/exercise");
    }
    setIsLoading(false);
  };
  return (
    <div className="exercise-form">
      <div className="container">
        <h2>Add Exercise</h2>
        <br />
        <div className="inputs">
          <div className="form-input">
            <label for="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Exercise name"
              value={form.name}
              onChange={handleOnInputChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-input">
            <label for="category">Category</label>
            <input
              type="text"
              name="category"
              placeholder="Exercise category"
              value={form.category}
              onChange={handleOnInputChange}
            />
            {errors.category && (
              <span className="error">{errors.category}</span>
            )}
          </div>
          <div className="split-form-input">
            <div className="form-input">
              <label for="duration">Duration (min)</label>
              <input
                type="number"
                name="duration"
                min="1"
                max="10000000"
                value={form.duration}
                onChange={handleOnInputChange}
              />
              {errors.duration && (
                <span className="error">{errors.duration}</span>
              )}
            </div>
            <div className="form-input">
              <label for="intensity">Intensity (1-10)</label>
              <input
                type="number"
                name="intensity"
                min="1"
                max="10"
                value={form.intensity}
                onChange={handleOnInputChange}
              />
              {errors.intensity && (
                <span className="error">{errors.intensity}</span>
              )}
            </div>
          </div>
        </div>
        <button
          className="save-btn"
          disabled={isLoading}
          onClick={handleOnSubmit}
        >
          {isLoading ? "Loading..." : "Save"}
        </button>
      </div>
    </div>
  );
}
