import { Link } from "react-router-dom";

const MailboxList = (props) => {
    return (
        <>
            <h2>Mailbox</h2>
            <ul>
                {props.mailboxes.map((mail) => (
                    <li key={mail._id}>
                        <Link to={`/mailboxes/${mail._id}`}>
                            {mail.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default MailboxList;