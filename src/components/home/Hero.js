import { Button, Card } from 'antd';
import React, { useState } from 'react'

import { DownloadOutlined } from '@ant-design/icons';

const { Meta } = Card;




const Hero = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div className=''>

            <div >
                <div className="jumbotron jumbotron2 jumbotron-fluid">
                    <div className='container'>
                        <div className='row '>
                            <div className="pt-5 col-7">
                                <p className="heroText">We Find <spam className="textGreen ">Best <br></br>Water </spam>for You.</p>
                                <h6 className="">This is a modified jumbotron that occupies the entire horizontal <br></br> space of its parent jumbotron that occupies the.</h6>
                                <div className='pt-2'>
                                    <Button
                                        type="primary"
                                        size="large"
                                        className="oliveGreen border border-none hover-none"
                                        icon={<DownloadOutlined />}
                                    // disabled={!cart.length}

                                    >
                                        Proceed to Checkout
                                    </Button>
                                    <Button
                                        type="default"
                                        size="large"
                                        className="ml-2 textGreen border border-success"
                                        icon={<DownloadOutlined />}
                                    // disabled={!cart.length}

                                    >
                                        Proceed to Checkout
                                    </Button>
                                </div>
                            </div>
                            <div className='col-5'>
                                <div className='d-flex'>
                                    <Card
                                        hoverable
                                        style={{ width: 120 }}
                                        className=""
                                        cover={<img alt="example" src="https://images.unsplash.com/photo-1633354557397-33ee5af54117?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0ZXIlMjBib3R0bGV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />}
                                    >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                    </Card>
                                    <div className='pt-5 d-flex'>
                                        <Card
                                            hoverable
                                            style={{ width: 120 }}
                                            className="ml-5 mt-5"
                                            cover={<img alt="example" src="https://images.unsplash.com/photo-1619021054101-01d1d0e48cb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHdhdGVyJTIwYm90dGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" />}
                                        >
                                            <Meta title="Europe Street beat" description="www.instagram.com" />
                                        </Card>
                                        <Card
                                            hoverable
                                            style={{ width: 120 }}
                                            className="ml-5"
                                            cover={<img alt="example" src="https://images.unsplash.com/photo-1631201553014-776760c89381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHdhdGVyJTIwYm90dGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" />}
                                        >
                                            <Meta title="Europe Street beat" description="www.instagram.com" />
                                        </Card>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div >

    )
}

export default Hero