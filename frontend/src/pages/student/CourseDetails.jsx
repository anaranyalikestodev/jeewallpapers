import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/student/Loading";
export default function CourseDetails() {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);

  const {
    allCourses,
    calculateRating,
    calculateChapterTime,
    calculateCourseDuration,
    calculateNoOfLectures,
  } = useContext(AppContext);

  const fetchCourseData = async () => {
    const findCourse = allCourses.find((course) => course._id === id);
    setCourseData(findCourse);
  };

  useEffect(() => {
    fetchCourseData();
  }, []);

  return courseData ? (
    <>
      <div className="flex md:flex-row flex-col-reverse gap-10 relative items-start bg-linear-to-b from-cyan-200/70 justify-between md:px-36 px-8 md:pt-30 pt-20 text-left">
        <div className="absolute top-0 left-0 w-full h-section-height -z-1 "></div>

        {/*left column*/}
        <div className="max-w-xl z-10 text-gray-500">
          <h1
            className="md:course-details-heading-large course-details-heading-small 
          font-semibold text-gray-800"
          >
            {courseData.courseTitle}
          </h1>
          <p
            className="pt-4 md:text-base text-sm"
            dangerouslySetInnerHTML={{
              __html: courseData.courseDescription.slice(0, 200),
            }}
          ></p>

          {/*reviews and ratings*/}
          <div className="flex items-center space-x-2 pt-3 pb-1 text-sm">
            <p>{calculateRating(courseData).toFixed(2)}</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={
                    i < Math.floor(calculateRating(courseData))
                      ? "/orange_star.png"
                      : "/white_star.png"
                  }
                  alt=""
                  className="w-3.5 h-3.5"
                />
              ))}
            </div>
            <p className="text-blue-600">
              ({courseData.courseRatings.length}
              {courseData.courseRatings.length > 1 ? "ratings" : "rating"})
            </p>
            <p className="text-gray-500">
              {courseData.enrolledStudents.length}
              {courseData.enrolledStudents.length > 1 ? "students" : "student"}
            </p>
          </div>
          <p className="text-sm">
            Course By{" "}
            <span className="text-blue-600 underline">
              {courseData.educator.name}
            </span>
          </p>
          <div className="pt-8 text-gray-800">
            <h2 className="font-semibold text-xl">Course Structure</h2>
            <div className="pt-5">
              {" "}
              {courseData.courseContent.map((chapter, index) => (
                <div
                  key={index}
                  className="border border-gray-300 bg-white mb-2 rounded"
                >
                  <div className="flex items-center justify-between px-4 py-3 cursor-pointer select-none">
                    <div className="flex items-center gap-2">
                      <img src="/down_arrow.png" alt="arrow icon" />
                      <p className="font-medium md:text-base text-sm">
                        {chapter.chapterTitle}
                      </p>
                    </div>
                    <p className="text-sm md:default">
                      {chapter.chapterContent.length} lectures -
                      {calculateChapterTime(chapter)}
                    </p>
                  </div>

                  <div>
                    <ul>
                      {chapter.chapterContent.map((lecture, i) => (
                        <li key={i}>
                          <img
                            src="/play_icon.png"
                            alt="play_icon"
                            className="w-4 h-4 ,t-1"
                          />
                          <div>
                            <p>{lecture.lectureTitle}</p>
                            <div>{lecture.isPreviewFree && <p>Preview</p>}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/*right column*/}
        <div></div>
      </div>
    </>
  ) : (
    <Loading />
  );
}
