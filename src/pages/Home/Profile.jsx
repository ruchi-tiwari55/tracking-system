

import React from 'react';
import { Container, Typography, Avatar, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
import styles from '../../styles/home/profile.module.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';

const ProfileContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '70vh',
  marginTop:20
});

const ProfileCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  maxWidth: 900,
  width: '100%',
}));

const ProfileAvatar = styled(Avatar)({
  width: 150,
  height: 150,
  marginBottom: '16px',
});

function Profile() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText('https://lzycrazy.com/register/1904');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Container>
      <ProfileContainer>
        <Grid container justifyContent="center">
          <Grid item xs={3} md={0} lg={30}>
            <ProfileCard>
              <Grid container justifyContent="center" alignItems="center" spacing={2}>
                <Grid item xs={12}>
                  <ProfileAvatar
                    src="https://lzycrazy.com/assets/about-bg.d32aac61.jpg"
                    alt="Profile"
                  />
                 
                </Grid>
             
                <Grid item xs={20}>
                  <Typography variant="h4" align="center" gutterBottom>
                    John Doe
                  </Typography>
                </Grid>
                <Grid item xs={1} sm={6}>
                  <Typography variant="body1">
                    <strong>Last Name:</strong> Doe
                  </Typography>
                </Grid>
                <Grid item xs={1} sm={6}>
                  <Typography variant="body1">
                    <strong>Email:</strong> johndoe@example.com
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body1">
                    <strong>State:</strong> Madhya Pradesh
                  </Typography>
                </Grid>
                <Grid item xs={100} sm={6}>
                  <Typography variant="body1">
                    <strong>Mobile:</strong> +1234567890
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant={isMobile ? 'body1' : 'h5'} fontSize={13}>
                    <i className="fa fa-copy" onClick={handleCopyClick} style={{ marginRight: 10 }} />
                    REFERRAL LINK: <span>https://lzycrazy.com/register/1904</span>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">
                    <strong>Referral Count:</strong> 13
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">
                    <strong>Pending Referrals:</strong> 76
                  </Typography>
                </Grid>
              </Grid>
            </ProfileCard>
          </Grid>
        </Grid>
      </ProfileContainer>
    </Container>
  );
}

export default Profile;


