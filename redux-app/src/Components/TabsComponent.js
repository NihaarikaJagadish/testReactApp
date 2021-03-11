import  React from "react";
import {Tabs, Tab, AppBar, Card} from "@material-ui/core";

const Home = () => {
    const [selectedTab, setSelectedTab] = React.useState(0);

        const handleChange = (event,newValue) => {
            setSelectedTab(newValue);
        };
        const cardStyle = {
            width:"100%",
            marginLeft : 30,
            marginRight: 30

        }

        const HeaderColors = {
            backgroundColor:"#d7dbe6",
            color:"#316090",
            fontWeight:"bold"
        }

        return (
            <Card style={cardStyle} className="shadow p-3 mb-8 bg-white rounded">
            <AppBar position="static">
            <Tabs indicatorColor="primary" style={HeaderColors} value={selectedTab} variant="fullWidth" onChange={handleChange} >
            <Tab label="MY AGENTS"  />
            <Tab label="MESSAGES" />
            <Tab label="DOCUMENTS" />
          </Tabs>
          </AppBar>
          </Card>
        )
}

export default Home;