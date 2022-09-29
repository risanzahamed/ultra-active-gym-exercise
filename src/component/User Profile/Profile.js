import React from 'react';
import Break from '../Break/Break';
import "./Profile.css"

const Profile = ({ time }) => {
    let timeTotal = 0;
    for (const exercise of time) {
        timeTotal = timeTotal + parseInt((exercise.time))
    }  
    
const Break = () =>{
    let BreakTime = 0;
    for(const Break of time){
        BreakTime = BreakTime
    }
}
    
    return (
        <div>
            <Break></Break>
            <div>
                <div className="user-profile">
                    <div className='user-name-image'>
                        <img src="profile-image.jpg" alt="" />
                        <div>
                            <h1>Risan</h1>
                            <p>Chottogram, Bangladesh</p>
                        </div>
                    </div>
                    <div className='user-details'>
                        <h1>57kg <br /> Weight</h1>
                        <h1>5.5 <br /> Height</h1>
                        <h1>21yrs <br /> Age</h1>
                    </div>

                    <div className="add-break">
                        <h1>Add A Break</h1>
                        <button>10s</button>
                        <button>15s</button>
                        <button>20s</button>
                        <button>25s</button>
                    </div>

                    <div className='input-details'>
                        <h1>Exercise Details</h1>
                        <div className='exercise-time'>
                            <h1>Exercise time</h1>
                            <p>{timeTotal}</p>
                        </div>
                        <div className='break-time'>
                            <h1>Break time</h1>
                            <p>00 secondsss</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;