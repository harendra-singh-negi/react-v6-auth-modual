import AdminRoute from "../modual/admin";
import ManagerRoute from "../modual/manager";
import UserRoute from "../modual/user";
import AgentRoute from './../modual/agent/index';


const Auths = [
    {
        key: 1,
        role: 'ADMIN',
        access: [1, 2, 3, 4],
        filePath: <AdminRoute />
    }, {
        key: 2,
        role: 'MANAGER',
        access: [2, 3, 4],
        filePath: <ManagerRoute />
    }, {
        key: 3,
        role: 'AGENT',
        access: [3, 4],
        filePath: <AgentRoute />
    }, {
        key: 4,
        role: 'USER',
        access: [4],
        filePath: <UserRoute />
    }
];
export default Auths;
