import { connect } from "react-redux";
import React from "react";
import {useParams} from 'react-router-dom'
import { getStudent } from "../../../redux/actions";
import { selectStudent } from "../../../redux/selectors";
import { useEffect,useCallback,useState } from "react";
import { MedspinTitle } from "../../../components/MedspinTitle";

import { InfoBar } from "./InfoBar";

const CurrentStudent = (props) =>{
    const {student,getStudent} = props;
    const [fetch,setFetch] = useState(false);
    const studentId = useParams().id;


    const currentStudent = useCallback(async () => {
        try {
          getStudent(studentId);
          setFetch(true);
        } catch (e) {}
      }, [studentId])

    useEffect(()=>{
        currentStudent();
    },[currentStudent])

    return (
        <div>
            {
                student !==null ? (
                    <>
                        <MedspinTitle title = {`Student ${student.name}`}/>
                        <InfoBar student = {student}/>
                    </>
                  
                ) : <p>Loading data...</p>
            }
            
        </div>
    )
}
const mapStateToProps = (state)=> ({
    student:selectStudent(state)
})
export default connect(mapStateToProps,{getStudent})(CurrentStudent);