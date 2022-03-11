
import { useAuthentication } from '../../AuthProvider';

export default function UserInfo() {
    const { authData } = useAuthentication();
    const username = authData.data.name;
return (
    <li className="message">Welcome, <strong>{username}</strong>!</li>
)};