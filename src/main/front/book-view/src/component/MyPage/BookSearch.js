import React,{useState,useEffect} from 'react';
import styles from './BookSearch.module.css';
import axios from 'axios';
import Books from './Books'
import Pagination from './Pagination'
const BookSearch = () =>{


const bookList = (list) =>{


    if(list){
        let = result = list.slice(offset, offset+ limit);
        return result;
    }
}

     useEffect(() => {
            putSpringData();
        },[])

  async function putSpringData() {
        await axios
        .get("http://localhost:8080/books/books")
        .then((res)=>{
            console.log(res.data);
            setData(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }


    return (
            <>

                <div className={styles.container}>
                 <input className ={styles.text}   placeholder='검색'  ></input>

                <hr />
                    <div>
                       <Books info={bookList(bookInfo)}/>
                       <Pagination limit={limit} page={page} totalList={bookInfo.length} setPage={setPage} />
                        </div>
                    </div>
                </div>

            </>
    )
}

export default BookSearch;