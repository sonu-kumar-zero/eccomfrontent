import React from 'react'
import { AiFillGithub, AiFillInstagram, AiOutlineCopyrightCircle } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import icon from '../images/xorewear-logo-1-final-1.png'

const Footer = () => {
    return (
        <>
            <div className="foot12">
                <div className="foot13">
                    <div className="foot18">
                        <img src={icon} alt='icon' />
                    </div>
                    <div className="foot19">
                        <div className="foot20">
                            <div className="foot21">Hoodies</div>
                            <div className="foot21">T-shirts</div>
                            <div className="foot21">Mugs</div>
                            <div className="foot21">Stickers</div>
                        </div>
                        <div className="foot20">
                            <div className="foot21">Hoodies</div>
                            <div className="foot21">T-shirts</div>
                            <div className="foot21">Mugs</div>
                            <div className="foot21">Stickers</div>
                        </div>
                        <div className="foot20">
                            <div className="foot21">Hoodies</div>
                            <div className="foot21">T-shirts</div>
                            <div className="foot21">Mugs</div>
                            <div className="foot21">Stickers</div>
                        </div>
                        <div className="foot20">
                            <div className="foot21">Hoodies</div>
                            <div className="foot21">T-shirts</div>
                            <div className="foot21">Mugs</div>
                            <div className="foot21">Stickers</div>
                        </div>
                    </div>
                </div>
                <div className="foot14">
                    <div className="foot15">
                        <AiOutlineCopyrightCircle />
                        All rights reserved to xorewear 2023
                    </div>
                    <div className="foot16">
                        <div className="foot17"><BsFacebook /></div>
                        <div className="foot17"><AiFillInstagram /></div>
                        <div className="foot17"><AiFillGithub /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer