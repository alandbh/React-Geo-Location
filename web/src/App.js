import React, { useEffect, useState } from "react";
import api from "./services/api";
import "./global.css";
import "./app.css";
import "./sidebar.css";
import "./main.css";

function App() {
    const [github_username, setGithub_username] = useState("");
    const [techs, setTechs] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                const { latitude, longitude } = position.coords;
                setLatitude(latitude);
                setLongitude(longitude);
            },
            (err) => {
                console.log(err);
            },
            {
                timeout: 30000,
            }
        );
    }, []);

    async function hanfleAddDev(e) {
        e.preventDefault();

        const response = await api.post("/devs", {
            github_username,
            techs,
            latitude,
            longitude,
        });

        // limpar os capos

        setTechs("");
        setGithub_username("");

        console.log(response.data);
    }
    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                <form onSubmit={hanfleAddDev}>
                    <div className="input-block">
                        <label htmlFor="github_username">
                            Usuário do GitHub
                        </label>
                        <input
                            type="text"
                            name="github_username"
                            id="github_username"
                            value={github_username}
                            onChange={(e) => setGithub_username(e.target.value)}
                        />
                    </div>
                    <div className="input-block">
                        <label htmlFor="techs">Tecnologias</label>
                        <input
                            type="text"
                            name="techs"
                            id="techs"
                            value={techs}
                            onChange={(e) => setTechs(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <div className="input-block">
                            <label htmlFor="longitude">Longitude</label>
                            <input
                                type="text"
                                name="longitude"
                                id="longitude"
                                value={longitude}
                                onChange={(e) => setLongitude(e.target.value)}
                            />
                        </div>
                        <div className="input-block">
                            <label htmlFor="latitude">Latidute</label>
                            <input
                                type="text"
                                name="latitude"
                                id="latitude"
                                value={latitude}
                                onChange={(e) => setLatitude(e.target.value)}
                            />
                        </div>
                    </div>
                    <button type="submit">Adicionar</button>
                </form>
            </aside>
            <main>
                <ul>
                    <li className="dev-item">
                        <header>
                            <img
                                src="https://avatars0.githubusercontent.com/u/1545896?s=460&v=4"
                                alt="Alan Vasconcelos"
                            />
                            <div className="user-info">
                                <strong>Alan Vasconcelos</strong>
                                <span>ReactJs, Wordpress</span>
                            </div>
                        </header>
                        <p>A bio vem aqui baskaska lkans aksna </p>
                        <a href="#">Acessar perfil do GitHub</a>
                    </li>
                    <li className="dev-item">
                        <header>
                            <img
                                src="https://avatars0.githubusercontent.com/u/1545896?s=460&v=4"
                                alt="Alan Vasconcelos"
                            />
                            <div className="user-info">
                                <strong>Alan Vasconcelos</strong>
                                <span>ReactJs, Wordpress</span>
                            </div>
                        </header>
                        <p>A bio vem aqui baskaska lkans aksna </p>
                        <a href="#">Acessar perfil do GitHub</a>
                    </li>
                    <li className="dev-item">
                        <header>
                            <img
                                src="https://avatars0.githubusercontent.com/u/1545896?s=460&v=4"
                                alt="Alan Vasconcelos"
                            />
                            <div className="user-info">
                                <strong>Alan Vasconcelos</strong>
                                <span>ReactJs, Wordpress</span>
                            </div>
                        </header>
                        <p>A bio vem aqui baskaska lkans aksna </p>
                        <a href="#">Acessar perfil do GitHub</a>
                    </li>
                    <li className="dev-item">
                        <header>
                            <img
                                src="https://avatars0.githubusercontent.com/u/1545896?s=460&v=4"
                                alt="Alan Vasconcelos"
                            />
                            <div className="user-info">
                                <strong>Alan Vasconcelos</strong>
                                <span>ReactJs, Wordpress</span>
                            </div>
                        </header>
                        <p>A bio vem aqui baskaska lkans aksna </p>
                        <a href="#">Acessar perfil do GitHub</a>
                    </li>
                </ul>
            </main>
        </div>
    );
}

export default App;
