import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {clearContentAction, contentChangeAction} from "../../actions/Actions";

const Blog = () => {
    const dispatch = useDispatch();

    const content = useSelector(state => state.content.content)


    useEffect(() => {
        dispatch(contentChangeAction("я большой большой текст"))
    }, [])

    const addNewContent = (e) => {
        dispatch(contentChangeAction(e.target.value))
    }

    const ClearContent = (e) => {
        dispatch(clearContentAction(e.target.value))
    }

    return (
        <div>
            <input type="text" onChange={addNewContent}/>
            <p>{content}</p>
            <button onClick={ClearContent}>clear content</button>
        </div>
    );
};

export default Blog;