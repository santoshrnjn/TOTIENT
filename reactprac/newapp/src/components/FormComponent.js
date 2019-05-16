import React from "react";

function FormComponent(props) {

    return (
        <main>
            <form>
                <input name="firstName" value={props.firstName}
                 onChange={props.handleChange} placeholder="FirstName" />

                <br />
                <input name="lastName" value={props.lastName}
                onChange={props.handleChange} placeholder="LastName" />

                <br />
                <input name="age" value={props.age}
                 onChange={props.handleChange} placeholder="Age" />

                <br />

                <label>
                    <input type="radio" name="gender" value="male"
                        checked={props.gender === "male"}
                        onChange={props.handleChange} />
                    Male</label>
                <br />

                <label>
                    <input type="radio" name="gender" value="female"
                        checked={props.gender === "female"}
                        onChange={props.handleChange} />
                    Female</label>

                <br />
                <select value="props.destination"
                    name="destination" onChange={props.handleChange}>
                    <option>Select a Destination</option>
                    <option value="germany">Germany</option>
                    <option value="norway">Norway</option>
                    <option value="northpole">North Pole</option>
                    <option value="southpole">South Pole</option>
                </select>

                <br />
                <label>
                    <input type="checkbox" onChange={props.handleChange}
                        name="isVegan" checked={props.isVegan} />Vegan
                </label>

                <br />

                <label>
                    <input type="checkbox" onChange={props.handleChange}
                        name="isLactosefree" checked={props.isLactosefree} />Lactose Free
                </label>

                <br />
                <label>
                    <input type="checkbox" onChange={props.handleChange}
                        name="isSugarFree" checked={props.isSugarFree} />Sugar Free
                </label>

                <br />
                <button>Submit</button>

            </form>

            <hr />
            <h2>Entered Information</h2>
            <p>Your Name: {props.firstName}  {props.lastName}</p>
            <p>Your Age: {props.age}</p>
            <p>Your Gender: {props.gender}</p>
            <p>Your Destination: {props.destination}        </p>
            {/* <p>
                 Your Dietry Restriction:
                 <p>Vegan: {props.isVegan ? "Yes" : "No"}</p>
                 <p>Lactose Free: {props.isLactosefree ? "Yes" : "No"}</p>
                 <p>Sugar Free: {props.isSugarFree ? "Yes" : "No"}</p>
            </p>  */}
            Your Dietry Restriction:
            <p>
                {props.isLactosefree ? "Lactosefree " : " "} {props.isSugarFree ? " SugarFree" : " "}{props.isVegan ? " Vegan" : " "}
            </p>

        </main>
    )
}

export default FormComponent;