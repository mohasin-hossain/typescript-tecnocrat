{
  //

  // Constraints in typescirpt

  // Another example
  ///////

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Python course";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent<{
    name: string;
    id: number;
    email: string;
    devType: string;
  }>({
    name: "mohasin",
    id: 2,
    email: "m@gmail.com",
    devType: "Pro",
  });

  const student2 = addCourseToStudent({
    name: "rahim",
    id: 3,
    email: "r@gmail.com",
    hasWatch: true,
  });

  //
}
