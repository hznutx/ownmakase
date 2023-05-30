import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { getAllFoodMenu } from "../../../utils/apiCalling"
import fastFood from '../../../assets/image/fastFood.png'
const FetchFood = () => {
    const [foodData, setFoodData] = useState([])
    const [limit, setLimit] = useState(0)

    const onClickFetch = async () => {
        try {
            const response = await getAllFoodMenu({ limit })
            setFoodData(response.data)
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <Stack gap={2}>
            <Stack flexDirection={'row'} gap={2} justifyContent={'space-evenly'}>
                <TextField type="number" value={limit} onChange={(e) => e.target.value >= 0 ? setLimit(e.target.value) : ""} />
                <Button variant="contained" sx={{ maxWidth: 100, }} onClick={onClickFetch}>Fetch</Button>
            </Stack>
            {foodData.map((food, index) => (
                <Card key={index} elevation={2} sx={{ p: 2, width: '80%', alignSelf: 'center', display: 'flex', justifyContent: "space-between" }} >
                    <Box>
                        <Typography>Name : {food.menuName}</Typography>
                        <Typography>Servings : {food.menuCount}</Typography>
                        <Typography>Creater : ##### </Typography>
                        <Typography>Rate : ##### </Typography>
                    </Box>
                    <Box component={'img'} src={food.menuImg != null ? food.menuImg : fastFood} width={'30%'} />
                </Card>
            ))}
        </Stack>
    )
}

export default FetchFood