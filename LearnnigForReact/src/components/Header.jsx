import "../components/Header.css";

function Header({title, theme, setTheme }) {
    function toggleTheme() {
        if (theme === "light") {
            setTheme("dark");
        }else {
            setTheme("light");
        }
    }

    
    return(
        <nav>
        <h1>{title}</h1>
        <button onClick={toggleTheme}>{theme==null ?"light":theme}</button>
        </nav>
    )
    
}
export default Header;
