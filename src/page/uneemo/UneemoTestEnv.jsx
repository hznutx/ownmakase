import { Box, Stack, Tab, Tabs, Typography } from "@mui/material"
import { useState } from "react"
import TabPanel from "../../components/mui-custom/TabPanel"
import FetchFood from "./components/FetchFood"
import DeleteFood from "./components/DeleteFood"
import AddFood from "./components/AddFood"

const UneemoTestEnv = () => {
    const [nowTab, setNowTab] = useState(0)

    return (
        <Stack gap={2} mt={-4} >
            <Typography variant="h4" textAlign={'center'}>uneemo-zone</Typography>
            <Box>
                <Tabs value={nowTab} onChange={(e, numb) => setNowTab(numb)} >
                    <Tab label="Fetch" />
                    <Tab label="Add" />
                    <Tab label="Update" />
                    <Tab label="Delete" />
                </Tabs>
            </Box>
            <TabPanel value={nowTab} index={0}>
                <FetchFood />
            </TabPanel>
            <TabPanel value={nowTab} index={1}>
                <AddFood />
            </TabPanel>
            <TabPanel value={nowTab} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={nowTab} index={3}>
                <DeleteFood />
            </TabPanel>

        </Stack>
    )
}

export default UneemoTestEnv