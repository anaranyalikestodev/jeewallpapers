import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function CourseCard({ course }) {
  
  const {currency}=useContext(AppContext)
    return (
    <div>
      <img src={course.couruseThumbnail} alt="" />
      <div>
        <h3>{course.courseTitle}</h3>
        <p>{course.educator.name}</p>
        <div>
          <p>4.5</p>
          <div>
            {[...Array(5)].map((_, i) => (
              <img key={i} src={"star.png"} alt='' />
            ))}
          </div>
          <p>22</p>
        </div>
        <p>{currency}{(course.coursePrice*(1-course.discount/100)).toFixed(2)}</p>
      </div>
    </div>
  );
}
