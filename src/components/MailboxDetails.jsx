import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();
    const selectedBox = props.mailboxes.find(
      (mailbox) => mailbox._id === Number(mailboxId)
    );
    console.log(selectedBox);
    return (
        <>
        </>
    )
}

export default MailboxDetails;

