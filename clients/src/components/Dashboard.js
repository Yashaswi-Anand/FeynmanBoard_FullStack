import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {


  const [topicList, setTopicList] = useState([])


  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:8000/topics`)
      const data = await res.json()
      console.log(data);
      setTopicList(data.topics)
      // console.log('Topics', topicList[0].topicName, topicList[0].percentage);
    })()
  }, [])


  return (
    <div className='container mt-5'>

      <div className='row'>
        <div className='col-3'><h3 className='text-secondary'><i class="fa-solid fa-user"></i>&nbsp;{localStorage.getItem('username')}</h3></div>
        <div className='col-6'></div>
        <div className='col-3'><Link to='/addTopic'><h4 className='removeUnderline'><i class="fa-solid fa-plus"></i>ADD TOPIC</h4></Link></div>
      </div>
      <hr />
      
      <div className='row'>
        <div className='col-2'></div>
        <div className='col-10'>
          <div className='row '>
            <div className='col-3 text-success fs-3 topic-text'>S.No</div>
            <div className='col-2 text-success fs-3 topic-text'>Topic</div>
            <div className='col-3 text-success fs-3 topic-text'>Percentage</div>
          </div>

          {topicList && topicList.length > 0
            ? topicList.map((i, index) =>
              <div className='row'>
                <div className='col-3 text-secondary fs-3 topic-text'>{index + 1}.</div>
                <div className='col-2 text-secondary fs-3 topic-text'>{i.topicName}</div>
                <div className='col-3 text-secondary fs-3 topic-text'>{i.percentage}%</div>
              </div>
            )
            : <h4 className='topic-text no-date'>No data available</h4>}
        </div>

      </div>

    </div>
  )
}

export default Dashboard