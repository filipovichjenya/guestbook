import React from 'react';

class MessageItem extends React.Component {
    render() {
        return (
            <div className=" mb-2 p-1 shadow-sm  ">
                <p className="text-break"><span className="badge badge-info mr-1 ">Name:</span> {this.props.data.name} <br /> <span className="badge badge-info mr-1">Message: </span>{this.props.data.message}</p>
            </div>

        )
    }
}


export default MessageItem;
