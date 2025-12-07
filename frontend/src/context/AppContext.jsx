import { createContext, useEffect,useState } from "react";
import { dummyCourses } from "../assets/data";
import { useNavigate } from "react-router-dom";
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate=useNavigate()

  const [allCourses, setAllCourses] = useState([]);
  const [isEducator,setisEducator]=useState([]);

  //Fetch All Courses
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };
  //Function to calculate avergae rating of course
  const calculateRating=(course)=>{
    if (course.courseRatings.length==0){
      return 0;
    }
    let totalRating=0
    course.courseRatings.forEach(rating=>{
      totalRating+=rating.rating
    })
    return totalRating/course.courseRatings.length
  }
  useEffect(() => {
    fetchAllCourses();
  }, []);

  return (
    <AppContext.Provider value={{ currency, allCourses,navigate, calculateRating}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
