import React, { createRef, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Tooltip from '../Tooltip';
import { addTopicApi } from '../utils/apiUtils';
import '../App.css'
import { success } from './Toast';




function AddTopic() {
    const navigate = useNavigate()
    const [topicName, setTopicName] = useState()
    const [state, setValue] = useState({ value: "" });
    const [selectedText, setSelectedText] = useState([])
    const [topicDescription, setTopicDescription] = useState([])
    const myRef = createRef()
    const [data, setData] = useState()
    const [finalList, setFinalList] = useState([])


    // calculate percentage accorging to points
    const findPercentage = () => {
        let sum = 0
        finalList.map(item => {
            sum += Number(item.points)
        });
        // percentage formula
        const percent = (sum / ((topicDescription.length - 1) * 4)) * 100
        // console.log(sum, topicDescription, percent);
        return percent.toFixed(2)
    }


    // save the data into backend using api
    const onAddTopic = async () => {

        const topicData = {
            topicName: topicName,
            textArray: finalList,
            percentage: findPercentage()
        }

        const apiResponce = await addTopicApi(topicData)
        if (apiResponce.status === 200) {
            success(apiResponce.data.message)
            console.log("responcemessage", apiResponce.data.message);
        } else {
            console.log("error");
        }

        navigate('/dashboard')

    }

    useEffect(() => {

        if (data && data.length > 0) {
            // const updatedData = 
            // console.log(updatedData);
            setFinalList([...finalList, { myText: data[0], myAction: data[1], points: data[2] }])
        }
        // console.log(finalList.length);
    }, [data])


    const onTopicHandle = (event) => {
        setTopicName(event.target.value)
        // console.log(topicName);
    }


    const inputsHandler = (event) => {
        let textArray = (event.target.value).split('-').join(', ').split('.').join(', ').split('{').join(', ').split('}').join(', ').split('(').join(', ').split(')').join(', ').split('[').join(', ').split(']').join(', ').split('/').join(', ').split(',')
        setTopicDescription(textArray)
        setValue({ value: event.target.value })
    }


    return (
        <div className='container mt-5'>


            <div className='row '>
                <div className='col-5'><h3 className='text-secondary'><i class="fa-solid fa-user"></i>&nbsp;{localStorage.getItem('username')}</h3></div>
                {/* Heading of this page */}
                <div className='col-4'><h4><i><b>Add Topic</b></i></h4></div>
                {/* move to dashboard */}
                <div className='col-3'><Link to='/dashboard' className='removeUnderline'><h3>Dashboard</h3></Link></div>
            </div>
            <hr />

            <div className='row'>
                <div className='col-1'></div>
                <div className='col-10'>
                    <div>
                        <input
                            className='item-width'
                            type='text'
                            placeholder='Enter topic name...'
                            name='topicName'
                            onChange={(e) => onTopicHandle(e)} />

                        {/* TextArea */}
                        <textarea
                            className='mt-2 item-width'
                            type="text"
                            ref={myRef}
                            rows={10}
                            cols={60}
                            placeholder="Enter topic description..."
                            onChange={inputsHandler}
                            value={state.value} />

                        {/* Button */}
                        <button className='landingButton item-width' onClick={() => {
                            let textVal = myRef.current;
                            let cursorStart = textVal.selectionStart;
                            let cursorEnd = textVal.selectionEnd;
                            let stext = state.value.substring(cursorStart, cursorEnd)
                            console.log(stext)
                            setSelectedText([...selectedText, { text: stext }]);

                        }}><h5>Select and Give Action</h5></button>
                    </div>


                    {/* Display all selected item with actions */}
                    <div>
                        {selectedText && selectedText.length > 0
                            ? selectedText.map((i, index) => <span key={index}>
                                <Tooltip
                                    setHoverPosition='top'
                                    setDataValue={setData}
                                    text={i.text} />
                                {finalList && finalList.length > 0 ? finalList.map((i, index) => console.log(index + 1, i)) : []}

                            </span>)
                            : []
                        }
                    </div>

                    <button className='landingButton item-width'  onClick={() => onAddTopic()}><h5><i class="fa-solid fa-plus"></i>ADD</h5></button>
                </div>
            </div>
        </div>
    )
}

export default AddTopic