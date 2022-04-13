import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
import {useHistory} from 'react-router-dom'
import { AdminDashboard } from '../components/admin/AdminDashboard'

export const CreatePage = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)
  const {request} = useHttp()
  const [link, setLink] = useState('')
  const [title, setTitle] = useState('')
  const [desText,setDesText] = useState('');
  const [courseVideo,setCourseVideo] = useState('');
  const [courseImg, setCourseImg] = useState('');

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const pressHandler = async event => {
    if (event.key === 'Enter') {
      try {
        const data = await request('/api/link/generate', 'POST', {from: link,title:title, des: desText, img:courseImg, video:courseVideo}, {
          Authorization: `Bearer ${auth.token}`
        })
        history.push(`/detail/${data.link._id}`)
      } catch (e) {}
    }
  }

  return (
    <div className="row">
      <div className="col s8 offset-s2" style={{paddingTop: '2rem'}}>
        <div className="input-field">
          <input
            placeholder="Course href to another site"
            id="link"
            type="text"
            value={link}
            onChange={e => setLink(e.target.value)}
            onKeyPress={pressHandler}
          />
          <input
            placeholder="Title of Course"
            id="link"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            onKeyPress={pressHandler}
          />
          <input
            placeholder="Add descreption"
            value = {desText}
            onChange = {e => setDesText(e.target.value)}
            onKeyPress={pressHandler}
          />
          <input
            placeholder= "Youtube Video"
            value = {courseVideo}
            onChange = {e =>setCourseVideo(e.target.value)}
            onKeyPress={pressHandler}
          />
          <input
            placeholder= "Course Img"
            value = {courseImg}
            onChange = {e =>setCourseImg(e.target.value)}
            onKeyPress={pressHandler}
          />
          <label htmlFor="link">Введите ссылку</label>
        </div>
      </div>
    </div>
  )
}
