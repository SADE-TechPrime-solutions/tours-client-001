import React, {useRef} from 'react';

const TextBox = ({image, title, text}) => {
    const addReverseRef = useRef(null)
        // const reverseEngine = () => {
        //     console.log(addReverseRef)
        //     if(shouldReverse){
        //         addReverseRef.current.classList.add('u-flex-reverse')
        //     }
        // }
        // useEffect(() => {
        //     reverseEngine()
        // }, [])
    return(
        <div className="blog__textbox" ref={addReverseRef}>
            <div className="blog__textbox--image">
                <img src={image} alt="" className="blog__text--img" />
            </div>
            <div className="blog__textbox__text">
                <h3 className="blog__textbox--title">{title}</h3>
                <p className="blog__textbox--text">{text}</p>
            </div>
        </div>
   )
}
export default TextBox

// log__textbox