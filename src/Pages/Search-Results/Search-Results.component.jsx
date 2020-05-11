import React from 'react';
import {Route} from 'react-router-dom';

import SearchList from '../../components/Search-List/Search-List.component';

const SearchResultsPage = ({match}) => (
    <div>
        <Route exact path={`${match.path}`} component={SearchList}/>
    </div>
);
 
export default SearchResultsPage;