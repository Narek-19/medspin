import React from "react";
import { connect } from "react-redux";
import {selectBlogSlider} from "../../redux/selectors"
import * as styles from "./style.module.css";

const MedspinBlogSlider =(props)=> {
    const { blogSlider} = props;
    console.log(blogSlider);
    return(
        <div className = {styles.MedspinBlogSlider}>
            <h1>Medspin Blog Slider</h1>

        </div>
    )
}
const mapStateToProps =(state)=>{
    return({
        blogSlider:selectBlogSlider(state)
    })
}
export default connect(mapStateToProps)(MedspinBlogSlider);