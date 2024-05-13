import React from "react"

export default function Info() {
    return (
        <div className="info">
            <img src="./images/kf-img.jpg" className="info--img" alt="photo of Kath"/>
            <h1 className="info--heading">Kath Fox</h1>
            <p className="info--description">Frontend Developer</p>
            <a className="info--website" href="">www.mywebsite.com</a>
            <div className="info--links">
                <a className="info--links_email" href=""><i className="fa-solid fa-envelope"></i>Email</a>
                <a className="info--links_linkedin" href=""><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
            </div>
        </div>
    )
}