import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import CustomListView from './children/CustomListView';
import HeaderView from './children/header';
import FooterView from './children/footer';

const style = {
  home: {
    backgroundColor: 'black',
    color: 'white'
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
  tab: {
    backgroundColor: 'white'
  }
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const TabView = (props) => {
  const { window } = props;
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const container = window !== undefined ? () => window().document.body : undefined;
  return (

    <Box sx={{ display: 'flex', flexGrow: 1 }}>
      <CssBaseline />
      <HeaderView container={container} type='3'/>

      <Box
        component="main"
        style={style.home}
        sx={{ flexGrow: 1 }}
      >
        <Toolbar />
          <Grid container spacing={0}>
            <Grid item xs>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <Box sx={{ width: '100%', backgroundColor:'#202020'}}>

                <Box>
                  <Tabs value={selectedTab} onChange={handleChange} aria-label="Rig Nft" TabIndicatorProps={{ style: { background: 'white'}}} centered>
                    <Tab label="Ownable" {...a11yProps(0)} style={style.link}/>
                    <Tab label="Minable" {...a11yProps(1)} style={style.link}/>
                    <Tab label="Your Rigs" {...a11yProps(2)} style={style.link}/>
                  </Tabs>
                </Box>
                <TabPanel value={selectedTab} index={0}>
                  <Typography variant="subtitle2"  component="div" >
                    <CustomListView value={selectedTab} />
                  </Typography>
                </TabPanel>
                <TabPanel value={selectedTab} index={1}>
                  <Typography variant="subtitle2"  component="div" >
                    <CustomListView value={selectedTab} />
                  </Typography>
                </TabPanel>
                <TabPanel value={selectedTab} index={2}>
                  <Typography variant="subtitle2"  component="div" >
                    <CustomListView value={selectedTab} />
                  </Typography>
                </TabPanel>
              </Box>
            </Grid>
            <Grid item xs>
            </Grid>
          </Grid>
          <FooterView />
        </Box>
      </Box>

  )
};

export default TabView;
