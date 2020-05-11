import React from "react";
import io from "socket.io-client";

const URL = "https://socket-server.deel-ramverk.me";
//const URL = "localhost:9002"


export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            userError: "",
            msg: "",
            allMsgs: []
        }

        this.socket = io(URL);

        this.socket.on("recChatMsg", (msg) => {
            addMessage(msg);
        })

        this.socket.on("allMsgs", (msg) => {
            this.setState({ allMsgs: msg })
        })

        const addMessage = msg => {
            this.setState({ allMsgs: [...this.state.allMsgs, msg] });
        }

        this.sendUser = e => {
            e.preventDefault();
        }
        this.sendMessage = e => {
            e.preventDefault();

            if (this.state.msg.length > 0 && this.state.username.length > 0) {
                this.setState({ userError: "" })
                this.socket.emit("userJoined", {
                    time: new Date().toLocaleTimeString(),
                    username: this.state.username,
                    msg: this.state.username + " has joined the chat!"
                })
                this.socket.emit("sendMsg", {
                    msg: this.state.msg,
                    username: this.state.username,
                    time: new Date().toLocaleTimeString()
                });
                this.setState({ msg: "" })
                document.getElementById("new-message").value = "";
            } else {
                this.setState({ userError: "Please provide a username."})

            }
        }
    }

    componentDidUpdate() {
        let chatUpdate = document.getElementById("all-messages")
        chatUpdate.scrollTop = chatUpdate.scrollHeight;
    }

    componentWillUnmount() {
        this.socket.disconnect();
    }

    render() {
        return (
            <div className="container">
            <h4> Chat </h4>
            <div id="all-messages" className="all-messages">
                {
                    this.state.allMsgs.map((msg, key) => {
                        return <p key={key}><span className="chat-user">{`${msg.username}`}</span><span className="chat-time"> {`${msg.time}`}</span>
                        <p class="chat-text">{`${msg.msg}`}</p></p>
                    })
                }
            </div>
            <p>Username:</p>
            <input placeHolder="Enter your username" className="new-message" style={{width: "10em", height: "1em"}} type="text"
            onChange={e => this.setState({ username: e.target.value })
            } />
            <div style={{color: "red", fontSize: 18}}>
            {this.state.userError}
            </div>
            <p>New message:</p>
            <input type="text" autoComplete="off" onKeyDown={e => {
                if (e.keyCode == 13) {
                    this.sendMessage(e);
                }
            }}
            onChange={e => this.setState({ msg: e.target.value })} id="new-message" className="new-message"/>
            </div>
        )
    }
}
