import React, { useEffect } from 'react';
import Theme from './components/layout/Theme';
import Router from './routes/Router';
import Loader from './components/common/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from './store/actions/userActions';

function App() {
	const appIsLoading = useSelector(state => state.APP.appIsLoading);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setCurrentUser());
	}, [setCurrentUser]);
	return (
		<Theme>
			{
				appIsLoading ?
					(<div style={{display: 'grid', justifyContent: 'center', height: '100vh'}}>
						<Loader type="linear" />
					</div>)
					: <Router />
			}
		</Theme>
	);
}

export default App;
