import { AboutUs } from "./AboutUs"
import { ClientHome } from "./ClientHome"
import { HostHome } from "./HostHome"
import { WelcomingSection } from "./WelcomingSection"


export const Home = () => {
    return (
        <>
            <WelcomingSection />
            <AboutUs />
            <ClientHome />
            <HostHome />
        </>
    )
}