import React from 'react'
import Card from './Card'
import Cdata from "./Cdata";

const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid ">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {
                            Cdata.map((val)=>{
                                return <Card imgsrc={val.imgsrc}
                                    title={val.title}
                                    desc={val.desc}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Service
