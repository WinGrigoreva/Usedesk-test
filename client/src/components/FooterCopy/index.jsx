import React from "react";

export class FooterCopy extends React.Component {
    render() {
    let date = new Date();
        return (
            <div className="container">
                <p className="footer__copy">
                    &copy; WinGrigoryeva, {date.getFullYear()}
                </p>
            </div>
        )
    }
}


