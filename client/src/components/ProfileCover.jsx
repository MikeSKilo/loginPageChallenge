import React from 'react'
import { Row, Col, Image } from "react-bootstrap";

const ProfileCover = ({ coverData }) => {

    return (
        <Row className="justify-content-center align-items-center">
            <Col >
                <div className="d-flex justify-content-center bg-white   shadow-sm">
                    <Image
                        src={coverData.picture}
                        className="avatar-xl rounded-circle border border-4 border-white position-relative"
                        alt="profile Photo"
                        style={{ height: '7.5rem', objectFit: 'fill' }}
                    />
                </div>
            </Col>
        </Row>
    );
}

export default ProfileCover