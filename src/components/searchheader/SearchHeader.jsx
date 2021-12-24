import styles from './searchheader.module.css';
import React, { memo, useRef } from 'react';

const SearchHeader = memo(({onSearch}) => {
    const inputRef = useRef();
    const handleSearch = () =>{
        const value = inputRef.current.value;
        onSearch(value);
    }
    const onClick = () =>{
        handleSearch();
    }
    const onKeyPress = (event) =>{
        if(event.key==="Enter"){
            handleSearch();
        }
    }
            return(
                <header className={styles.header}>
                    <div className={styles.logo}>
                        <img className={styles.img} src="/images/youtube.ico" alt="logo" />
                        <h1 className={styles.title}>MEtube</h1>
                    </div>
                    <input ref={inputRef} className={styles.input} type="search" placeholder="Search ..." onKeyPress={onKeyPress}/>
                    <button className={styles.button} type="submit" onClick={onClick}>
                        <img className={styles.search}src="/images/search_icon.png" alt="search" />
                    </button>
                </header>
                
            )
            });

export default SearchHeader;