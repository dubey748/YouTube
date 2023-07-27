import React from 'react'

const Videos = React.memo(({videos}) => {
  console.log(videos)
  return (
    <div>Videos</div>
  )
})

export default Videos