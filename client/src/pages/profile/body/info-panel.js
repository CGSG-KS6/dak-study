import { useContext } from 'react'
import md5 from 'crypto-js/md5'

import { Context } from "../../../index"

export default function InfoPanel(props) {
    let session = useContext(Context);

    const getGravatar = () => {
        const email = session.user.email.toLowerCase();
        const emailHash = md5(email);
        return ('https://www.gravatar.com/avatar/' + emailHash);
    }

    return (
        <div className='infoPanel'>
            <ul>
                <li className='infoPanelEllement grav'><img src={getGravatar()} alt='' /></li>
                <li className='infoPanelEllement'><p>{session.user.name}</p></li>
                <li className='infoPanelEllement'><p>{session.user.email}</p></li>
                <li className='infoPanelEllement'><p>{session.user.status}</p></li>
                <li className='infoPanelEllement'><button className="ButGroup" onClick={props.signOut}>Sign out</button></li>
            </ul>
        </div>
    );
}