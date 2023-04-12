import { ImportantCard } from "./ImportantCard"
import { MdAddBox } from 'react-icons/md'
export const Aside = () => {
    return(
        <aside className="container__inicio-importants animate__animated animate__fadeIn">
            <h3>Temas importantes</h3>
            <hr />
            <ImportantCard />
            <ImportantCard />
            <ImportantCard />
            <ImportantCard />
            <ImportantCard />
        </aside>
    )
}