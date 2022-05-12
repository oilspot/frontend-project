import './billing.css';
import ProfileHeader from "../profile-header/ProfileHeader";
import { faFilePdf, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Billing() {
    return (
        <>
            <div>
                <ProfileHeader />
            </div>
             <div>
                <table className="table-bills w-50">
                    <thead>
                        <tr>
                        <th scope="col">Reference Id</th>
                        <th scope="col">Date <FontAwesomeIcon icon={faArrowDown}  className={'arrow-icon'} /></th>
                        <th scope="col">Amount</th>
                        <th scope="col">Invoice</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>4571222f6rththurei998i91</td>
                        <td>11/05/2022</td>
                        <td>$28.00</td>
                        <td><FontAwesomeIcon icon={faFilePdf}  className={'pdf-icon'} /></td>
                        </tr>
                        <tr>
                        <td>4571222f6rththurei998i91</td>
                        <td>10/05/2022</td>
                        <td>$14.00</td>
                        <td><FontAwesomeIcon icon={faFilePdf}  className={'pdf-icon'} /></td>
                        </tr>
                        <tr>
                        <td>4571222f6rththurei998i91</td>
                        <td>09/05/2022</td>
                        <td>$26.00</td>
                        <td><FontAwesomeIcon icon={faFilePdf}  className={'pdf-icon'} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}