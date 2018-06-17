import * as React from 'react';
import axios from 'axios';
import { AdderProps, AdderState } from './adder-interface';

export class Adder extends React.Component<AdderProps, AdderState> {
    constructor(props: AdderProps) {
        super(props);
        this.state = {
            name: '',
            age: 0,
            users: null
        } as AdderState;
    }

    handleAdd ():void {
        let age: number = this.state.age;
        let name: string = this.state.name;

        axios.post('http://localhost:3000/users',{
            name: name,
            age: age
        }).then(response => {
            if (response.status === 200) {
                alert("HOOORAAA");
            } else {
                alert("FUUUUUU....");
            }
        });
    }

    handleNameChange (e: React.SyntheticEvent<HTMLInputElement>) {
        let str: string = e.currentTarget.value;
        this.setState({
            name: str
        });
    }

    handleAgeChange (e: React.SyntheticEvent<HTMLInputElement>) {
        let age: number = parseInt(e.currentTarget.value);
        this.setState({
            age: age
        });
    }

    getAll() {
        axios.get('http://localhost:3000/users').then((response) => {
            this.setState({users: response.data});
            console.log(response.data);
        });
    }

    public render(): JSX.Element {
        const users = this.state.users;
        return (
            <div>
                <input type="text" placeholder="Name" onChange={this.handleNameChange.bind(this)}/>
                <input type="text" placeholder="Name" onChange={this.handleAgeChange.bind(this)}/>
                <button onClick={this.handleAdd.bind(this)}>Add</button>
                <button onClick={this.getAll.bind(this)}>Get all</button>
                <ul>
                    {
                        users ? users.map((item: {age: number, name: string}, index) => {
                            return (
                                <li key={index}>
                                    {`${item.name} + ${item.age}`}
                                </li>
                            );
                        }) : <h1>No DATA</h1>
                    }
                </ul>
            </div>
        );
    }
}