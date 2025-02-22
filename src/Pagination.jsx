import React from 'react'

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
    let pages = []
    let totalPages = Math.ceil(totalPosts / postsPerPage)
    console.log(totalPosts, postsPerPage)

    for(let i=1; i <= totalPages; i++){
        pages.push(i)
    }

  return (
    <div>
        {
        pages?.map((page,index) => {
            return (
                <button key={index} onClick={() => setCurrentPage(page)} style={{marginRight: '10px'}}>{page}</button>
            )
        })
    }
    </div>
  )
}

export default Pagination