import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoriesBar from '../components/categoriesBar/categoriesBar'
import Video from '../components/video/video'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideos, getVideosByCategory } from '../redux/action/videos.sction'
import InfiniteScroll from 'react-infinite-scroll-component';
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonVideo from '../components/skelton/skeltonVideo'

const HomeScreen = () => {

  const dispatch = useDispatch();
  const { videos, activeCategory, loading } = useSelector(state => state.homeVideos)

  useEffect(() => {
    dispatch(getPopularVideos())
  }, [dispatch])

  const fetchData = () => {
    if (activeCategory === 'All') dispatch(getPopularVideos())
    else {
      dispatch(getVideosByCategory(activeCategory))
    }
  }

  return (
    <Container>
      <CategoriesBar />
        <InfiniteScroll
          dataLength={videos.length}
          next={fetchData}
          hasMore={true}
          loader={
            <div className='spinner-border text-danger d-block m-auto'> </div>
          }
        >
          <Row>
          {!loading ? videos.map((video) => (
            <Col lg={3} md={4} key={video.id}>
              <Video video={video} />
            </Col>
          ))
            : [...Array(20)].map(() => (
              <Col lg={3} md={4}>
                <SkeletonVideo />
              </Col>
            ))
          }
      </Row>
        </InfiniteScroll>
    </Container>
  )
}

export default HomeScreen
