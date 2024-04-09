import React, { useEffect } from 'react'
import './videoMetaData.scss'
import moment from 'moment'
import numeral from 'numeral'
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import ShowMoreText from 'react-show-more-text'
import { useDispatch, useSelector } from 'react-redux'
import { getChannelDetails, checkSubscriptionStatus } from '../../redux/action/channelAction'
const VideoMetaData = ({ video: { snippet, statistics }, videoId }) => {
  const { channelId, channelTitle, description, title, publishedAt } = snippet;
  const { viewCount, likeCount } = statistics;
  const { snippet: channelSnippet, statistics: channelStatistics, } = useSelector(state => state?.channelDetails?.channel)
  const subscriptionStatus = useSelector(state => state.channelDetails.subscriptionStatus)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChannelDetails(channelId))
    dispatch(checkSubscriptionStatus(channelId))
  }, [dispatch, channelId])


  return (
    <div className='videoMetaData py-2'>
      <div className="videoMetaData__top">
        <h5>{title}</h5>
        <div className='d-flex align-items-center justify-content-between py-1'>
          <span>
            {numeral(viewCount).format('0.a')} Views •{' '}
            {moment(publishedAt).fromNow()}
          </span>
          <div>
            <span className='mr-3'>
              <MdThumbUp size={26} />{numeral(likeCount).format('0.a')}
            </span>
            <span className='mr-3'>
              <MdThumbDown size={26} />
            </span>
          </div>
        </div>
      </div>

      <div className="videoMetaData__channel  d-flex justify-content-between align-items-center py-3 my-2">
        <div className='d-flex'>
          <img src={channelSnippet?.thumbnails?.default?.url} alt="img" className='rounded-circle' />
          <div className='d-flex flex-column'>
            <span>{channelTitle}</span>
            <span>{numeral(channelStatistics?.subscriberCount).format('0.a')} Subscribers</span>
          </div>
        </div>
        <button className='btn border-0 p-2 m-2'>{subscriptionStatus ? 'Subscribed' : 'Subscribe'}</button>
      </div>

      <div className="videoMetaData__description">
        <ShowMoreText
          lines={3}
          more="...more"
          less="Show less"
          anchorClass='showMoreText'
          expanded={false}

        >
          {description}
        </ShowMoreText>
      </div>
    </div>
  )
}

export default VideoMetaData
