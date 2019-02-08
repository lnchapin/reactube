import React from "react";
import styled from "styled-components";

const List = styled.ul`
  padding: 0;
  list-style-type: none;
`

const Item = styled.li`
  img{
    border: ${props => props.active ? "3px solid coral" : "3px solid grey"}
    width: 200px;
    margin-bottom: 15px;
    cursor: pointer;
    border-radius: 5px;

    :hover{
      border-color: limegreen;
    }
  }
`

export const VideoList = props => {
  return (
    <List>
      {props.children}
    </List>

  )
}

export const VideoListItem = ({video, selectedVideo, selectVideo}) => {
  return (
    <Item active={selectedVideo===video} onClick={()=>selectVideo(video)}>
      <img src={video.snippet.thumbnails.medium.url} />
    </Item>

  )
}
