const course={
    coursename: "js in hindi",
    price:"999",
    courseInstructor:"banti"
}
//course.courseInstructor

const{courseInstructor:instructor}=course

console.log(instructor)

// {
//     "name":"banti",
//     "coursename":"js i hindi",
//     "price":"free"
// }