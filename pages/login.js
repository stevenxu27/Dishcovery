import '@fontsource/inter';
import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemeSelector: 'dark',
});

function Login() {
    return (
        <CssVarsProvider theme={theme}>
            <Sheet
                sx={{
                    width: 300,
                    mx: 'auto', // margin left & right
                    my: 4, // margin top & bottom
                    py: 3, // padding top & bottom
                    px: 2, // padding left & right
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    borderRadius: 'sm',
                    boxShadow: 'md',
                }}>

                {/* title */}
                <div>
                    <Typography level="h4" component="h1">
                        Big Back Brochure
                    </Typography>
                    <Typography level="body-sm">your pocket guide to menus worldwide.</Typography>
                </div>

                {/* form */}
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                        // html input attribute
                        name="email"
                        type="email"
                        placeholder="johndoe@email.com"
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input
                        name="password"
                        type="password"
                        placeholder="password"
                    />
                </FormControl>

                <Button sx={{ mt: 1 /* margin top */ }}>
                    Log in
                </Button>
                <Typography
                    endDecorator={<Link href="/sign-up">Sign up</Link>}
                    fontSize="sm"
                    sx={{ alignSelf: 'center' }}
                >
                    Don't have an account?
                </Typography>


            </Sheet>
        </CssVarsProvider>
    );
}

export default Login;
