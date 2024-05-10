import React, { useEffect, useState } from "react";
import queryString from 'query-string';
import "./HomePage.scss";
import ColorBox from "../../components/ColorBox";
import ToDoList from "../../components/ToDoList";
import ToDoForm from "../../components/ToDoForm";
import PostList from "../../components/PostList";
import Pagination from "../../components/Pagination";
import PostFiltersForm from "../../components/PostFiltersForm";
import Clock from "../../components/Clock";
import BetterClock from "../../components/BetterClock";
import MagicBox from "../../components/MagicBox";
import RefPrevCount from "../../components/RefPrevCount";

function HomePage() {

  const [todoList, setTodoList] = useState([

    { id: 1, title: "I Love Easy FrontEnd 💕"},
    { id: 2, title: "We Love Easy FrontEnd 👌"},
    { id: 3, title: "They Love Easy FrontEnd 💖"},
  ]);


 // ==========================PAGINATION====================================================
  const [pagination, setPagination] = useState({

    _page: 1,
    _limit: 10,
    _totalRows: 11,
  });

  const [filters, setFilters] = useState({

    _limit: 10,
    _page: 1,
  });


  function handlePageChange(newPage) {

    console.log('New Page: ', newPage);

    setFilters({

      ...filters,
      _page: newPage,
    });
  }


  // =================================CALL API=============================================

  const [postList, setPostList] = useState([])

  useEffect(() => {

    async function fetchData() {

      try {

        // _limit=10&_page=1
        // const paramsString = new URLSearchParams(filters)
        const paramsString = queryString.stringify(filters);

        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;

        const response = await fetch(requestUrl);
  
        const responseJSON = await response.json();
  
        console.log({responseJSON})
  
        const { data, pagination } = responseJSON;

        setPostList(data);
        setPagination(pagination);

      } catch (error) {
        
        console.log('Error: ' + error);
      }
    }

    fetchData();

  }, [filters])


  // ==============================================================================

  function handleTodoClick(todo) {

    // console.log(todo);

    const index = todoList.findIndex((x) => x.id === todo.id);

    if (index < 0) {
      return;
    }

    const newTodoList = [...todoList];

    newTodoList.splice(index, 1);

    setTodoList(newTodoList);
  }


  function handleTodoFormSubmit(formValue) {

    console.log("formSubmit", formValue);

    // add new todo to current todo list
    const newTodo = {
      id: todoList.length + 1,
      ...formValue,
    };

    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  // =========================SEARCH FORM=====================================================

  function handleFiltersChange(newFilter) {

    // console.log('newFilter', newFilter);

    setFilters({

      ...filters,
      _page: 1,
      title_like: newFilter.searchTerm,
    });
  }

  return (

    <div className="home-page">
      <h1>ReactJS HOOK</h1>


      {/* <ColorBox /> */}

      {/* <ToDoForm onSubmit={handleTodoFormSubmit} /> */}
      {/* <ToDoList todos={todoList} onTodoList={handleTodoClick} /> */}

      {/* <PostList posts={postList} /> */}

      {/* <Pagination pagination={pagination} onPageChange={handlePageChange}/> */}

      {/* <PostFiltersForm onSubmit={handleFiltersChange}/> */}

      {/* <Clock /> */}

      {/* <BetterClock /> */}

      {/* <MagicBox/> */}

      {/* <RefPrevCount /> */}

    </div>
  );
}

export default HomePage;