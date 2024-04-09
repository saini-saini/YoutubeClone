import React from 'react'
import './videoHorizontal.scss'
import { AiFillEye } from 'react-icons/ai'
import request from '../../api'
import moment from 'moment'
import numeral from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Col, Row } from 'react-bootstrap'

const VideoHorizontal = () => {

  const seconds = moment.duration(100).asSeconds()
  const _duration = moment.utc(seconds * 1000).format('mm:ss')

  return <Row className='py-2 m-1 videoHorizontal align-items-center'>
    <Col xs={6} md={4} className='videoHorizontal__left'>
      <LazyLoadImage
        src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
        effect='blur'
        className='videoHorizontal__thumbnail'
        wrapperClassName='videoHorizontal__thumbnail-wrapper' />

      <span className='videoHorizontal__duration'>
        {_duration}
      </span>
    </Col>

    <Col xs={6} md={8} className='p-0 videoHorizontal__right'>
      <p className='videoHorizontal__title mb-1'>video title</p>
      <div className="videoHorizontal__details">
        <AiFillEye />{numeral(1000).format('0.a')} Views •{' '}
        {moment(`2021-01-01`).fromNow()}
      </div>
      <div className="videoHorizonl__Channel d-flex align-items-center my-1">
        {/* <LazyLoadImage
        src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
        effect='blur' /> */}
      <p>channel name</p>
      </div>
    </Col>
  </Row>
}

export default VideoHorizontal
