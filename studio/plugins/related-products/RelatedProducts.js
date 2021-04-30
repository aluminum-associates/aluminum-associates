import React from 'react'
import QueryContainer from 'part:@sanity/base/query-container';

const RelatedProducts = () => {
  return (
    <QueryContainer
      query={`//query
      * [_type == "category" &&
      title == $category]{
     title,
     "relatedProducts": * [
       _type =="product" &&
       references(^._id)] {title}
   }
      `}
  )
}

export default RelatedProducts
