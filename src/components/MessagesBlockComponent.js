import React from "react";
import MessageItemComponent from "./MessageItemComponent";

class MessagesBlockComponent extends React.Component {

    render() {
        const items = this.props.data.messages.map((item, index) => <MessageItemComponent key={index} data={item} />).reverse();

        return (
            <div className="messBlockWrapper">
                {items.length > 0 ? <div>{ items }</div> : <p className="text-center">Is empty</p>}
            </div>
        )
    }
}

export default MessagesBlockComponent;