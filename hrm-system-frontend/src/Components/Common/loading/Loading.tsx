import React from 'react'

export  function LoadingSpinner() {
  return (
    <>
    <div className="flex justify-center items-center h-screen">
  <span className="loading loading-spinner loading-lg"></span>

</div>
    </>
  )
}



export  function LoadingRing() {
    return (
      <>
      <div className="flex justify-center items-center h-screen">
      <span className="loading loading-ring loading-xl"></span>
  
  </div>
      </>
    )
  }