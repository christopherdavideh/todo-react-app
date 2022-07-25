import React from "react"
import ContentLoader from "react-content-loader"

const LoadSkeleton = (props) => (
  <ContentLoader 
    speed={2.1}
    width={'100%'}
    height={355}
    backgroundColor="#632a9d"
    foregroundColor="#bd7cfd"
    {...props}
  >
    <rect x="2" y="2" rx="2" ry="2" width="80" height="30" />
    <rect x="0" y="50" rx="13" ry="13" width="100%" height="85" /> 
    <rect x="0" y="160" rx="13" ry="13" width="100%" height="85" /> 
    <rect x="0" y="270" rx="13" ry="13" width="100%" height="85" /> 
    {/*<rect x="29" y="27" rx="0" ry="0" width="216" height="28" /> 
    <rect x="28" y="78" rx="0" ry="0" width="70" height="21" />*/}
  </ContentLoader>
)

export {LoadSkeleton};

