import { Card } from 'antd';
import React from 'react'

export const AboutUs = () => {
    return (
        <div className='bg-light pt-5'>
            <div className='container '>
                <div className="d-flex bg-light">
                    <div className='pt-6 justify-content-bottom'>
                        <h1>About Us</h1>
                        <p className='fw-bold'>ndsjndj sdjcnjsnc sdjcnjsdncs csdjcndcs csjcsddc skcsdc sc bdc sd csdjcsc sc sdcbs cjkbdsmc sd c ckjsdc sdcmds csdjccc sdcsdjkc </p>
                        <div className='d-flex'>
                            <Card

                                style={{ width: 270 }}
                                className=" mr-5"
                                cover={<img alt="example" src="https://images.unsplash.com/photo-1631201554359-f2a553074974?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHdhdGVyJTIwYm90dGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" />}
                            >

                            </Card>
                            <Card

                                style={{ width: 270 }}
                                className="ml-5"
                                cover={<img alt="example" src="https://images.unsplash.com/photo-1633354557008-3cb5a7391bca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHdhdGVyJTIwYm90dGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" />}
                            >

                            </Card>
                        </div>
                    </div>
                    <Card

                        style={{ width: 470 }}
                        className="ml-5"

                        cover={<img alt="example" src="https://images.unsplash.com/photo-1618573178238-c52e86a4e26f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdhdGVyJTIwYm90dGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" />}
                    >

                    </Card>
                </div>
            </div>
        </div>
    )
}
