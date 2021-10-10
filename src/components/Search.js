import { useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useHistory, useLocation } from "react-router"
import Styles from './Search.module.css'

export function Search() {
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    const query = useQuery()
    const search = query.get("search")
    const [searchText, setSearchText] = useState("")
    const history = useHistory()

    useEffect(() => {
        setSearchText(search || "")
    },[search])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        history.push("/?search=" + searchText)
    }
    return (
        <form className={Styles.container} onSubmit={handleSubmit}>
            <div className={Styles.searchBox}>
                <input type="text" className={Styles.searchInput}
                 placeholder="Search movies" value={searchText}
                 onChange={(e) => {setSearchText(e.target.value)}}/>
                <button type="submit" className={Styles.searchButton}>
                    <FaSearch />
                </button>
            </div>
        </form>
    )
}
