import React from 'react';
import FormComponent from "./FormComponent";

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegan: false,
            isLactosefree: false,
            isSugarFree: false

        }
        this.handleChange = this.handleChange.bind(this);
        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick(){
    //   this.setState(prevState =>{
    //     return{
    //       isLoggedIn:!prevState.isLoggedIn
    //     }
    //   })
    // }

    /* componentDidMount(){
        setTimeout(()=>{
         this.setState({
            isLoading:false
          })
       },1500)
       }*/

    handleChange(event) {
        const { name, value, type, checked } = event.target;
        type === "checkbox" ?
            this.setState({
                [name]: checked
            }) :
            this.setState({ [name]: value })
    }


    render() {
        // let text = this.state.isLactosefree ? "Lactosefree":""; 
        // let displ = this.state.isSugarFree ? "SugarFree":"";
        // let displ1 = this.state.isVegan? "Vegan":"";

        return (
            <FormComponent
                handleChange={this.handleChange}
                {...this.state}
            />
        )


    }
}

export default Form;