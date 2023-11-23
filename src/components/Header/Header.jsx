import "./Header.scss"

const Header = () => {
    return (
        <header className="header">
            <h1>Jay Cowit</h1>
            <div className="container">
                {/* <span>Animations are </span> */}
                <p className="changeable">Sound Designer, Editor, Mixer</p>
                <p className="changeable">Copy Editor, Script Writer, Consultant</p>
                <p className="changeable">Musician</p>
                <p className="changeable">Artist</p>
                <p className="changeable">Director/Voice Coach</p>
                <p className="changeable">Voice-Over Artist/On-Air Host</p>
            </div>
        </header>
    )
}

export default Header