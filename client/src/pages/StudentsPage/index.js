import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { MedspinTitle } from "../../components/MedspinTitle";
import { getStudents } from "../../redux/actions/index";
import { selectStudents } from "../../redux/selectors";
import {Table} from './Table/index';
import * as styles from './style.module.css';

const StudentsPage =(props)=>{
    
    const { students, getStudents } = props;
    useEffect(()=>{
        getStudents();
    },[])

    return(
        <div className = {styles.StudentsPage}>
        <MedspinTitle title = "Medspin Students"/>
        <Table students = {students}/>
        </div>
    )
}
const mapStateToProps =(state)=> ({
    students:selectStudents(state)
})
export default connect(mapStateToProps,{getStudents})(StudentsPage)