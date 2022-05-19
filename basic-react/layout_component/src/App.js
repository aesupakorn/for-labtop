import './App.css';
import Grid from './component/Grid';
import Layout from './component/Layout';
import Notification from './component/Notification';
function App() {
    return (
        <main className="app-main">
            <div className="app-container">
                <Notification title="Title" description="description" caution="danger"/>
                <Grid ncolumn={2}>
                    <Layout title="คำคม"> {/* เป็น layout component*/}
                        <p>จ้องคอมแล้วตาเบลอ แต่ถ้าจ้องเธอแล้วจะได้เบอร์ปะ</p>
                    </Layout>
                
                    <Layout title="Description List">
                        <dl>
                            <dt><b>Apples</b></dt>
                            <dd>- They are red</dd>
                        </dl>
                    </Layout>
                    <Layout title="Game">
                        <ul>
                        <li>Apex</li> 
                        <li>Valorant</li>
                        <li>GarticPhone</li>
                        </ul>
                    </Layout>
                </Grid>    
            </div>
        </main>
    );
}

export default App;
