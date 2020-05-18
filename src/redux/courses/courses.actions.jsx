import CourseActionTypes from "./courses.types";
import {
  firestore,
  convertCollectionSnapShotToMap,
} from "../../firebase/firebase.utils";

export const fetchCoursesStart = () => ({
  type: CourseActionTypes.FETCH_COURSES_START,
});

export const fetchCoursesSuccess = (collectionsMap) => ({
  type: CourseActionTypes.FETCH_COURSES_SUCCESS,
  payload: collectionsMap,
});

export const fetchCoursesFailure = (errorMessage) => ({
  type: CourseActionTypes.FETCH_COURSES_FAILURE,
  payload: errorMessage,
});

export const fetchCoursesStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("courses");
    dispatch(fetchCoursesStart());

    collectionRef
      .get()
      .then((snapShot) => {
        const collectionsMap = convertCollectionSnapShotToMap(snapShot);
        dispatch(fetchCoursesSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCoursesFailure(error.message)));
  };
};

export const enrollInCourse = (course) => ({
  type: CourseActionTypes.ENROLL_COURSE,
  payload: course,
});
