import React from "react"
import ContentLoader from "react-content-loader"

const LoadSkeleton = (props) => (
  <ContentLoader 
    speed={1.8}
    width={'100%'}
    height={460}
    backgroundColor="#632a9d"
    foregroundColor="#bd7cfd"
    {...props}
  >
    <rect x="0" y="20" rx="13" ry="13" width="100%" height="85" /> 
    <rect x="0" y="130" rx="13" ry="13" width="100%" height="85" /> 
    <rect x="0" y="240" rx="13" ry="13" width="100%" height="85" /> 
    <rect x="0" y="350" rx="13" ry="13" width="100%" height="85" /> 
    {/*<rect x="29" y="27" rx="0" ry="0" width="216" height="28" /> 
    <rect x="28" y="78" rx="0" ry="0" width="70" height="21" />*/}
  </ContentLoader>
)

export {LoadSkeleton};

