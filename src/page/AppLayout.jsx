import { Box, Stack } from "@mui/material"
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import { Outlet } from "react-router-dom"

const AppLayout = () => {
    return (
        <Stack>
            <Navbar />
            <Box my={11}>
                <Outlet />
            </Box>
            <Footer />
        </Stack>
    )
}

export default AppLayout