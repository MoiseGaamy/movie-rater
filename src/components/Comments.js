import { makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { connect } from "react-redux";
import { addComment } from '../actions/actions.js';

const useStyles = makeStyles((theme) => ({
    commentContainer: {
        position: "relative",
        width: "50%",
        marginTop: "4rem",
        backgroundColor:" #fff",
        minHeight: "70vh",
        overflow: "hidden"
    },
    formsMyContainer: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0"
    },
    signinSignup: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignitems: "center"
    },
    signInForm: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize:18,
        color: "#000",
        fontFamily:"Helvetica",
        marginBottom: "10px"
    },
    myInputField: {
        maxWidth: "380px",
        width: "100%",
        height: "55px",
        backgroundColor: "#f0f0f0",
        margin: "10px 0",
        fontWeight: "lighter",
        borderRadius: "55px",
        display: "grid",
        padding: "0 0.4rem",
        position: "relative" 
    },
    myInputFieldInput: {
            background: "none",
            outline: "none",
            border: "none",
            lineHeight: "1",
            fontWeight: "600",
            fontSize: "1.2rem",
            color: "rgb(97, 92, 92)"
          
    },
    btn: {
        width: "150px",
        height: "49px",
        outline:"none",
        border: "none",
        borderRadius: "48px",
        color: "white",
        textTransform: "uppercase",
        fontWeight: "600",
        margin: "10px 0",
        transition: "all 0.5s",
        backgroundColor: "#6D9886",
        cursor:"pointer"
    },
    textArea: {
        width: "100%",
        height: "100px",
        backgroundColor: "#f0f0f0",
        margin: "10px 0",
        fontWeight: "lighter",
        padding: "0 0.4rem",
        outline: "none",
        border: "none",
        lineHeight: "1",
        fontSize: "1.2rem",
        color: "rgb(97, 92, 92)"
    }
}))

const Comments = ( {add}) => {
    const [comments, setComments] = useState({
        email: "",
        comment:""
    });
    const classes = useStyles();

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        console.log(name, value);
        setComments((prev) => {
            return {
                ...prev,
                [name] : value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (comments.email && comments.comment) {
            let newComment = {
                userEmail: comments.email,
                userComment: comments.comment
            }
            add(newComment)  
        }
        setComments({
            email: "",
            comment:""
        })


    }
    return (
        <>
        <div className={classes.commentContainer}>
              <div className={classes.formsMyContainer}>
                  <div className={classes.signinSignup}>
                      <form actions="#" className={classes.signInForm} onSubmit={handleSubmit}>
                          <h3 className={classes.title}>Give us your Thoughts on the movie</h3>                        
                            <div className={classes.myInputField}>
                              <input  className={classes.myInputFieldInput} type="text" name="email" placeholder="Email" value={comments.email} onChange={handleChange}/>
                          </div>
                          <div>
                              <textarea className={classes.textArea} rows={40} name='comment' cols={30} placeholder="say something" value={comments.comment}  onChange={handleChange}></textarea>
                          </div>
                          <input  type="submit" className={classes.btn} value="Submit" />
                      </form>
                  </div>
              </div>
        </div>
      </>
    )
}
const mDTP = {
    add: addComment
}
export default connect(null,mDTP)(Comments)
