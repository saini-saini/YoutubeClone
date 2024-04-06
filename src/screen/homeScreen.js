import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoriesBar from '../components/categoriesBar/categoriesBar'
import Video from '../components/video/video'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideos } from '../redux/action/videos.sction'
const HomeScreen = () => {

  const dispatch = useDispatch();
const {videos} = useSelector(state => state.homeVideos)

  useEffect(() => {
    dispatch(getPopularVideos())
  },[dispatch])

  return (
    <Container>
      <CategoriesBar />
      <Row>
        {videos.map((video) => (
          <Col lg={3} md={4} key={video.id}>
            <Video  video={video}/>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default HomeScreen
