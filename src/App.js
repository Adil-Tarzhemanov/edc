import styles from './App.module.scss';
// import { Design } from './pages/Design/Design';
import { Home } from './pages/Home/Home';
// import { Site } from './pages/Site/Site';

function App() {
    return (
        <div className={styles.globalContainer}>
            <Home />
            {/* <Design /> */}
            {/* <Site /> */}
        </div>
    );
}

export default App;
