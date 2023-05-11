import React from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router';
import { faSearch, faArrowUpFromBracket, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import TopBar from './topbar';
import SearchBar from 'components/SearchBar';
import NameBar from 'components/NameBar';
import ToolBar from 'components/ToolBar';
import CategoryTab from 'components/CategoryTab';
import style from './style.module.scss';

const Header: React.FC = () => {
    const location = useLocation();
    const { itemId } = useParams<{ itemId: string }>();
    return (
        <div className={style.header}>
            <TopBar>
                {
                    !!itemId == false && location.pathname == '/' ?
                        <>
                            <SearchBar />
                            <ToolBar
                                children={[
                                    {
                                        icon: faBell
                                    },
                                    {
                                        icon: faCheck
                                    }
                                ]}
                            />
                        </>
                        :
                        <>
                            <NameBar />
                            <ToolBar
                                children={[
                                    {
                                        icon: faSearch
                                    },
                                    {
                                        icon: faArrowUpFromBracket
                                    }
                                ]}
                            />
                        </>
                }

            </TopBar>
            {
                location.pathname == '/' && <CategoryTab />
            }
        </div>
    )
}

export default Header;