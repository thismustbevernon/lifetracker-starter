import * as React from "react";
import "./SleepForm.css";
import apiClient from "../../services/apiClient";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SleepForm(props) {
  console.log("propsSN", props);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    start_time: "",
    end_time: "",
  });
  const handleOnInputChange = (event) => {
    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { data, error } = await apiClient.createSleep({
      start_time: form.start_time,
      end_time: form.end_time,
    });
    if (error) {
      setErrors(error);
    }
    if (data) {
      setForm({ start_time: "", end_time: "" });
      props.addSleep(data.sleep);
      navigate("/sleep");
    }
    setIsLoading(false);
  };
  return (
    <div className="sleep-form">
      <div className="container">
        <h2>Add Sleep</h2>
        {/* {Boolean(errors.form) && <span className="error">{errors.form}</span>} */}
        <br />
        <div className="inputs">
          <div className="form-input">
            <label for="start_time">Start Time</label>
            <input
              type="datetime-local"
              name="start_time"
              value={form.start_time}
              onChange={handleOnInputChange}
            />
            {errors.start_time && (
              <span className="error">{errors.start_time}</span>
            )}
          </div>
          <div className="form-input">
            <label for="end_time">End Time</label>
            <input
              type="datetime-local"
              name="end_time"
              value={form.end_time}
              onChange={handleOnInputChange}
            />
            {errors.end_time && (
              <span className="error">{errors.end_time}</span>
            )}
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
