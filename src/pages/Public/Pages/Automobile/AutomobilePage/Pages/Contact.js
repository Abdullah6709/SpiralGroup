import React, { useState } from 'react';
import { Box, Typography, Toolbar, Grid, Stack, TextField, Button } from '@mui/material';
import Contactimg from '../../../../../../assets/images/Contactimg.jpg';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';

const BackgroundSection = ({ image, title }) => (
    <Box
        component="main"
        sx={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            flexGrow: 1,
            height: { xs: '60vh', sm: '90vh' },
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            clipPath: 'polygon(0 0, 100% 0, 100% 95%, 50% 100%, 0 95%)',
            '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                zIndex: 0,
            },
        }}
    >
        <Toolbar />
        <Typography
            variant="h2"
            sx={{
                color: '#fff',
                position: 'relative',
                zIndex: 1,
                fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
            }}
        >
            {title}
        </Typography>
    </Box>
);

const ContactInfo = ({ icon, title, content }) => (
    <Grid item xs={12} sm={6} md={3}>
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
            <Box>
                {icon}
            </Box>
            <Box>
                <Typography variant="h6">
                    <b>{title}</b>
                </Typography>
                <Typography variant="h5">
                    {content}
                </Typography>
            </Box>
        </Stack>
    </Grid>
);

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to a server
        console.log(formData);
        // Reset form fields after submission
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            message: '',
        });
    };

    return (
        <div>
            <BackgroundSection image={Contactimg} title="Contact us" />
            <Box sx={{ m: { xs: 2, sm: 4 } }}>
                <Typography variant="h6" mb={2}>
                    Please let us know if you have a question, want to leave a comment, or would like further information about <span style={{ color: '#2980B9' }}>SHSPL.</span>
                </Typography>
                <Grid container spacing={2} mb={5} >
                    <ContactInfo
                        icon={<PlaceIcon />}
                        title="Location:"
                        content="3rd Floor, Bhavani Complex, Sector-27, Noida-201304."
                    />
                    <ContactInfo
                        icon={<CallIcon />}
                        title="Call Us:"
                        content="+91-0000000000"
                    />
                    <ContactInfo
                        icon={<ContactPhoneIcon />}
                        title="Landline:"
                        content="+91-000000000"
                    />
                    <ContactInfo
                        icon={<EmailIcon />}
                        title="Have any questions?"
                        content="info@spiralegroup.com"
                    />
                </Grid>
                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        maxWidth: 600,
                        margin: '0 auto',
                        p: 3,
                        borderRadius: 1,
                        boxShadow: 10,
                        mb: 10
                    }}
                    onSubmit={handleSubmit}
                >
                    <Typography variant="h5" component="h2" sx={{ textAlign: 'center' }}>
                        Contact Us
                    </Typography>
                    <TextField
                        label="Full Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                    <TextField
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                    <TextField
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        fullWidth
                        multiline
                        rows={4}
                        required
                    />
                    <Button variant="contained" color="primary" type="submit">
                        Send Message
                    </Button>
                </Box>
            </Box>
        </div>
    );
};

export default Contact;
