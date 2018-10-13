import React from 'react';
import Comment from '../Comment';
import { Input, FormBtn, TextArea } from '../../components/Form';


const CommentList = props => {
    const comments = props.comments;

    const cList = () => {
        if (comments === undefined) {
            return (
            <div>
                You dont have any comments
            </div>
            )
        } else {
            return (
                <div>
                    This thing is on
                <Comment />
                </div>
            )
        }
    }


    return (

        <div>
            <form>
                <TextArea 
                onChange={props.handleInputChange}
                name='newComment'
                value={props.value}
                placeholder='What do you think about this?'
                />

                <FormBtn
                    // disabled={!(this.state.author && this.state.title)}
                    onClick={props.addComment}
                >
                    Register
                </FormBtn>
              </form>
              
              { cList() }
        </div>
        



    )





}




export default CommentList;