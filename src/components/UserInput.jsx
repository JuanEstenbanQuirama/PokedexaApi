import React, { useState } from 'react';
import { changeUser } from '../store/slices/user.slice';
import { useDispatch } from 'react-redux/';
import { useNavigate } from 'react-router-dom/';

const UserInput = () => {

    const [userNanme, setUserName] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = e => {
        e.preventDefault();
        dispatch(changeUser(userNanme))
        navigate('/pokedex')
    }
    
    return (
        <div className='container'>
            <form onSubmit={submit}>
                <h1 className='title-input'>¡Hello rookie trainer! </h1>
                <div className='container-input'>
                    <div className='img-1'>
                        <img src="	https://www.seekpng.com/png/full/201-2011786_red-by-xous-54-red-pokemon-trainer-png.png" alt="" />
                    </div>
                    <div className='begining-input'>
                        <h3 >Give me your name to start</h3>
                        <input
                            type="text"
                            value={userNanme}
                            onChange={e => setUserName(e.target.value)}
                        />
                        <br />
                        <button className="btn btn-success" >Go!  </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserInput;