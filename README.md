# NBA Legends_with_lifting-state-up

[:point_right: Click here to see on browser](https://nba-legends-app-with-lifting-state-up.vercel.app/)

![lifting state up](https://github.com/kaplanh/nba_legends-app_with_lifting-state-up/assets/101884444/5897c08b-f55a-4a25-8bfc-2c37bcf8a636)

---

| **What's used in this app ?**                                                | **How use third party libraries**          | **Author**                                                                       |
| ---------------------------------------------------------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------- |
| [lifting state up](https://react.dev/learn/sharing-state-between-components) |                                            | [Take a look at my portfolio](https://kaplanh.github.io/Portfolio_with_CssFlex/) |
| useState() Hook                                                              |                                            | [Visit me on Linkedin](https://www.linkedin.com/in/kaplan-h/)                    |
| Conditional rendering                                                        |                                            |                                                                                  |
| [React-Bootstrap](https://react-bootstrap.netlify.app/)                      | npm i / yarn add react-bootstrap bootstrap |                                                                                  |
| Deploy with [Vercel](https://vercel.com/dashboard)                           |                                            |                                                                                  |

---

## How To Run This Project 🚀

<br/>

### 💻 Install React 👇

```bash
yarn create react-app .  or npx create-react-app .
```

### 💻 Install Sass 👇

```bash
yarn add sass  or npm i sass
```

## 🔴 Delete these files and delete the imports👇

    - App.test.js
    - reportWebVitals.js
    - setupTests.js
    - favicon.ico
    - logo192.png
    - logo512.png
    - manifest.json
    - robots.txt

### 💻 Start the project 👇

```bash
yarn start or npm start
```

OR

-   <strong>Clone the Repo</strong>

    ```sh
    git clone
    ```

-   <strong>Install NPM packages</strong>

    ```sh
    npm install or yarn
    ```

-   <strong>Run the project</strong>

    ```sh
    npm start or yarn start
    ```

-   <strong>Open the project on your browser</strong>

    ```sh
    http://localhost:3000/
    ```

-   ### <strong>Enjoy! 🎉</strong>

---

## Project Skeleton

```
nba legends (folder)
|
|----public (folder)
│     └── index.html
|----src (folder)
|    |--- components (folder)
│    │       ├── ContainerCard.jsx
│    │       ├── Header.jsx
│    │       ├── PlayerCard.jsx
│    │
|    |--- helper (folder)
|    |       |── data.js
│    │
│    |--- assets (folder)
|    |      ├── nba-logo.png
|    |
│    ├--- App.js
│    │--- data.js
│    |--- index.js
│    ├--- index.css
│
│
|-- .gitignore
|── package-lock.json
├── package.json
|── README.md
|── yarn.lock


```

---

### At the end of the project, the following topics are to be covered;

-   Lifting state up

    ```jsx
    // src/App.jsx
        import CardContainer from "./components/cardcontainer/CardContainer";
    import Header from "./components/header/Header";

    import { useState } from "react";

    function App() {
       ** const [search, setSearch] = useState(""); **
        return (
            <div>
              **  <Header setSearch={setSearch} />**
              **  <CardContainer search={search} />**
            </div>
        );
    }

    export default App;


    // src/Header.jsx
    import img from "../../assets/nba-logo.png";

    **const Header = ({ setSearch }) => {**
        return (
            <div className="text-center mt-4 ">
                <img src={img} alt="" />
                <h1>NBA Legends</h1>
                <input
                    **onChange={(e) => setSearch(e.target.value)}**
                    className="form-control w-50 mx-auto m-5"
                    type="search"
                    name="name"
                    id="name"
                    placeholder="Search Player..."
                />
            </div>
        );
    };

    export default Header;



    // src/CardContainer.jsx
    import { data } from "../../helper/data";
    import PlayerCard from "../playercard/PlayerCard.jsx";
    const CardContainer = ({ search }) => {
        return (
            <div className="container">
                <div className=" row ">
                    {data
                        .filter((player) =>
                            player.name
                                .toLocaleLowerCase()
                                .includes(search.trim().toLocaleLowerCase())
                        )
                        .map((player, i) => (
                            <PlayerCard key={i} {...player} />
                        ))}
                </div>
            </div>
        );
    };
    ```

export default CardContainer;

        ```

-   conditional rendering

    ```jsx
    import Img from "./Img";
    import Ul from "./Ul";
    import "./PlayerCard.css";

    import { useState } from "react";

    const PlayerCard = ({ img, name, statistics }) => {
        const [visible, setVisible] = useState(true);

        const handleClick = () => {
            setVisible(!visible);
        };

        return (
            <div
                className=" col col-md-6 col-lg-4 col-xl-3 p-2"
                style={{ height: "450px" }}
            >
                <div onClick={handleClick} className="card h-100 border-0 ">
                    {visible ? (
                        <Img img={img} />
                    ) : (
                        <Ul statistics={statistics} />
                    )}
                    <div className="card-body h-25 ">
                        <h5 className="card-title">{name}</h5>
                    </div>
                </div>
            </div>
        );
    };

    export default PlayerCard;
    ```

-   yükseklikleri farkli olan img leri esitlemek icin

    ```jsx
    const Img = ({ img }) => {
        return (
            <div className="img-container h-75">
                <img
                    src={img}
                    className="card-img-top h-100 rounded-0"
                    alt="player"
                />
            </div>
        );
    };

    export default Img;
    ```

---

## Feedback and Collaboration

I value your feedback and suggestions. If you have any comments, questions, or ideas for improvement regarding this project or any of my other projects, please don't hesitate to reach out.
I'm always open to collaboration and welcome the opportunity to work on exciting projects together.
Thank you for visiting my project. I hope you have a wonderful experience exploring it, and I look forward to connecting with you soon!

<p align="center"> ⌛<strong> Happy Coding </strong> ✍ </p>
