import React from "react";
import DataTable from "../../components/DataTable";
import AddStudentCourseModal from "./AddStudentCourseModal";
import useModal from "../../hooks/useModal";

const columns = [
  { field: "name", headerName: "Nombre", width: 150 },
  { field: "amount", headerName: "Importe", width: 150 },
];

const StudentCourses = ({ courses, setStudentData }) => {
  const { isShowing, toggleModal } = useModal();

  const onConfirm = (course) => {
    setStudentData((prevState) => ({
      ...prevState,
      courses: [...prevState.courses, course],
    }));
  };

  return (
    <>
      {courses && (
        <DataTable
          columns={columns}
          rows={courses}
          hideFooterPagination={true}
        />
      )}
      <AddStudentCourseModal
        isShowing={isShowing}
        toggleModal={toggleModal}
        onConfirm={onConfirm}
        studentCourses={courses}
      />
    </>
  );
};

export default StudentCourses;
