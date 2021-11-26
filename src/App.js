import React from 'react';
import Theme from './components/layout/Theme';
import Router from './routes/Router';
import Loader from './components/common/Loader';
import { useSelector } from 'react-redux';

function App() {
	const appIsLoading = useSelector(state => state.APP.appIsLoading);
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
