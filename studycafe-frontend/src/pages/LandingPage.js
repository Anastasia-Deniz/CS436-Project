import React from 'react';
import { Container, Grid, Tabs, Tab, Box } from '@mui/material';
import Login from '../components/Login';
import Register from '../components/Register';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function LandingPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth={false} disableGutters style={{ height: '100vh' }}>
      <Grid container style={{ height: '100vh' }}>
        <Grid item xs={8} style={{ overflow: 'hidden', height: '100vh' }}>
          <img src="/studyCafe-image.png" alt="StudyCafe" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Grid>
        <Grid item xs={4} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh' }}>
          <Box mb={2}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Login" />
              <Tab label="Register" />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Login />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Register />
          </TabPanel>
        </Grid>
      </Grid>
    </Container>
  );
}