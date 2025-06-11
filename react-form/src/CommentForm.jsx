import { useState } from "react";

export default function CommentForm({ addNewComment }) {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: "",
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

 
  let handleSubmit = (event) => {
    addNewComment(formData);
    event.preventDefault();
    setFormData({
      username: "",
      remark: "",
      rating: "",
    });
  };

  return (
    <>
      <h4>Give a Comment!</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: &nbsp;</label>
        <input
          id="username"
          type="text"
          placeholder="username"
          onChange={handleInputChange}
          value={formData.username}
          name="username"
        />
        <br /><br />
        <label htmlFor="remarks">Remark: &nbsp;</label>
        <textarea
          name="remarks"
          id="remarks"
          cols="30"
          rows="3"
          onChange={handleInputChange}
          value={formData.remarks}
          placeholder="Add a remark"
        />
        <br /><br />
        <label htmlFor="rating">Rating: &nbsp;</label>
        <input
          id="rating"
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          onChange={handleInputChange}
          value={formData.rating}
          name="rating"
        />
        <br /><br />
        <button type="submit">Add Comment</button>
      </form>
    </>
  );
}
