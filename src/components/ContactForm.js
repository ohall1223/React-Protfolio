import React, {useState} from "react";
import {validateEmail} from '../../'

function ContactForm() {
    return(
        <div className="myForm">
            <form id="email-form" method="POST">
                <div className="form-group">
                    <label for="form-name"></label>
                </div>
            </form>
        </div>
    )
}