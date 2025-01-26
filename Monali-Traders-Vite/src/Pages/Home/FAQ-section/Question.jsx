import './Questions.css';
import Dropdown from '../../../components/Dropdown/Dropdown';
const QuestionSection =()=>{
    return(
        <div className='questions-section'>
            <div className='question-main-title-container'>
                <h1 className='question-main-title'>THINGS YOU ARE PROBABLY WONDERING</h1>
                <div className='FAQ-logo'>
                    <h2 className='faq'>FAQ</h2>
                </div>
            </div>
                <Dropdown/>

        </div>
    )
}

export default QuestionSection