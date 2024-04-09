import React, { useEffect } from 'react'
import "./watchScreen.scss"
import { Col, Row } from 'react-bootstrap'
import VideoMetaData from '../../components/videoMetaData/videoMetaData'
import Comments from '../../components/comments/comments'
import VideoHorizontal from '../../components/videoHorizontal/videoHorizontal'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getVideoById } from '../../redux/action/videos.sction'
const WatchScreen = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getVideoById(id))
    }, [dispatch, id])

    const { video, loading } = useSelector(state => state.selectedVideo);

    // if (!video) {
    //     return <h6>Loading...</h6>;
    // }

    return (
        <Row>
            <Col lg={8}>

                <div className='watchScreeen__player'>
                    <iframe
                        src={`https://www.youtube.com/embed/${id}`}
                        frameborder="0"
                        title={video?.snippet?.title}
                        allowFullScreen
                        width={"100%"}
                        height={"100%"}
                    ></iframe>
                </div>

                <VideoMetaData video={video} videoId={id} />

                <Comments />
            </Col>

            <Col lg={4}>
                {[...Array(10)].map(() => (
                    <VideoHorizontal />
                ))
                }
            </Col>
        </Row>
    )
}

export default WatchScreen
