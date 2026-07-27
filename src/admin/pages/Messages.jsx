import { useEffect, useState } from "react";
import {
    FaEye,
    FaTrash
} from "react-icons/fa";

import {
    getMessages,
    deleteMessage,
    updateMessageStatus
} from "../../Services/messageService";

import "../styles/Messages.css";

function Messages() {

    const [messages, setMessages] = useState([]);
    const [selectedMessage, setSelectedMessage] = useState(null);

    useEffect(() => {
        loadMessages();
    }, []);

    async function loadMessages() {

        const { data } = await getMessages();

        if (data)
            setMessages(data);
    }

    async function handleView(message) {

        setSelectedMessage(message);

        if (message.status === "new") {

            await updateMessageStatus(
                message.id,
                "read"
            );

            loadMessages();
        }
    }

    async function handleDelete(id) {

        if (!window.confirm("Delete this message?"))
            return;

        await deleteMessage(id);

        loadMessages();
    }

    function getBadge(status) {

        switch (status) {

            case "new":
                return "bg-success";

            case "read":
                return "bg-secondary";

            case "replied":
                return "bg-primary";

            default:
                return "bg-dark";
        }
    }

    return (

        <div className="messages-page">

            <h2 className="mb-4">
                Customer Messages
            </h2>

            <div className="table-responsive">

                <table className="table align-middle">

                    <thead>

                        <tr>

                            <th>Name</th>

                            <th>Email</th>

                            <th>Subject</th>

                            <th>Status</th>

                            <th>Date</th>

                            <th width="130">
                                Actions
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {messages.length === 0 && (

                            <tr>

                                <td
                                    colSpan="6"
                                    className="text-center p-5"
                                >
                                    No messages found.
                                </td>

                            </tr>

                        )}

                        {messages.map(message => (

                            <tr key={message.id}>

                                <td>{message.name}</td>

                                <td>{message.email}</td>

                                <td>{message.subject}</td>

                                <td>

                                    <span
                                        className={`badge ${getBadge(message.status)}`}
                                    >
                                        {message.status}
                                    </span>

                                </td>

                                <td>

                                    {new Date(
                                        message.created_at
                                    ).toLocaleString("en-IN", {
                                        dateStyle: "medium",
                                        timeStyle: "short"
                                    })}

                                </td>

                                <td>
                                    <div className="action-buttons">
                                        <button
                                            className="btn btn-outline-primary btn-sm"
                                            onClick={() => handleView(message)}
                                        >
                                            <FaEye />
                                        </button>

                                        <button
                                            className="btn btn-outline-danger btn-sm"
                                            onClick={() => handleDelete(message.id)}
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            {selectedMessage && (

                <div
                    className="modal fade show d-block"
                    tabIndex="-1"
                >

                    <div className="modal-dialog modal-lg">

                        <div className="modal-content">

                            <div className="modal-header">

                                <h5 className="modal-title">
                                    Customer Message
                                </h5>

                                <button
                                    className="btn-close"
                                    onClick={() =>
                                        setSelectedMessage(null)
                                    }
                                />

                            </div>

                            <div className="modal-body">

                                <p>

                                    <strong>Name:</strong>

                                    {" "}
                                    {selectedMessage.name}

                                </p>

                                <p>

                                    <strong>Email:</strong>

                                    {" "}
                                    {selectedMessage.email}

                                </p>

                                <p>

                                    <strong>Phone:</strong>

                                    {" "}
                                    {selectedMessage.phone}

                                </p>

                                <p>

                                    <strong>Subject:</strong>

                                    {" "}
                                    {selectedMessage.subject}

                                </p>

                                <hr />

                                <p>

                                    {selectedMessage.message}

                                </p>

                            </div>

                            <div className="modal-footer">

                                <button
                                    className="btn btn-secondary"
                                    onClick={() =>
                                        setSelectedMessage(null)
                                    }
                                >
                                    Close
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            )}

        </div>

    );
}

export default Messages;