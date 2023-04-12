export const Formulario = () => {

    const onLogin = (event) => {
        // Aca debe realizar una peticion al backend para saber si
        // esta autorizado o no.
        event.preventDefault();
        location.href = "/"
    }

    return(
        <div className="container__form">
            <h3>Gerencia de <br />Planeamiento e Institucionales</h3>
            <h1>Iniciar sesion</h1>
            <form>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <button onClick={onLogin}>Iniciar</button>
            </form>
            <a 
            href="https://www.argentina.gob.ar/transporte/trenes-argentinos-cargas"
            target="_blank">
            trenesargentinos.gob.ar
            </a>
        </div>
    )
}