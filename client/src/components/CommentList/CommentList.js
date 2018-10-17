import React from 'react';
import Comment from '../Comment';
import { FormBtn, TextArea } from '../../components/Form';


const CommentList = props => {
    const commentsList = props.comments;

    const cList = () => {
        if (commentsList[0] === undefined) {
            return (
                <div>
                    You dont have any comments
                </div>
            )
        } else {
            return (
                <div>
                    {commentsList.map(comment => (
                       <Comment
                       key = {comment._id}
                       commentData = {comment}
                       />
                    )
                    )}
                </div>

            )
        }
    }


    return (

        <div>
            <div className='row'>
                <form>
                    <TextArea
                        onChange={props.handleInputChange}
                        name='newComment'
                        value={props.value}
                        placeholder='What do you think about this?'
                    />

                    <FormBtn
                        // disabled={!(this.value)}
                        onClick={props.addComment}
                    >
                        Add Comment
                </FormBtn>
                </form>
            </div>

            <div className='row'>
                <div>
                    <h6>Comments</h6>
                </div>

                <div className='row'>
                    <ul className='collection'>
                        {cList()}
                    </ul>
                </div>
            </div>
        </div>




    )





}




export default CommentList;