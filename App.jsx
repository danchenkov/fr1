import React from "react"

export default function App() {
    const [unreadMessages, setUnreadMessages] = React.useState(['a', 'b'])

    return (
        <div>
            {
                unreadMessages.length ?
                <h1>You have {unreadMessages.length} unread message{unreadMessages.length > 1 && 's'}!</h1>
                :
                <p>You have no unread messages</p>
            }
        </div>
    )
}
