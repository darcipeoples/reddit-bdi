import React, { Component } from 'react';
import '../App.css';

class GetPosts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'user_field': ''
        }
    }

    handleUserFieldUpdate = (e) => {
        this.setState({
            "user_field": e.target.value
        })
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.handleSearch()
        }
    }

    handleSearch = (e) => {
        return this.props.handleSearch(this.state.user_field);
    }
  
    formatDate = (date) => {
        let year = (date.getFullYear().toString()).padStart(4, '0')
        let month = ((date.getMonth()+1).toString()).padStart(2, '0')
        let day = (date.getDate().toString()).padStart(2, '0')
        let hour = (date.getHours().toString()).padStart(2, '0')
        let minute = (date.getMinutes().toString()).padStart(2, '0')
        let second = (date.getSeconds().toString()).padStart(2, '0')
        return `${year}-${month}-${day} ${hour}:${minute}:${second}`
    }
  
    render() {
        if (this.props.currPage !== "GetPosts") {
            return <></>
        } 

        let header = <></>    
        if (this.props.username !== '' && this.props.username !== undefined) {
            header = <h4 className="pt-2">{this.props.writings.length} submissions by <a target="_blank" rel="noreferrer" href={"https://www.reddit.com/u/"+this.props.username}> u/{this.props.username} </a></h4>
        }
        
        return (
            <>
            <h1>Fetch Reddit posts</h1>
            <div className="input-group">
                <input className="form-control me-2" onKeyDown={this.handleKeyDown} placeholder="Reddit username" name="username" onChange={this.handleUserFieldUpdate} value={this.state.user_field}></input>
                <button className="btn btn-success ml-2" name="Search" onClick={this.handleSearch}>Search</button>
            </div>
            {header}  
            {this.props.writings.map((item, idx) => (
                <div className="card post-card my-2" key={idx}>
                    <div className="card-body">
                        <h5 className="card-title">{item.TITLE}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{this.formatDate(item.DATE)}</h6>
                        <p className="card-text">{item.TEXT}</p>
                    </div>
                </div>
            ))}
            </>
        )
    }
}

export default GetPosts;