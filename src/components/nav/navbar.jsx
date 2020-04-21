import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { IoMdHome, IoMdHelp, IoMdMenu, IoMdArrowBack, IoIosSpeedometer, IoMdExit, IoMdGitMerge } from 'react-icons/io';
import { FiBarChart2 } from 'react-icons/fi';
import { MdBubbleChart } from 'react-icons/md';
import { GiStack, GiSelect } from 'react-icons/gi';
import { TiSortNumerically } from 'react-icons/ti';
import { FaSortNumericUp } from 'react-icons/fa';
import './nav.css';

export default function NavBar() {
    return (
        <nav className='navbar'>
            <Link to="/">
                JavaScript Visualizer
            </Link>

            <ul className='navbar-nav'>
                <NavItem icon={<IoMdHome />} path={"/"}/>
                <NavItem icon={<IoMdHelp />} path={"/help"}/>
                <NavItem icon={<IoMdMenu />} >
                    <DropdownMenu />
                </NavItem>
            </ul>
        </nav>
    )
}

function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className='nav-item'>
            <Link to={props.path} className='icon-button' onClick={() => setOpen(!open)}>
                {props.icon}
            </Link>

            {open && props.children}
        </li>
    )
}

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        setMenuHeight(el.offsetHeight);
    }

    function DropdownItem(props) {
        return (
            <Link to={props.path} className='menu-item' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className='icon-button'>{props.leftIcon}</span>
                {props.children}
                <span className='icon-right'>{props.rightIcon}</span>
            </Link>
        )
    }

    return (
        <div className='dropdown' style={{ height: menuHeight }} ref={dropdownRef}>
            
            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames='menu-primary'
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className='menu'>
                    <DropdownItem
                        leftIcon={<FiBarChart2 />}
                        goToMenu="sorts"
                    >
                        Sorts
                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'sorts'}
                timeout={500}
                classNames='menu-secondary'
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className='menu'>
                    <DropdownItem 
                        goToMenu='main' 
                        leftIcon={<IoMdArrowBack />}
                    >   Back
                    </DropdownItem>

                    <DropdownItem 
                        leftIcon={<MdBubbleChart />}
                        path='/bubblesort'
                    >   Bubble Sort
                    </DropdownItem>

                    <DropdownItem
                        leftIcon={<GiSelect />}
                        path='/selectionsort'
                    >   Selection Sort
                    </DropdownItem>

                    <DropdownItem
                        leftIcon={<IoMdExit />}
                        path='/insertionsort'
                    >   Insertion Sort
                    </DropdownItem>

                    <DropdownItem
                        leftIcon={<IoMdGitMerge />}
                        path='/mergesort'
                    >   Merge Sort
                    </DropdownItem>

                    <DropdownItem
                        leftIcon={<IoIosSpeedometer />}
                        path='/quicksort'
                    >   Quick Sort
                    </DropdownItem>

                    <DropdownItem
                        leftIcon={<GiStack />}
                        path='/heapsort'
                    >   Heap Sort
                    </DropdownItem>

                    <DropdownItem
                        leftIcon={<TiSortNumerically />}
                        path='/countingsort'
                    >   Counting Sort
                    </DropdownItem>

                    <DropdownItem
                        leftIcon={<FaSortNumericUp />}
                        path='/radixsort'
                    >   Radix Sort
                    </DropdownItem>
                </div>
            </CSSTransition>

        </div>
    )
}