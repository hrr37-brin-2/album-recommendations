import React from 'react';

function Tags(props) {
  if (!props.tags) {
    return null;
  } else {
    var tagsArr = props.tags.toLowerCase().split(', ');
    return <div className="tags-container">
      <h3 className="tags-title">Tags</h3>
      <div className="links-container">
        {tagsArr.map(tag =>  <a className="tag-link" key={tag}> {tag} </a> )}
      </div>
    </div>;
  }
}

export default Tags;