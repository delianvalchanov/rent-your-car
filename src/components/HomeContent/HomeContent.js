import { AboutUs } from "./AboutUs"
import { ClientHome } from "./ClientHome"
import { HostHome } from "./HostHome"
import { WelcomingSection } from "./WelcomingSection"


export const HomeContent = () => {
    return (
        <>
            <WelcomingSection />
            <AboutUs />
            <ClientHome />
            <HostHome />
        </>
    )
}