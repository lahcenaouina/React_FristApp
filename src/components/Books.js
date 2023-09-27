
import '../assets/styles/Books.css'
import {FaSearch} from "react-icons/fa";
const Books = () => {
    return (
        <div className='booksSection'>
            <div className="input-group">
                <div className="form-outline">
                    <input placeholder='Search book...' type="search" id="form1" className="form-control w-auto"/>
                </div>

                <ul className='Results'>
                    <li> Book 1</li>
                    <li> Book 1</li>
                    <li> Book 1</li>
                    <li> Book 1</li>
                    <li> Book 1</li>
                </ul>
            </div>


        </div>
    );
}
export default Books;