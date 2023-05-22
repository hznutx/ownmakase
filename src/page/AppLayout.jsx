import { Box, Stack } from "@mui/material"
import Navbar from "../component/Navbar"
import Footer from '../component/Footer'
import { Outlet } from "react-router-dom"

const AppLayout = () => {
    return (
        <Stack>
            <Navbar />
            <Box mt={5}>
                <Outlet />
            </Box>
            <Footer />
        </Stack>
    )
}

export default AppLayout