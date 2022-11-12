import React from 'react'
import { Card } from "react-bootstrap";

const ProfileDetails = ({ detailData }) => {
    
    if(detailData)
    return (
        <Card className="border-0">
            <Card.Header>
                <div className="mb-3 mb-lg-0">
                    <h3 className="mb-0" style={{ fontSize: '4vw' }}>Profile Details</h3>
                    
                </div>
            </Card.Header>
            <Card.Body>
                <div className="row" style={{ fontSize: '2vw' }}>
                    <div
                        className="col ">
                        <div>
                            <span>Name : </span>
                            <span>{detailData.name}</span>
                        </div>
                        <div>
                            <span>age : </span>
                            <span>{detailData.age}</span>
                        </div>
                        <div>
                            <span>Balance : </span>
                            <span>${detailData.balance}</span>
                        </div>
                        <div>
                            <span>eyeColor : </span>
                            <span>{detailData.eyeColor}</span>
                        </div>
                        
                    </div>
                    <div className="col">
                        <div>
                            <span>Company : </span>
                            <span>{detailData.company}</span>
                        </div>
                        <div>
                            <span>Email : </span>
                            <span>{detailData.email}</span>
                        </div>
                        <div>
                            <span>Phone : </span>
                            <span>{detailData.phone}</span>
                        </div>
                        <div>
                            <span>Address : </span>
                            <span>{detailData.address}</span>
                        </div>
                    </div>
               </div>
            </Card.Body>
        </Card>
    )
}

export default ProfileDetails