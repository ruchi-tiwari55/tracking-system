import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import styles from '../../styles/login.module.css'

const Search = () => {
    return (
            <div className={styles.left_search}>
                <div className={styles.search_icon}>
                    <SearchIcon />
                </div>
                <input placeholder='Coming Soon...'></input>
                <div className={styles.mic_icon}>
                    <MicIcon />
                </div>
            </div>
    )
}

export default Search