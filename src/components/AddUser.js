import React from "react";


class AddUser extends React.Component{

    userAdd={}


    constructor (props) {
        super(props)

        this.state = {

            first_name:"",
            last_name: "",
            bio:"",
            age: 1,
            isHeppy: false,

        }

    }

    render () {
        return (
            <form action="" ref={(el) => this.myForm = el }>
                <input placeholder="Имя" onChange={(e)=>this.setState({first_name: e.target.value})} type="text"/>
                <input placeholder="Фамилия"  onChange={(e)=>this.setState({last_name: e.target.value})} type="text"/>
                <textarea placeholder="Биография" onChange={(e)=>this.setState({bio: e.target.value})}></textarea>
                <input placeholder="Возраст" onChange={(e)=>this.setState({age: e.target.value})}type="text"/>
                <label htmlFor="isHeppy">Счастлив ?</label>
                <input placeholder="Счастлив" id="isHeppy" onChange={(e)=>this.setState({isHeppy: e.target.checked})} type="checkbox"/>
                <button type="button" onClick={() => {

                    this.myForm.reset()

                    this.userAdd={
                        first_name:this.state.first_name,
                        last_name:this.state.last_name,
                        bio:this.state.bio,
                        age:this.state.age,
                        isHeppy:this.state.isHeppy,

                    }
                    if (this.props.user)
                        this.userAdd.id = this.props.user.id


                    this.props.onAdd(this.userAdd)}} >Добавить</button>
            </form>

        )
    }



}

export default AddUser;