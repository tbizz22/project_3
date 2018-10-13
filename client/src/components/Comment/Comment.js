import React from 'react';
import './comment.css'


const IndividualComment = props => {
    const cd = props.commentData; 


    return (
        <li id={cd._id} data-creator={cd.user._id} className="collection-item">
            <div className="row">
                <span className="avatar left"><img src={`https://api.adorable.io/avatars/40/${cd.user._id}.png`}></img> </span>
                <div className="user-name dark-grey-text  pl20 left">
                    {cd.user.userName}
                </div>
                <div className="comment-created  right">
                    {cd.createdAt}
                </div>
            </div>
            <div className="flow-text">
                {cd.body}
            </div>
        </li>
    )

}

export default IndividualComment;