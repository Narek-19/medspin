import { setBackground } from "./producer";
import {setSlider} from "./producer";

const initialState = {
  background1: "red",
  homeSlider: [
    {
      title: "History About Mri 1",
      img: "https://klass.novaclearning.com/theme/images/default.jpg",
      des: "Learn About MRI History",
    },
    {
      title: "What Is MRI 2",
      img: "https://thumb9.shutterstock.com/mosaic_250/177774240/1485832811/stock-vector-internet-education-concept-e-learning-resources-distant-online-courses-vector-line-icon-1485832811.jpg",
      des: "Learn what is MRI",
    },
    {
      title: "Why MRI 3",
      img: "https://klass.novaclearning.com/theme/images/default.jpg",
      des: "MRI use",
    },
    {
      title: "Online Mri 4",
      img: "https://www.freeiconspng.com/thumbs/courses-icon/courses-icon-8.png",
      des: "Online MRI",
    },
    {
      title: "New Courses 5",
      img: "https://www.freeiconspng.com/thumbs/courses-icon/courses-icon-8.png",
      des: "Online MRI",
    },
  ],
  blogSlider: [
    {
      title: "How you can learn with our site?",
      img: "http://unblast.com/wp-content/uploads/2020/10/Online-Learning-Vector-Illustration.jpg",
      des:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    },
    {
      title: "Make Destination for your future",
      img: "https://creativebonito.com/wp-content/uploads/2019/07/learning-education-illustration-concept-templates-cover.png",
      des:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    },
    {
      title: "Make Smth for Learning",
      img: "https://img.graphicsurf.com/2020/06/E-learning-concept-illustration.jpg",
      des:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. ",
    },
    {
      title: "Learn and Create Your future",
      img: "https://www.kindpng.com/picc/m/789-7895082_online-learning-illustration-png-transparent-png.png",
      des:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    {
      title: "Some advices for learning",
      img: "http://unblast.com/wp-content/uploads/2020/10/Online-Learning-Vector-Illustration.jpg",
      des:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    },
  ],
};
const global = (state = initialState, action)=>{
    switch(action.type){
        case "SET_BACKGROUND":
            return setBackground(state,action);
        case "getSlider":
            return setSlider(state,action);
        case "getBlogSlider":
          return state;
        default:
            return state;
    }
}
export default global;