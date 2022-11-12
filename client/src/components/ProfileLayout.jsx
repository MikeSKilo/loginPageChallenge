import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ProfileCover from './ProfileCover';
import ProfileEdit from './ProfileEdit';
import Cookies from 'universal-cookie';
import ProfileDetails from './ProfileDetails';
const cookies = new Cookies();

const ProfileLayout = ({ profile }) => {

    const [isEdit, setIsEdit] = useState(false);
    const [data, setData] = useState();
     useEffect(() => {
      
        setData(profile)
     }, []);
    
    const switchMode = () => {
        setIsEdit((prevIsSignup) => !prevIsSignup)
    };
    const onLogoutClicked = e => {
        cookies.remove("guid");
        cookies.remove('email');
        cookies.remove('_id');
        cookies.remove('phoneNumber');
        cookies.remove('avatarURL');
        cookies.remove('hashedPassword');

        window.location.reload();
    }
  

    if (data)
        return (

            <div className="pt-5 pb-5">
                <Container >
                    <Row>
                        <ProfileCover coverData={profile} />
                    </Row>
                    <Row className="m-1 d-flex justify-content-center">
                        <div className="col-3">
                            <button className="btn btn-secondary my-2 float-end" onClick={switchMode} style={{ fontSize: '2vw' }}>
                                {isEdit ? 'Done Edit' : 'edit profile'}
                            </button>
                        </div>  
                        <div className="col-3">
                            <button
                                onClick={onLogoutClicked}
                                className="btn btn-primary my-2 float-start" style={{ fontSize: '2vw' }}>Logout
                            </button>
                        </div>    
                    </Row>
                    <Row>
                        <Col >
                            {isEdit ? <ProfileEdit formData={data}></ProfileEdit> : <ProfileDetails detailData={profile}></ProfileDetails>}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
}

export default ProfileLayout