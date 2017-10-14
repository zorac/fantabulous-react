import React from 'react'
import Work from './WorkFromCache'

function Works(props) {
  let ids = props.workIds;

  if (ids && (ids.length > 0)) {
    return ids.map(id =>
      <Work key={id} workId={id}/>
    );
  } else {
    return null;
  }
}

export default Works
