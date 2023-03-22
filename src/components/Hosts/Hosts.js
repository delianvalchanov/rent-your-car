import HostsCSS from "./assets/Hosts.module.css"

export const Hosts = () => {
    return (
        <div className={HostsCSS.wrapper}>
            <table className={HostsCSS.table}>
                <tr>
                    <th className={HostsCSS.profilePic}></th>
                    <th className={HostsCSS.name}>Name</th>
                    <th className={HostsCSS.email}>Email</th>
                    <th className={HostsCSS.vehicle}>Vehicle</th>
                    <th className={HostsCSS.location}>Location</th>
                    <th className={HostsCSS.actions}>Actions</th>
                </tr>
                <tr>
                    <td></td>
                    <td>George</td>
                    <td>georgi.n@abv.bg</td>
                    <td>Mercedes c220 W203</td>
                    <td>Sofia, Mladost</td>
                    <td>
                        <input type="submit" />
                        <input type="submit" />
                    </td>
                </tr>
            </table>
        </div>
    )
}