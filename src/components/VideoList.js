import React from "react";

export const VideoList = props => {
  return (
    <ul>
      {props.children}
    </ul>

  )
}

export const VideoListItem = () => {
  return (
    <li>
      Video List Item
    </li>

  )
}
